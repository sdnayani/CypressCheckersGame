///<reference types='Cypress'/> 
class HomePage {

    /*
    This Method Navigates to the Checkers Page.
    */
    navigate(){
        cy.visit("https://www.gamesforthebrain.com/game/checkers/");
    }
   /*
   This method will reset the checkers Game.
   */
    restartTheGame() {
        return cy.contains('Restart').click({ force: true });
    }
   /*
     This method will restart the checkers Game.
    */
    validateTheGameisRestartedSuccessfully() {
        cy.get('#message').then(($e1) => {
            expect($e1.text()).to.be.eq("Select an orange piece to move.")
            return true;
        })
        return false;

    }
/*
 Validate the Move Conformation for make a Move.
*/
    getMakeTheMoveConformation() {
        cy.get('#message').then(($e1) => {

            expect($e1.text()).to.be.eq("Make a move.")
            if ($e1.text().includes('Make a move.')) {
                return true;
            }
        })
        return false;
    }
/*
Validate the Page is loaded Successfully.

*/

    validatePageisLoaded() {
        cy.contains('Checkers').should('exist');
        return true;
    }

    /*
    Make the next 5 Moves...
    */
    makeNextFiveMoves() {

        for (let i = 0; i < 5; i++) {

            cy.get('#message').then(($e1) => {
                const Message = $e1.text();
                if (Message.includes('Select an orange piece to move')) {
                    cy.log(" Making Move for first Time");
                    cy.get('[name="space22"]').wait(2000).click({ force: true })
                    cy.get('[name="space13"]').click({ force: true })
                    cy.contains('Make a move').should('exist');

                }
              
                if(Message.includes('Make a move.')) {
                    
                if(i==1){
                        cy.log(" Making Move for Second Time "+ i);
                    cy.get('[name="space42"]').wait(2000).click({ force: true })
                    //cy.wait(2000)
                    cy.get('[name="space53"]').click({ force: true })
                    // cy.wait(2000)
                    cy.contains('Make a move').should('exist');
                    }
                      
                
                
                if(i==2){
                    cy.log(" Making Move for ThirdTime "+ i);
                    cy.get('[name="space31"]').wait(2000).click({ force: true })
                    //cy.wait(2000)
                    cy.get('[name="space42"]').click({ force: true })
                    // cy.wait(2000)
                    cy.contains('Make a move').should('exist');
                }
                if(i==3){
                    cy.log(" Making Move for ForthTime "+ i);
                    cy.get('[name="space11"]').wait(2000).click({ force: true })
                    //cy.wait(2000)
                    cy.get('[name="space33"]').click({ force: true })
                    // cy.wait(2000)
                    cy.contains('Make a move').should('exist');
                }

            }
                    
            })
        }

    }


}
export default HomePage;