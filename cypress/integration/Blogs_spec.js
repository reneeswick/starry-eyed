describe('Blogs view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.spaceflightnewsapi.net/v3/blogs', {
      statusCode: 201,
      body: [
        {
        id: 636,
        title: "Mind-blowing space volcanoes",
        url: "https://www.planetary.org/the-downlink/mind-blowing-space-volcanoes",
        imageUrl: "https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x675_crop_center-center_82_line/498865/io-eruption-galileo.jpg",
        newsSite: "Planetary Society",
        summary: "Taking a look at volcanic worlds in our solar system and exoplanets that might crack under pressure.",
        publishedAt: "2021-11-12T15:37:53.000Z",
        updatedAt: "2021-11-12T15:37:53.197Z",
        launches: [ ],
        events: [ ]
      },
      {
      id: 637,
      title: "Aliens have arrived",
      url: "https://www.planetary.org/the-downlink/mind-blowing-space-volcanoes",
      imageUrl: "https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x675_crop_center-center_82_line/498865/io-eruption-galileo.jpg",
      newsSite: "Planetary Society",
      summary: "They're everywhere.",
      publishedAt: "2021-11-12T15:37:53.000Z",
      updatedAt: "2021-11-12T15:37:53.197Z",
      launches: [ ],
      events: [ ]
    },
    {
    id: 638,
    title: "Get to know your telescope",
    url: "https://www.planetary.org/the-downlink/mind-blowing-space-volcanoes",
    imageUrl: "https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x675_crop_center-center_82_line/498865/io-eruption-galileo.jpg",
    newsSite: "Planetary Society",
    summary: "Join a stargazing group today.",
    publishedAt: "2021-11-12T15:37:53.000Z",
    updatedAt: "2021-11-12T15:37:53.197Z",
    launches: [ ],
    events: [ ]
  }
    ]
    })
    cy.visit('http://localhost:3000/blogs')
  });

  it('Should display a collection of space blogs', () => {
    cy.get('.blog-card')
      .should('be.visible')
      .should('have.length', 3)
  });

  it('Each blog card should display a title, data, image, summary, and link to read more', () => {
    cy.get('.blog-card-header').contains('volcanoes').should('be.visible')
    cy.get('.blog-title').should('contain', 'volcanoes')
    cy.get('.blog-pub-time').contains('2021-11').should('be.visible')
    cy.get('.blog-img').should('be.visible')
    cy.get('.blog-summ').contains('worlds').should('be.visible')
    cy.get('.read-more').should('be.visible')
  });

  it('Should allow user to favorite a blog by clicking the heart icon', () => {
    cy.get('button[id=636]').click()
    cy.get('.navBtn').contains('Saved for Later').click()
    cy.get('.blog-card').should('be.visible')
  });
});
