# cc-demo

[![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/jpero09/cc-demo)

Live demo [here!](https://cc-demo1.herokuapp.com/)

# Background
This was a code test that I took. See the [wiki](https://github.com/jpero09/cc-demo/wiki) for the original requirements.

# First Run
* Bring down code:
  * `git clone git@github.com:jpero09/cc-demo.git` -OR-
  * Download code manually
* `npm install` (This will install all dependencies as well as build out the "dist" folder)
* `npm start`

# Deploy Notes
* When deploying to **Heroku**, set the `NPM_CONFIG_PRODUCTION` environment variable to `false`, otherwise
  the `devDependencies` will not be included and the postinstall will fail.
