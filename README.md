# Hometask
Project setup, unit tests, integration tests

## Step 1: Requirements  
Clone this repository to your workstation.  

## Step 2: Build the project locally
First of all you need to open the terminal and navigate to the project root.
**Once the path is correct, run the `yarn install` command in order to set up all project dependencies**

## Step 3: check the jest installation 
Check your "./package.json" file. As a dependencie you're supposed to see Cucumber:

```json
  "devDependencies": {
    "jest": "^25.5.4",
  }
```
## Step 4: Run tests
Run the command 'yarn test' to check the result.
Test console output example should look like this:

$ yarn test
yarn run v1.22.19
$ jest
  console.log
    The perimeter of a rectangle is 10 and the area is 6

      at log (js/rectangle.js:12:20)

 PASS  tests/rectangle.test.js
  √ should give properly rectangle perimeter (2 ms)
  √ should give properly rectangle area
  √ should give the info about perimeter and area (19 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.864 s, estimated 2 s
Ran all test suites.
