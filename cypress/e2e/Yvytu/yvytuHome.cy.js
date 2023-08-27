///<reference types="cypress"/>
const yvytuHome = require("../../Page/Yvytu/yvytuHome");

describe("Tests sobre la página de YVYTU", () => {
  it("Verifica Barra de Navagación - Iterar en Botones pildora", () => {
    cy.visit("https://vientosdelaselva.com.ar/");

    const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

    yvytuHome.getMenuPillButton().each((boton, indice) => {
      cy.wrap(boton).should("have.text", menu[indice]).and("be.visible");
    });
  });

  it.only("Verifica Barra de Navagación 2 - Iterar en Botones", () => {
    cy.visit("https://vientosdelaselva.com.ar/");

    const menu = [
      "",
      "LA RESERVA",
      "CABAÑAS",
      "COMO LLEGAR",
      "CONTACTO",
      "DONÁ",
    ];

    yvytuHome.getMenuAllButton().each((boton, indice) => {
      if (indice != 0) {
        cy.wrap(boton).should("have.text", menu[indice]);
      }
    });
  });
});
