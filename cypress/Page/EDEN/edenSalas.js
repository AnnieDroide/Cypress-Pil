class EdenSalas {
  getSalasBlock() {
    return cy.get('[id^="salasParent_"]');
  }
}

export default new EdenSalas();