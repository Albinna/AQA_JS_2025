/// <reference types = 'cypress'/>

//create test

//skip test
it.skip('Open home page option 1', () => {
 cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })
})

//Run only this test
it.only('Open home page option 1', () => {
 cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })
})

it('Open home page option 2', () => {
 cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')//autologin - we can add to baseUrl
           
})