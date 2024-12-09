module.exports = {
  numberInput: 'input[name="num"]',            // "How many random dates?" input
  fromYear: 'select[name="start_year"]',       // The from year select
  fromMonth: 'select[name="start_month"]',     // The from month select
  fromDay: 'select[name="start_day"]',         // The from day select
  toYear: 'select[name="end_year"]',           // The to year select
  toMonth: 'select[name="end_month"]',         // The to month select
  toDay: 'select[name="end_day"]',             // The to day select
  getDatesButton: 'input[value="Get Dates"]',  // The "Get Dates" button
  resultsText: 'Here are your',                // The paragraph that indicates how many dates should appear
  resultDates: 'picked randomly out of',       // The text with dates used
  monthMap: {
      January: '01',
      February: '02',
      March: '03',
      April: '04',
      May: '05',
      June: '06',
      July: '07',
      August: '08',
      September: '09',
      October: '10',
      November: '11',
      December: '12'
    }
};
