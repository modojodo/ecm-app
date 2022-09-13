## Available Scripts

In the project directory, you can run:

### `npm start`

Note make sure to run the server before running this app, follow the readme here: https://github.com/modojodo/ecm-api#how-to-run

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Automation Tests

This project is using the Playwright framework for adding automation tests, to run them locally please run the tests below

`npx playwright test`

For debugging, following command would open the debugger

`npx playwright test --debug`