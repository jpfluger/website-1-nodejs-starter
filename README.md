# Website 1: NodeJS Starter

A website primer for Node Express with Twitter Bootstrap (v3.3), Bootstrap-Dialog, JQuery, lodash, numeral and moment.

## Install

Download [NodeJS](https://nodejs.org/en/) and install the version for your operating system. `Website 101` has been updated to use node versions greater than 6.5.

Install `npm` pacakges.

```bash
$ npm install
```

Install [Bower](https://www.npmjs.com/package/bower) globally and download Third Party packages.

```bash
$ npm install -g bower
$ bower install
```

`npm` packages get installed by default into `node_modules`.

```bash
$ ls -l node_modules/
total 36
drwxrwxr-x 4 tavatar tavatar  4096 May 29 17:15 body-parser
drwxrwxr-x 4 tavatar tavatar  4096 May 29 17:15 express
drwxrwxr-x 3 tavatar tavatar 20480 May 29 17:15 lodash
drwxrwxr-x 5 tavatar tavatar  4096 May 29 17:15 moment
drwxrwxr-x 5 tavatar tavatar  4096 May 29 17:15 numeral
```

Bower packages get installed by default into `bower_components`. 

```bash
$ ls -l bower_components/
total 24
drwxrwxr-x 8 tavatar tavatar 4096 May 29 17:23 bootstrap
drwxrwxr-x 5 tavatar tavatar 4096 May 29 17:23 bootstrap-dialog
drwxrwxr-x 5 tavatar tavatar 4096 May 29 17:23 jquery
drwxrwxr-x 2 tavatar tavatar 4096 May 29 17:23 lodash
drwxrwxr-x 6 tavatar tavatar 4096 May 29 17:23 moment
drwxrwxr-x 5 tavatar tavatar 4096 May 29 17:23 numeraljs
```

## Run

```bash
$ node server.js
```

> Note: Type Ctrl-C to quit the server.

Open the client web browser to url [http://localhost:3000](http://localhost:3000).

## [MIT Licensed](LICENSE)
