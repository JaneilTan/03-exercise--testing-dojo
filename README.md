# 03 Exercise - Testing Dojo 🥋

A repo of functions that need unit tests!

## Brief

Practice writing unit tests.

## Helpful Resources

- [Jest - Expect](https://jestjs.io/docs/expect)

## Instructions

### Write Tests

Several functions have been written in the `dojo/kata.js`. They have been commented to document their functionality. Your task is to write unit tests for all the functions.

Write the tests in `dojo/kata.test.js`. You should not need to modify the code in `dojo/kata.js`.

The test command will also display the test coverage, as well as generate a coverage report page. There is also an Express static server provided to serve the coverage docs.

Run the following to get the coverage report server going (don't forget to install all dependencies by running `npm install` first):

```shell
npm test  # run an initial test to generate a coverage report
npm start # serve the coverage report
```

Then open http://localhost:4000/coverage in your browser. You will need to refresh this page after you re-run the tests.

You may also want to run Jest in "watch" mode, which will rerun the tests automatically when you change/save the test file. You will need to run this command in a different terminal than the express server:

```shell
npm test -- --watch # the extra set of dashes is required!
```

**Acceptance criteria:**

- [ ] All happy path scenarios are covered with unit tests.
- [ ] Negative scenarios are covered with unit tests.
- [ ] All tests are well named by explaining what they are testing.
- [ ] There is little to no repetition in logic. [test.each()](https://jestjs.io/docs/api#testeachtablename-fn-timeout) is used to avoid duplicating the same test with different data.
- [ ] All tests pass.
- [ ] Commits are pushed to GitHub.
- [ ] The exercise has been submitted in iQualify.
