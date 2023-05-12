import { routes } from '../../routes/routes';

describe('ST01: Visit All Pages / Analyze the functioning of the routes ', () => {
    it('CT01: Visit Home Page', () => {
        cy.visit(routes.home)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.home}`)
        cy.log('Home Page visited successfully')
    })

    it('CT02: Visit Shop Page', () => {
        cy.visit(routes.shop)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.shop}`)
        cy.log('Shop Page visited successfully')
    })

    it('CT03: Visit Reviews Page', () => {
        cy.visit(routes.reviews)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.reviews}`)
        cy.log('Reviews Page visited successfully')
    })

    it('CT04: Visit Into The Lab Page', () => {
        cy.visit(routes.into_the_lab)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.into_the_lab}`)
        cy.log('Into The Lab Page visited successfully')
    })
    
    it('CT05: Visit Curl Knowledge Page', () => {
        cy.visit(routes.curl_knowledge)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.curl_knowledge}`)
        cy.log('Curl Knowledge Page visited successfully')
    })

    it('CT06: Visit Hair Consultation Page', () => {
        cy.visit(routes.hair_consultation)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.hair_consultation}`)
        cy.log('Hair Consultation Page visited successfully')
    })

    it('CT07: Visit Quiz Result Page', () => {
        cy.visit(routes.quiz_result)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.quiz_result}`)
        cy.log('Quiz Result Page visited successfully')
    })

    /*it('CT08: Visit My Account Page', () => {
        cy.visit(routes.my_account)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.my_account}`)
        cy.log('My Account Page visited successfully')
    })

    it('CT09: Visit My Favorites Page', () => {
        cy.visit(routes.my_favorites)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.my_favorites}`)
        cy.log('My Favorites Page visited successfully')
    })

    it('CT10: Visit My Orders Page', () => {
        cy.visit(routes.my_orders)
        cy.url().should('equal', `${Cypress.config().baseUrl}${routes.my_orders}`)
        cy.log('My Orders Page visited successfully')
    })*/

    it('CT11: Visit a Page that does not exist', () => {
        cy.visit(`/test`)
        cy.url().should('equal', `${Cypress.config().baseUrl}/`)
        cy.log('Redirected to the home page successfully')
    })
})

