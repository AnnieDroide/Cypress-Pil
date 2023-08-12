/// <reference types="cypress" />
import EdenHome from "../../Page/edenHome";
import EdenHeader from "../../Page/edenHeader";
import EdenEvent from "../../Page/edenEvent";
const edenHome = new EdenHome();
const edenHeader = new EdenHeader();
const edenEvent = new EdenEvent();

describe("Test sobre la página EDEN ENTRADAS", () => {
  it("Verificar subtitulos", () => {
    cy.visit("https://www.edenentradas.com.ar/");
    const txtBuscar = "BUSCAR EVENTO";
    const txtCalendar = "CALENDARIO DE EVENTOS";

    edenHome.getSubTitles().first().should("contain.text", txtBuscar);
    edenHome.getSubTitles().last().should("contain.text", txtCalendar);
  });

  it("verificar menu", () => {
    cy.visit("https://www.edenentradas.com.ar/");
    const menuBtn = ["HOME","TODOS","AGENDA DEL FINDE","RECITALES","TEATROS","CUARTETOS","FESTIVALES","SALAS"];

edenHeader.getMenuButtons().each((button, $index) => {
  cy.wrap(button).should("contain.text", menuBtn[$index]);
});

    /*edenHeader.getMenuButtons().eq(0).should("contain.text", menuBtn[0]);
    edenHeader.getMenuButtons().eq(1).should("contain.text", menuBtn[1]);
    edenHeader.getMenuButtons().eq(2).should("contain.text", menuBtn[2]);
    edenHeader.getMenuButtons().eq(3).should("contain.text", menuBtn[3]);
    edenHeader.getMenuButtons().eq(4).should("contain.text", menuBtn[4]);
    edenHeader.getMenuButtons().eq(5).should("contain.text", menuBtn[5]);
    edenHeader.getMenuButtons().eq(6).should("contain.text", menuBtn[6]);
    edenHeader.getMenuButtons().eq(7).should("contain.text", menuBtn[7]);*/
  });

  it("Verificar página de recitales", () => {
    cy.visit("https://www.edenentradas.com.ar/");
    edenHeader.getMenuButtons().contains("RECITALES").click();
    //const newUrl = "https://www.edenentradas.com.ar/sitio/contenido/recitales";
    //cy.url().should("eq", newUrl);
    cy.url().should("include", "/sitio/contenido/recitales")
  });

  it("Verificar Imagen de Logo", () => {
    cy.visit("https://www.edenentradas.com.ar/");
    edenHeader.getImageLogo().should("be.visible").and("have.prop", "naturalHeight").and("be.greaterThan", 0);
    const imgSource = "https://static.edenentradas.com.ar/sitio/images/logo.gif";
    edenHeader.getImageLogo().should("have.attr", "src", imgSource);
    edenHeader.getImageLogo().should("have.attr", "alt", "EdenEntradas");
  });

  it("Verificar el funcionamiento del buscador", () => {
    cy.visit("https://www.edenentradas.com.ar/");
    edenHeader.getSearchInput().type("Queen");
    edenHeader.getSearchSuggestion().click();
    const eventTxt = 'Experiencia Queen "Champions of the World Tour 23" ';
    edenEvent.getEventTitle().should("have.text", eventTxt);

  });
//Ejercicio Agus
it("Verificar Imagen de la navbar", () => {
  cy.visit("https://www.edenentradas.com.ar/");
  edenHeader.getImageNavbar().should("be.visible");
})
});
