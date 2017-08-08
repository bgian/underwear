# Underwear

Underwear is a lightweight node MVC framework built for single paged applications using [Vue.js](https://vuejs.org). It comes with built in authentication using passport, useful helpers to make things easier and not forgetting a nice folder structure to keep things orgainsed.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This is a node server, so I'll assume you've installed node on your system. If you want to use the `npm run server-watch` you'll want to download and install nodemon. This will allow the server to restart when changes are made.

```
npm install -g nodemon
```

_This was built with mongoDB database in mind. Read [this](https://scotch.io/tutorials/an-introduction-to-mongodb) to learn how to install and run MongoDB on your machine._

### Installing

Once you've made a folder on your system and cloned this repository into it. You'll need to run these commands to get things up and running.

First, install the node modules:

```
npm install
```

Secondly, we'll want to make a .env file. I've included a .env.example file with some fundamental variables so we'll rename that to .env:

```
mv .env.example .env
```

Lastly, all that's left to do is start the server:

```
npm start
```

If you've installed nodemon in the first step, you're capable of running and watching for changes automatically by running this command istead of `npm start`:

```
npm run start-watch
```

## Running the tests

Tests are run using mocha, they read the files in your ./tests folder. Use the following command to run them.

```
npm run test-unit
```


## Frontend Assets

Frontend assets are stored in `./resources/`. You have your frontend views along with the assets (sass, js). To compile these down you can run these commands:

Compile assets down:

```
npm run dev
```

Watch the files and compile on save:

```
npm run watch
```

Compile assets down for production:

```
npm run production
```

## How Routing Works

Because we're using Vue as our router, the route views are vue files. These can be found in `./resources/views/`. They contain a `<template></template>` where the html of the page goes and a `<script></script>` for the Vue code for that specific component. You can see examples of these with the auth Vue files that already exist in the project. When you want to make a new route you can simply edit the `./routes/web.js` file where you add another item in the array like so:

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
* [Sass](http://sass-lang.com) - Sass is a scripting language that is compiled into CSS
* [LaravelMix](https://github.com/JeffreyWay/laravel-mix) - Used to compile the frontend assets

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Joseph Smith** - *Initial work* - [jsmth](https://jsmth.herokuapp.com/)

See also the list of [contributors](https://github.com/JosephSmith127/underwear/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
