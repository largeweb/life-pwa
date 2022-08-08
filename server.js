const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const { urlencoded } = require('express');
const multer = require("multer");
const upload = multer();

const lifePath = "/home/life"

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});


//MIDDLEWARE
app.use("/life", express.static(lifePath))
app.use(urlencoded({extended: true}))
app.use(upload.array())


// 🌟 CHANGE THIS ROUTE ON SERVER 🌟
app.get('/life', (req, res) => {
	// const reject = () => {
	// 	res.setHeader('www-authenticate', 'Basic')
	// 	res.sendStatus(401)
	// }
	// const authorization = req.headers.authorization
	// if(!authorization) {
	// 	return reject()
	// }
	// const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')
	// if(! (username === 'm' && password === 'l')) {
	// 	return reject()
	// }
	// res.sendFile('/home/matt/life/summer/todo.txt');

  var array = fs.readFileSync('/home/life/summer/todo.txt').toString().split("\n");
  var todoJson = {}
  todoJson.lines = []
  for(i in array) {
      console.log(array[i]);
      // todoJson[i] = array[i];
      todoJson.lines.push(array[i]);
  }
  todoJson.name = "Matt";
  console.log("FINISHED JSON:")
  console.log(todoJson)
  res.json(todoJson);
	// exec('cat /home/matt/life/summer/todo.txt',
  //  	function (error, stdout, stderr) {
	// 	console.log(stdout);
	// 	res.sendFile(stdout);
	// });
})
app.get('/pull-life', (req, res) => {
	console.log("we will try to pull");
	exec('cron-pull',
   	function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
		     console.log('exec error: ' + error);
		}
	});
	console.log("maybe it worked?");
})
// app.post('/added/', (req, res) => {
// 	let stuff = req.body.stuff + "\n"
// 	console.log("adding " + stuff + " to added.txt")
// 	fs.appendFile("/home/life/summer/added.txt", stuff, (err) =>{
// 		if(err) throw err;
// 		console.log("added i believe");
// 	})

// 	// PULL AND PUSH
// 	console.log("maybe we added it, now we will pull push");
// 	exec('cron-pull-push-life',
//    	function (error, stdout, stderr) {
// 		console.log('stdout: ' + stdout);
// 		console.log('stderr: ' + stderr);
// 		if (error !== null) {
// 		     console.log('exec error: ' + error);
// 		}
// 	});
// 	console.log("maybe it worked?");
// 	res.redirect('/life');
// })