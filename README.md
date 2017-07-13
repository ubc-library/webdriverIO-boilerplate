# WebdriverIO Testing Boilerplate
A Starting Point for automated website testing (BDD)

This starting point requires NodeJS and will install a ready-to-go test setup using WebdriverIO, Mocha/Chai, and selenium-standalone. It includes authentication utilities optimized for UBC Library properties, but most is broadly applicable.

### Basic Setup & Usage

Install dependencies with npm:

    npm install
    
Start Selenium server:

    npm start
    
Run tests:

    npm test
    
Stop Selenium server:

    npm stop
    
    
### Config & Options

To run tests, you'll need to create a `test/config.json` file that includes the target base-url and (optionally) passwords for test CWL users accounts (see `test/example-config.json`). For remote testing, this file should be generated (for example in a Gitlab pipeline).

To select browsers and change test runner configuration, see the `wdio.conf.js` file.

### Writing Tests

Tests are in JavaScript using the [WebdriverIO](http://webdriver.io/) Selenium API and the [Mocha/Chai](http://chaijs.com/) assertion library.

All tests inside the `test/specs/` directory will be run by default. Specs can be run individually 


### Running Tests

First, make sure selenium is running:
    
    npm start

Run tests:

    # run all tests (using npm alias)
    npm test
      
    # run a specific test suite (suites are defined in wdio.conf.config)
    PATH=$(npm bin):$PATH wdio --suite student
      
    # run a specific test spec
    $PATH=$(npm bin):$PATH wdio --spec test/specs/as_staff/course_home.js


When you're done, close the selenium screen session:

    npm stop
    
*See `package.json` to modify the aliased `npm` scripts