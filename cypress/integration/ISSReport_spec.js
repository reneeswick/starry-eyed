describe('ISS Reports', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.spaceflightnewsapi.net/v3/reports', {
      statusCode: 201,
      body: [
        {
          id: 1,
          title: 'ISS Daily Summary Report',
          url: 'https://blogs.nasa.gov/stationreport/2021/11/10/iss-daily-summary-report-11-10-2021/',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg',
          newsSite: 'NASA',
          summary: 'This is a captivating summary about the ISS!',
          publishedAt: '2021-11-10T14:27:00.000Z',
        },
        {
          id: 2,
          title: 'ISS Daily Summary Report',
          url: 'https://blogs.nasa.gov/stationreport/2021/11/10/iss-daily-summary-report-11-10-2021/',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg',
          newsSite: 'NASA',
          summary: 'This is another captivating summary about the ISS!',
          publishedAt: '2021-11-10T15:28:00.000Z',
        },
        {
          id: 3,
          title: 'ISS Daily Summary Report',
          url: 'https://blogs.nasa.gov/stationreport/2021/11/10/iss-daily-summary-report-11-10-2021/',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg',
          newsSite: 'NASA',
          summary: 'This is the last captivating summary about the ISS!',
          publishedAt: '2021-11-10T14:27:00.000Z',
        }
      ]
    })
    cy.visit('http://localhost:3000/report')
  });

  it('Should display cards of the ISS daily report', () => {
    cy.get('.report-card')
      .should('be.visible')
      .should('have.length', 3)
  });

  it('Each card should display an image, summary, publish time, and a link to read more', () => {
    cy.get('.report-card[id=3]')
      .should('contain', 'summary')
      .should('contain', '2021')
      .should('contain', 'Read More')
  });
});
