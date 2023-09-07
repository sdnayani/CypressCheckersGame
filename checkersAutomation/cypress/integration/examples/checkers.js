///<reference types='Cypress'/> 
import HomePage from "../pageObjects/HomePage"

describe('TestCases for Checkers', function () {
    const homePage = new HomePage();
    this.beforeEach(()=>{
        homePage.navigate();
    })

    it('Validate the Checkers Game Scenarios', function () {
      
        homePage.validatePageisLoaded();
        homePage.makeNextFiveMoves();
        homePage.restartTheGame();
         homePage.validateTheGameisRestartedSuccessfully();
  

    })

})