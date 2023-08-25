class EdenHeader2 {
  getMenuButtons() {
    return cy.get("#navbar a");
  }

  getImageLogo(){
    return cy.get("#header-logo");
  }

  getImageNavbar(){
    return cy.get (".estrellas");
  }
}

export default new EdenHeader2();
