const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const { urlencoded } = require('express');
const multer = require("multer");
const cors = require("cors");
const upload = multer();
const dotenv = require('dotenv');
dotenv.config();

const lifePath = process.env.REACT_APP_LIFE_DIR;
const imagePath = process.env.REACT_APP_IMAGE_DIR;

let currentImage = 'retro-green.jpg';

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

// create a GET route for snake
app.get('/snake', (req, res) => { //Line 9
  res.sendFile("/root/life-pwa/snake.html")
});


//MIDDLEWARE
app.use("/life", express.static(lifePath))
app.use("/images", express.static(imagePath))
app.use(urlencoded({extended: true}))
app.use(upload.array())
app.use(cors())
app.use(express.json())
app.use(require('body-parser').json());

// ⚠️ THIS IS UNTESTED ⚠️
const rejectUnauthenticated = () => {
	const reject = () => {
		res.setHeader('www-authenticate', 'Basic')
		res.sendStatus(401)
	}
	const authorization = req.headers.authorization
	if(!authorization) {
		return reject()
	}
	const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')
	if(! (username === 'm' && password === 'l')) {
		return reject()
	}
}

app.post('/images/set/:imageid', (req, res) => {
  // const filePath = path.join(imagePath.toString(), req.body.imagename);
//   const filePath = path.join(imagePath.toString(), req.params.imageid);
//   console.log("Requesting image: " + filePath);
  // console.log(req.body.image);
  console.log("CHANGING IMAGE TO: " + req.params.imageid);
  currentImage = req.params.imageid;
  res.header('Access-Control-Allow-Methods', 'POST');

  // console.log("TRYING TO READ FROM: " + lifePath + req.body.dir);
  // var array = fs.readFileSync(lifePath + req.body.dir).toString().split("\n");
  // var returnJson = {}
  // returnJson.lines = []
  // for(i in array) {
  //     returnJson.lines.push(array[i]);
  // }
  // console.log("FINISHED JSON:")
  // console.log(todoJson)
  // res.json(returnJson);

  res.json({"mission":"success"});
})

app.get('/images/current', (req, res) => {
  // const filePath = path.join(imagePath.toString(), req.body.imagename);
  const filePath = path.join(imagePath.toString(), currentImage);
  console.log("Requesting image: " + filePath);
  // console.log(req.body.image);
  console.log("READING FROM: " + filePath);
  res.header('Access-Control-Allow-Methods', 'POST');

  // console.log("TRYING TO READ FROM: " + lifePath + req.body.dir);
  // var array = fs.readFileSync(lifePath + req.body.dir).toString().split("\n");
  // var returnJson = {}
  // returnJson.lines = []
  // for(i in array) {
  //     returnJson.lines.push(array[i]);
  // }
  // console.log("FINISHED JSON:")
  // console.log(todoJson)
  // res.json(returnJson);

  res.sendFile(filePath);
})


app.post('/todo/', (req, res) => {
  const filePath = path.join(lifePath.toString(), req.body.dir);
  console.log(lifePath);
  console.log(req.body.dir);
  console.log("READING FROM: " + filePath);
  res.header('Access-Control-Allow-Methods', 'POST');

  console.log("TRYING TO READ FROM: " + lifePath + req.body.dir);
  var array = fs.readFileSync(lifePath + req.body.dir).toString().split("\n");
  var returnJson = {}
  returnJson.lines = []
  let insidetodo = false
  for(i in array) {
      console.log(i)
      if (i.includes("=== START OF TODO ==="))  {
        console.log("Found Start")
        insidetodo = true;
      }
      if (i.includes("=== END OF TODO ==="))  {
        console.log("Found End")
        insidetodo = false;
      }
      if(insidetodo) {
        returnJson.lines.push(array[i]);
      }
  }
  console.log("FINISHED JSON:")
  // console.log(todoJson)
  res.json(returnJson);
})

// 🌟 CHANGE THIS ROUTE ON SERVER 🌟
app.post('/life/', (req, res) => {
  const filePath = path.join(lifePath.toString(), req.body.dir);
  console.log(lifePath);
  console.log(req.body.dir);
  console.log("READING FROM: " + filePath);
  res.header('Access-Control-Allow-Methods', 'POST');

  console.log("TRYING TO READ FROM: " + lifePath + req.body.dir);
  var array = fs.readFileSync(lifePath + req.body.dir).toString().split("\n");
  var returnJson = {}
  returnJson.lines = []
  for(i in array) {
      returnJson.lines.push(array[i]);
  }
  console.log("FINISHED JSON:")
  // console.log(todoJson)
  res.json(returnJson);
})

app.post('/pull-life', (req, res) => {
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

app.post('/addtolife', (req, res) => {

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
  setTimeout(function(){
    console.log("Changing button color to add")
    let stuff = "\n" + req.body.stuff
    let file = req.body.file + ".txt"

    console.log("adding " + stuff + " to " + file);
    fs.appendFile(process.env.REACT_APP_LIFE_DIR + file, stuff, (err) =>{
      if(err) throw err;
      console.log("added " + stuff + " to " + file);
      console.log("i believe...");
    })
    console.log("some is adding something!!");
    console.log("running cron push");
    exec('cron-addtolife',
      function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
    });
    console.log("maybe it worked?");
      setTimeout(function(){
      console.log("fetching life text")
      console.log("TRYING TO READ FROM: " + lifePath + file);
      var array = fs.readFileSync(lifePath + file).toString().split("\n");
      var returnJson = {}
      returnJson.lines = []
      for(i in array) {
        returnJson.lines.push(array[i]+"\n");
      }
      console.log("FINISHED JSON:")
      // console.log(todoJson)
      res.json(returnJson);
      }, 2000)
    }, 2000)

  }
)

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
