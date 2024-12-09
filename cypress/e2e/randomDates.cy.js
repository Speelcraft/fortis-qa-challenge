/// <reference types="cypress" />
const sel = require('../selectors/randomDatesSelectors')

describe('Random Date Generator Tests', () => {
  const fromDate = { day: 5, month: 'January', year: 2024 }
  const toDate = { day: 25, month: 'November', year: 2025 }
  //const fromDateStr = '2024-01-05' // If your chosen from date was 5 January 2024
  //const toDateStr = '2025-11-25' // If your chosen to date was 25 November 2025
  const fromDateStr = `${fromDate.year}-${sel.monthMap[fromDate.month]}-${String(fromDate.day).padStart(2, '0')}`
  const toDateStr = `${toDate.year}-${sel.monthMap[toDate.month]}-${String(toDate.day).padStart(2, '0')}`

  beforeEach(() => {
    cy.visit('/calendar-dates/')

    // Check for the cookie banner
    //cy.wait(2000)
    cy.get('body').then($body => {
      const $banner = $body.find('#cookie-banner')
      if ($banner.length > 0 && $banner.is(':visible')) {
        // banner found
        cy.wrap($banner).within(() => {
          cy.contains('button', 'Allow Selected').click()
        })
      }
    })
  })

  it('Generates 4 random dates within the specified range', () => {
    // Req 1: On ‘Step 1 : The Dates’ , pick a total of 4 random dates.
    // Set "How many random dates?"
    cy.get(sel.numberInput).clear().type('4')

    // Req 2: In the dropdown, select the date between the 5th of January 2024, and the 25th of November 2025.
    // Set the "From" date
    cy.get(sel.fromDay).select(`${fromDate.day}`)
    cy.get(sel.fromMonth).select(`${fromDate.month}`)
    cy.get(sel.fromYear).select(`${fromDate.year}`)

    // Set the "To" date
    cy.get(sel.toDay).select(`${toDate.day}`)
    cy.get(sel.toMonth).select(`${toDate.month}`)
    cy.get(sel.toYear).select(`${toDate.year}`)

    // Req 3: Press ‘Get Dates’ on Step 4.
    cy.get(sel.getDatesButton).click()

    // Req 4: Assert that the result returned 4 dates.
    // Find the paragraph that indicates how many dates should appear
    cy.contains('p', sel.resultsText)    // Uses the text from selectors file
      .next('p')
      .invoke('text')
      .then(text => {
        const dateLines = text
          .split('\n')                  // Split by new line
          .map(line => line.trim())     // Trim each line
          .filter(line => line !== '')  // Filter out empty lines, if there is any

        // Assert we got exactly 4 dates
        expect(dateLines).to.have.length(4)
      })

    // Req 5: Assert the date of your query is correct in the line ‘They were picked randomly out of… DATE A, DATE B’. (only focus on asserting the dates).
    cy.contains('p', sel.resultDates)
      .invoke('text')
      .then(text => {
        expect(text).to.include(fromDateStr)
        expect(text).to.include(toDateStr)
        //expect(text).to.include('2024-01-05')
      })
  })
})