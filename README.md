# RAVN api-functional-test-automation
Code repository for RAVN Code Challenge API Functional Test Automation

#### Before Starting
Make sure you have installed at least the LTS version of [**Node.js**](https://nodejs.org/es/download/) 

#### Technologies used
- Node.js
- Typescript
- Mocha JS
- Chai
- Mochawesome

#### How to install the project.

First, clone the code repository `$ git clone https://github.com/GSGranados/api-functional-test-automation.git` and
`cd <project_cloned>`

After that, open an integrated terminal and execute the *NPM Install* command: 

```
$ npm i

-It will install all dependencies needed to run the project. Then, run the "test:all" script

$ npm run test:all -- it will run all spec files (including negative spec)

```

#### Running Test Scripts
* `$ npm run test:negative - it will run the negative spec`
* `$ npm run test:functional - it will run the functional spec`
* `$ npm run test:all - it will run All Spec Files`

##### Generate and Open Mochawesome reports

After running `npm run test:all` it will generate an output folder `reports/`. You can open the HTML file generated to visualize the resulting report or the JSON file generated with the Summary


#### Considerations.
Since this is a public API, sometimes the Service takes time to be up, It migth time a second attempt to run all Test Scripts (Nowadays the resource gets hit constantly and it might get slow on the response back).
hit `CTRL+C` to stop the run and try again.

#### Proof
![Suite Run Successfully](./assets/api-test-executed.png)

#### TS_NODE_COMPILER_OPTIONS
It's important to mention, these specs were run on a Windows Machine, for that, the NPM Scripts has the `set TS_NODE_COMPILER_OPTIONS`, but for other platforms like UNIX/MAC or Linux the `set` should be changed to `export`