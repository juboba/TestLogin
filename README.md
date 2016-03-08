# Test application

This test application will show a responsive login page. It has been written thinking on the following specs:

* Use Angular, Vue.js, or React
* Present a login page that takes an email and password
* The login dialog should be inside a box that's centered horizontally and vertically on the window as per the attached mockup
* It should be responsive and be 400px wide on a large screen yet shrink to fit an iphone sized portrait screen
* It should validate the email and password (min length 8)
* It should have tests
* It should build for distribution so the JS is minified
* It should mock an API response that succeeds unless the password is 'password' where the auth fails
* It should indicate auth failure and success in the UI
* Check in to a Github repo and provide the link to us

## Technology employed

* Angularjs
* Bootstrap CSS

## Development tools

* NPM
* gulp
* gulp-minify
* karma
* jasmine

## Commands

To run the tests please use:

```
npm test
```

To run the application just run:

```
npm start
```
