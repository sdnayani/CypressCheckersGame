//Cypress- spec File.
// type definitions for Cypress object "cy"
/// <reference types="cypress" />
describe('My First Cypress Test', function() {
 it('My first test case',function(){
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     cy.get("#checkBoxOption1").check().should('be.checked').and('has.value','option1')
     cy.get("#checkBoxOption1").uncheck().should('not.be.checked');
     cy.get("input[type='checkbox']").check('option2','option3')
     //select Drop down.
     cy.get('select').select('option2').should('have.value','option2');
     //Dynamic DropDowns.
     cy.get('#autocomplete').type('ind')

     cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
      if($e1.text()=='India'){
         cy.wrap($e1).click();

      }
     })
//autoComplete.

cy.get('#autocomplete').should('have.value','India')
//visible invisible.
cy.get("#displayed-text").should('be.visible')
cy.get('#hide-textbox').click()
     
 })  

})