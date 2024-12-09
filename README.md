# Fortis Games QA Coding Challenge

## Overview
This repository contains:
- Written answers for Questions 1 and 2.
- An automated test (Question 3) using Cypress.

## Setup & Installation
1. Clone this repository [https://github.com/Speelcraft/fortis-qa-challenge](https://github.com/Speelcraft/fortis-qa-challenge)
2. Ensure you have Node.js and npm installed.
3. Run `npm install` in the project root to install dependencies.

## Running the Tests
- Run `npx cypress open` to open the Cypress UI and run tests interactively.
- Or run `npx cypress run` to run tests in headless mode.

## Project Structure
- `cypress/e2e/randomDates.cy.js`: Contains the test for Question 3.
- `cypress/selectors/randomDatesSelectors.js`: Stores selectors used by the test.
- `ANSWERS.md`: Contains responses for Questions 1 and 2.
- `README.md`: Project overview and instructions.
- `Diego Assis_Staff QA Engineer_Fortis Games Prompts.pdf`: Converted `ANSWERS.md` and any additional needed content.

## Reporting
Cypress by default prints results to the terminal. For richer reporting, we can integrate reporters like `mochawesome` if needed. For now, the default output is good enough in my opinion.

