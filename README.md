#### Cypress Automation Framework 

##### Steps to setup the project 
- 1. Download `node.js` and `npm`
- 2. Generate Cypress directory
- 3. Generate `package.json`
- 4. Install Cypress
- 5. Install Cypress Cucumber Preprocessor
- 5. Install TypeScript
- 6. Download IDE: IntelliJ or VS Code

##### Download `node.js` and `npm`
- Download the `node.js` `.pkg` installer from: `https://nodejs.org/en/download/`
- Verify version: `node --version`
- Run `node.js` installer
- Verify version: `node -v` or `node --version`
- Update npm version: `sudo npm install npm --global`

##### Generate Cypress directory
- `mkdir dirName`
- `cd dirName`

##### Generate package.json
- `npm init` to customize the package.json
- `npm init -y` creates the package.json automatically

```json
{
  "name": "cypressautomation",
  "version": "1.0.0",
  "description": "an automation framework to validate ui and api services",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "anurag muthyam",
  "license": "ISC"
}
```
Note: `package.json` is similar to `pom.xml` or `build.gradle` to store the dependencies.

##### Install Cypress 
- `npm install cypress` or `npm install cypress --save-dev`

Downlaods Cypress deesktop app and CLI

This command downloads, unzips and finish installation Cypress on top of `node.js`. The cypress is installed to `./node_modules` dir. 

##### Install Cypress Cucumber Preprocessor
- `npm install --save-dev cypress-cucumber-preprocessor`

##### TypeScript Installation
Mac: 
- `sudo npm install -g typescript` 
- `tsc -v`
- `sudo npm uninstall -g typescript` 

##### Launch Test Runner from Cypress 
- `./node_modules/.bin/cypress open` or `npx cypress open` for mac 
- `node_modules\bin\cypress open` for windows

##### Run using Tags
-  `npx cypress-tags run -e TAGS='@smoke'`

##### Run Tests 
Run all tests:
- `./node_modules/.bin/cypress run`
- `./node_modules/.bin/cypress run --headed`


Run specific tests
- `npx cypress run --spec copy_relative_path_of_the_test_file.js`

Run all spec files in the project
- `npx cypress run`

Run specific tests: 
- `./node_modules/.bin/cypress run -spec cypress/integration/examples/regression/sample_test.spec.js`

Run tests on a specific browser:
- `./node_modules/.bin/cypress run --browser chrome`

Note by default, Cypress runs all the tests present in `examples` dir under `integration` dir

##### Cypress Project Structure
- `features` - Used to hold external pieces of static data that is used in tests
- `integration` - Location of all test files with `.js` or `.ts` extensions
- `plugins` - Constains `index.js` file used to load plugins
- `support` - Constains `command.js` & `index.js` files. 
	- `commands.js` - Used to write custom commands and overrides exisiting commands. 
	- `index.js` - Used to store global configurations and behaviours that modify cypress. This file automatically loads before the test files
- `cypress.json` - Located under the root directory. Used to store project configurations such as `baseUrl`, `port`, `env` etc.

##### install others
```shell
- `npm install -D cypress-xpath`
- `npm install chai`
- `npm install --save-dev mochawesome`
```

##### Useful VsCode extensions
- `GitLens`
-  `Material Theme` mac: cmd-k cmd-T
- `Live server`
- `css peek`
- `color highlight`
- `bracket pair colorizer`
- `es7`
- `Prettier Now`
- `Cucumber (Gherkin) Full Support`
- `Debug for Chrome`


#### upgrade or downgrade node version:
- `https://www.surrealcms.com/blog/how-to-upgrade-or-downgrade-nodejs-using-npm.html`

##### Auto indent
mac: `Shift + Option + F`
windows: `Shift + Alt + F`

##### Reference:
`https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements`



