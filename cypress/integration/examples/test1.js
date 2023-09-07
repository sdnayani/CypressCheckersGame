//Cypress- spec File.
// type definitions for Cypress object "cy"
/// <reference types="cypress" />
describe('My First Cypress Test', function() {
 it('My first test case',function(){
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
     cy.get('.search-keyword').type('ca')
     cy.wait(2000)
     cy.get('.product:visible').should('have.length',4);
     //parent chaining.Finding the child for the Parent.
     //alias the .products to a variable called productLocator.Aliasing...
     cy.get('.products').as('productLocator')
     cy.get('@productLocator').find('.product').should('have.length','4');
     cy.get('@productLocator').find('.product').eq('2').contains('ADD TO CART').click().then(function(){
        console.log("Eleement clicked")
     })
     cy.get('@productLocator').find('.product').each(($el,index,$list)=>{
     const textVeg=$el.find('h4.product-name').text()
     if(textVeg.includes('Cashews')){
        cy.wrap($el).find('button').click()

        }
     })  
     //assert if logo is displayed correctly.
      cy.get('.brand').should('have.text','GREENKART');
     //cy.get('.brand').to.have.text('GREENCART')
     //expect('.brand').to.have.text('GREENCART')
     cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text())
     })
 })  

})