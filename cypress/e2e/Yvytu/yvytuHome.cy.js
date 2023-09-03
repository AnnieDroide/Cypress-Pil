///<reference types="cypress"/>
const yvytuHome = require("../../Page/Yvytu/yvytuHome");

describe("Tests sobre la página de YVYTU", () => {
  beforeEach(() => {
    cy.visit("https://vientosdelaselva.com.ar/");
  });
  it("Verifica Barra de Navagación - Iterar en Botones pildora", () => {
    const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

    yvytuHome.getMenuPillButton().each((boton, indice) => {
      cy.wrap(boton).should("have.text", menu[indice]).and("be.visible");
    });
  });

  it("Verifica Barra de Navagación 2 - Iterar en Botones", () => {
    const menu = [
      "",
      "LA RESERVA",
      "CABAÑAS",
      "COMO LLEGAR",
      "CONTACTO",
      "DONÁ",
    ];

    yvytuHome.getMenuAllButtons().each((boton, indice) => {
      if (indice != 0) {
        cy.wrap(boton).should("have.text", menu[indice]);
      }
    });
  });

  it("Verificar comportamiento  del Botón Ir Arriba", () => {
    yvytuHome.getIrArribaButton().should("not.be.visible");
    yvytuHome
      .getGenericSubtitle()
      .contains("Conocé una historia mágica.")
      .scrollIntoView();

    yvytuHome
      .getIrArribaButton()
      .should("be.visible")
      .and("contain.text", "Ir arriba")
      .click();

    /**yvytuHome.getIrArribaButton().should("be.visible");
    yvytuHome.getIrArribaButton().should("contain.text", "Ir arriba");
    yvytuHome.getIrArribaButton().click();**/

    yvytuHome.getMenuPillButton().each((boton, indice) => {
      cy.wrap(boton).should("be.visible");
    });
    yvytuHome.getIrArribaButton().should("not.be.visible");
  });

  it("Verificar botón Reservar", () => {
    yvytuHome
      .getGenericButton()
      .contains("Reservar")
      .should("have.attr", "href", "https://wa.me/5493757454400")
      .and("have.attr", "target", "_blank");

    yvytuHome
      .getGenericButton()
      .contains("Reservar")
      .should(
        "have.css",
        "Background",
        "rgb(34, 153, 84) none repeat scroll 0% 0% / auto padding-box border-box"
      );
  });

  it.only("Verificar Reel de Imágenes", () => {
    let arrayImagenes = [
      "frase01.png",
      "noche.png",
      "pasafauna.png",
      "picaflor.png",
      "carpincho.png",
      "frase01.png",
      "noche.png",
      "pasafauna.png",
      "picaflor.png",
      "carpincho.png",
      "frase01.png",
      "noche.png",
      "pasafauna.png",
      "picaflor.png",
    ];
    yvytuHome.getImgReel().each((imagenes, index) => {
      cy.wrap(imagenes).should(
        "have.attr",
        "src",
        `./public/images/gallery/${arrayImagenes[index]}`
      );
    });

    /*let newArray = [];
    yvytuHome
      .getImgReel()
      .each((imagen, index) => {
        cy.wrap(imagen)
          .invoke("attr", "src")
          .then((texto) => {
            cy.log(texto);
            newArray.push(texto);
          });
      })
      .then(() => {
        cy.log(JSON.stringify(newArray));
      });*/
  });

  it("Verificar Imágenes de las Cabañas", () => {
    cy.log("**Todas las imágenes tienen como texto alternativo Imagen 1**");
    cy.log("**Ticket JIRA xxxx Error texto alternativo");

    yvytuHome
      .getImgCabaniaYaguarete()
      .should("have.attr", "src", "./public/images/cabana-gallery/01.png")
      .and("have.attr", "alt", "Imagen 1");

    yvytuHome
      .getImgCabaniaArasari()
      .should("have.attr", "src", "./public/images/cabana-gallery/01.png")
      .and("have.attr", "alt", "Imagen 1");
  });
});
