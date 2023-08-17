/// <reference types="cypress" />
const edenHome2 = require("../../Page/edenHome2");
const edenHeader2 = require("../../Page/edenHeader2");

describe("Test sobre la página EDEN ENTRADAS", () => {
  beforeEach(() => {
    cy.visit("/");
    //Función para loguearse
  });
  afterEach(() => {
    //Función para desloguearse
  });

  it("Verificar subtitulos", () => {
    edenHome2.getSubTitles().first().should("contain.text", "BUSCAR EVENTO");
    edenHome2
      .getSubTitles()
      .last()
      .should("contain.text", "CALENDARIO DE EVENTOS");
  });

  it("Verificar menu", () => {
    const menuBtn = [
      "HOME",
      "TODOS",
      "AGENDA DEL FINDE",
      "RECITALES",
      "TEATROS",
      "CUARTETOS",
      "FESTIVALES",
      "SALAS",
    ];

    menuBtn.forEach((txtBtn, $index) => {
      edenHeader2.getMenuButtons().eq($index).should("contain.text", txtBtn);
    });
    /*edenHeader2.getMenuButtons().eq(0).should("contain.text", menuBtn[0]);
    edenHeader2.getMenuButtons().eq(1).should("contain.text", menuBtn[1]);
    edenHeader2.getMenuButtons().eq(2).should("contain.text", menuBtn[2]);
    edenHeader2.getMenuButtons().eq(3).should("contain.text", menuBtn[3]);
    edenHeader2.getMenuButtons().eq(4).should("contain.text", menuBtn[4]);
    edenHeader2.getMenuButtons().eq(5).should("contain.text", menuBtn[5]);
    edenHeader2.getMenuButtons().eq(6).should("contain.text", menuBtn[6]);
    edenHeader2.getMenuButtons().eq(7).should("contain.text", menuBtn[7]);*/
  });

  it("Verificar página de recitales", () => {
    edenHeader2.getMenuButtons().eq(3).click();
  });
});
