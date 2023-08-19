/// <reference types="cypress" />
import EdenHome from "../../Page/edenHome";
import EdenHeader from "../../Page/edenHeader";
import EdenEvent from "../../Page/edenEvent";
import edenSalas from "../../Page/edenSalas";

const edenHome = new EdenHome();
const edenHeader = new EdenHeader();
const edenEvent = new EdenEvent();
const utils = require("../../Page/utils");

describe("Test sobre la página EDEN ENTRADAS", () => {
  beforeEach(() => {
    cy.openWeb();

    // const tamPantalla = Cypress.env("viewportdesktop").device;
    //cy.viewport(tamPantalla);
    //cy.visit("/"); -- se elimina porque ya está incluído en cy.openweb

    //Función para loguearse
  });
  afterEach(() => {
    //Función para desloguearse
  });
  it("Verificar subtitulos", { tags: "@regression" }, () => {
    const txtBuscar = "BUSCAR EVENTO";
    const txtCalendar = "CALENDARIO DE EVENTOS";

    edenHome.getSubTitles().first().should("contain.text", txtBuscar);
    edenHome.getSubTitles().last().should("contain.text", txtCalendar);
  });

  it("verificar menu", { tags: ["@regression", "@smoke"] }, () => {
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
    edenHeader.getMenuButtons().contains("RECITALES").click();
    //const newUrl = "https://www.edenentradas.com.ar/sitio/contenido/recitales";
    //cy.url().should("eq", newUrl);
    cy.url().should("include", "/sitio/contenido/recitales");
  });

  it("Verificar Imagen de Logo", () => {
    edenHeader
      .getImageLogo()
      .should("be.visible")
      .and("have.prop", "naturalHeight")
      .and("be.greaterThan", 0);
    const imgSource =
      "https://static.edenentradas.com.ar/sitio/images/logo.gif";
    edenHeader.getImageLogo().should("have.attr", "src", imgSource);
    edenHeader.getImageLogo().should("have.attr", "alt", "EdenEntradas");
  });

  it("Verificar el funcionamiento del buscador", () => {
    edenHeader.getSearchInput().type("Queen");
    edenHeader.getSearchSuggestion().click();
    const eventTxt = 'Experiencia Queen "Champions of the World Tour 23" ';
    edenEvent.getEventTitle().should("have.text", eventTxt);
  });

  it("JIRA-2012 verificar Titulo de Salas", () => {
    edenHeader.getMenuButtons().contains("SALAS").click();
  });
  //Ejercicio Agus
  it("Verificar Imagen de la navbar", () => {
    edenHeader.getImageNavbar().should("be.visible");
  });

  it("Validación del calendario", () => {
    const [dia, mes, anio] = utils.getCompleteDate();

    //cy.log(fechaActual);
    //cy.log(diaActual);
    //cy.log(meses[mesActual]);
    //cy.log(anioActual);

    edenHeader.getCalendarTitle().should("contain.text", mes);
    edenHeader.getCalendarTitle().should("contain.text", anio);

    edenHeader
      .getCalendar()
      .find("td")
      .each((cuadradoDia, $index) => {
        if ($index < dia) {
          cy.wrap(cuadradoDia).should(
            "have.class",
            "ui-datepicker-unselectable ui-state-disabled"
          );
          cy.log(`El día ${$index} es no seleccionable`);
        }
      });
  });

  //REVISAR CUANDO FUNCIONE LA PÁGINA SALAS
  it.skip("Verificar nombre de salas", () => {
    //cy.visit("https://www.edenentradas.com.ar/sitio/contenido/salas");

    edenHeader.getMenuButtons().contains("SALAS").click();

    const titulosSalas = [
      "Plaza de La Música",
      "Sala de Rey",
      "Refugio Guernica",
      "Captain Blue XL",
      "Teatro Cultural Cañada",
      "Sala Agustín Tosco - Luz y Fuerza - Bº Centro",
      "Sala de Las Américas",
      "Studio Theater",
      "Casa Babylon",
    ];
    //Validación de los títulos iterando por elemento
    edenSalas.getSalasBlock().each((block, $index) => {
      cy.wrap(block).should("be.visible");
      cy.wrap(block).should("contain.text", titulosSalas[$index]);
    });
    //Validación de títulos por array
    titulosSalas.forEach((titulo, $index) => {
      edenSalas.getSalasBlock().eq($index).should("contain.text", titulo);
    });
  });

  it.skip("Verificar nombre de salas con FIXTURE", () => {
    //cy.visit("https://www.edenentradas.com.ar/sitio/contenido/salas");

    edenHeader.getMenuButtons().contains("SALAS").click();

    cy.fixture("salas-COMPLETAR.json").then((file) => {
      //Validación de títulos por array
      titulosSalas.forEach((titulo, $index) => {
        edenSalas.getSalasBlock().eq($index).should("contain.text", sala.title);
        edenSalas
          .getSalasBlock()
          .eq($index)
          .should("contain.text", sala.adress);
        edenSalas
          .getSalasBlock()
          .eq($index)
          .should("contain.text", sala.howtogetto); // <= es correcto?
      });
    });
  });
});
