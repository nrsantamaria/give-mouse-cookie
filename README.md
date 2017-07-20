# GiveMouseCookie
## By Asia Kane and Nicole Santamaria
## Description
A story telling game based on the book if you give a mouse a cookie.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [AngularCLI](https://cli.angular.io/)
* [(src/assets/images/firebase.png)](https://firebase.google.com/)

## Installation

* `git clone https://github.com/nrsantamaria/give-mouse-cookie`
* `cd give-mouse-cookie`
* `npm install`
* `bower install bootstrap --save`

## Firebase Integration

* Create a firebase account at `https://firebase.google.com`
* Add a new project to your firebase account
* Create a file in the app folder labeled api-keys.ts
* Add the following to your api-keys file:

```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Useful Tips

* To review content in atom with TypeScript Package install the following:
* `apm install atom-typescript`

* If you receive the following error: Error: Can't resolve 'promise-polyfill'
* Run `npm install promise-polyfill --save-exact`

* If you get some other weird firebase related error use the following to find out what file is out of date.
* Run `npm list`

## Support and Contact Details
* Please contact Nicole Santamaria at NicoleRSantamaria@gmail.com if you have any questions.

## License
This software is licensed under MIT license.

Copyright (c) 2017 Nicole Santamaria
