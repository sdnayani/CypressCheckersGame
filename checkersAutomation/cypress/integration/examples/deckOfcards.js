describe('My First Test Case', function () {
let deck_id=null;
    it("Validate the deck of cards site is UP",()=>{
        cy.request('GET','https://deckofcardsapi.com/').its('status').should('equal',200);

    })

    it("Create  a Brand new deck of Cards",()=>{
        cy.request({
            method:'GET',
            url:'https://deckofcardsapi.com/api/deck/new/'
        }).then( (response)=>{
             expect(response.status).to.eq(200);
             deck_id=response.body.deck_id;
             cy.log("The deck id "+deck_id)
             expect(response.body.deck_id).to.not.equal(null);
             expect(response.body.success).to.eq(true);
        })

    })
/*
    it("Shuffle  a new deck of Cards",()=>{
        cy.request({
            method:'GET',
            url:'https://deckofcardsapi.com/api/deck/${deck_id}/shuffle',
        }).then( (response)=>{
             expect(response.status).to.eq(200);
             deck_id=response.body.deck_id;
             cy.log("The deck id "+deck_id)
             expect(response.body.deck_id).to.not.equal(null);
             expect(response.body.success).to.eq(true);
        })

    })*/

})