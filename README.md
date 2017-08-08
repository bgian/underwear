# Underwear

Underwear is a lightweight node MVC framework built for single paged applications using vue.js. It comes with built in authentication using passport, some useful helpers to make things easier and not forgetting a nice folder structure to keep things orgainsed.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This is a node server, so I'll assume you've installed node on your system. If you want to use the `npm run server-watch` you'll want to download and install nodemon. This will allow the server to restart when changes are made, also this was built with mongoDB database in mind. Read [this](https://scotch.io/tutorials/an-introduction-to-mongodb) to learn how to install and run MongoDB on your machine.

```
npm install -g nodemon
```

### Installing

Once you've made a folder on your system and cloned this repository into it. You'll need to run these commands to get things up and running.

First of all install the node modules.

```
npm install
```

Then we'll want to make a .env file, I've included a .env.example file with some fundamental variables so we'll rename that to .env

```
mv .env.example .env
```

Next all thats left to do is start up the server, which you can do with this command:

```
npm start
```

If you'd like to watch for changes and restart the server on change to load the new data, then you'll want to use nodemon. I've written how to install it above. To run this you simply type this command:

```
npm run start-watch
```

## Running the tests

Tests are run using mocha, they read the files in your ./tests folder. Use the following command to run them.

```
npm run test-unit
```


## Frontend Assets

Frontend assets are stored in `./resources/` you have your frontend views along with the assets (sass, js). To compile these down you can run these commands:

Compile assets down

```
npm run dev
```

Watch the files and compile on save

```
npm run watch
```

Compile assets down for production

```
npm run production
```

## How Routing Works

Because we are using vue as our router, the route views are vue files. These can be found in `./resources/views/`. They contain a `<template></template>` where the html of the page goes and a `<script></script>` for the vue code for that specific component. You can see examples of these with the auth vue files already exisiting in the project. When you want to make a new route you can simply edit the `./routes/web.js` file where you add another item in the array like so:

```javascript
{
    name: 'landing', //The name of the route
    path: '/', //The path of the page
    component: 'base/Landing', //The vue file for the route to display this is a string of the file path starting from the ./resources/views/
    //auth: true, //Optional auth boolean, if true then it'll add auth middleware on the route so only logged in users can access it
    //guest: true, //Optional guest boolean, if true then it'll redirect you to the homepage route if logged in
},
```

## Built With

* [Express](https://expressjs.com/) - Node.js web application framework
* [VueJs](https://vuejs.org/) - Frontend component based library
* [VueRouter](https://router.vuejs.org/en/) - Used to route the single paged application
* [LaravelMix](https://github.com/JeffreyWay/laravel-mix) - Used to compile the frontend assets

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Joseph Smith** - *Initial work* - [jsmth](https://jsmth.herokuapp.com/)

See also the list of [contributors](https://github.com/JosephSmith127/underwear/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
