# Lambda invocation

Invoke an AWS Lambda function from the browser using JavaScript

## Usage instructions

- Clone the repo;
- Run `npm install` or `yarn` to install the required dependencies;
- Add the `.env` file you were provided to the project's root;
- Run `npm run start` or `yarn start` to serve the files locally in a browser;
- Run `webpack` to build the JS project to `/dist/main.js` folder.

## Editing

The source JS files can be found in the `/src` folder, and the source HTML can be found in `dist/index.html`. After editing any of these files, run `webpack` again in order to re-bundle the project into the `/dist` folder.