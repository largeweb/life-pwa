# life-pwa
Progressive Web App I use daily for my todos and whatnot. I frequently update it when I have the time.

This app has pages to view and update files from a GitHub repo. There is also an exercise tracker that lets you configure a workout, generating buttons for you to press as you complete reps, and an "Exercise Mode" which utilizes the LocalStorage API to allow you to turn your device off or refresh the page and maintains the current state of your workout, independently across devices.

The frontend interface is built with React from create-react-app

The backend is primarily built with Express.js

This project relies on a couple small BASH scripts that need to be on the server instance running the app. It also requires the server instance to have an ssh key setup with the GitHub repo for CRUD functionality. Certain directories need to be configured in the .env file.
