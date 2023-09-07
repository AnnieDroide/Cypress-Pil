/// <reference types="cypress" />

describe("TESTS DE SERVICIO TIENDA CLARO", () => {
  it("Verificar Servicio de Productos Destacados", () => {
    cy.request({
      method: "GET",
      url: "https://tienda.claro.com.ar/api/contentManagement?content=Productos_destacados_spot",
    }).then((respuesta) => {
      cy.log(
        `Respuesta del servicio de Productos Destacados: ${JSON.stringify(
          respuesta
        )}`
      );
      cy.writeFile(
        `cypress/fixtures/autogenerado/servicios.json`,
        respuesta.body
      );
      expect(respuesta.status).to.eq(200);
    });
  });

  it.only("Verficar Servicio de Celulares Header", () => {
    cy.request({
      method: "GET",
      url: "https://tienda.claro.com.ar/api/contentManagement?content=CelularesHeader_Spot",
    }).then((respuesta) => {
      cy.log(
        `Respuesta del servicio de Celulares Header: ${JSON.stringify(
          respuesta
        )}`
      );
      cy.writeFile(
        `cypress/fixtures/autogenerado/servicios.json`,
        respuesta.body
      );
      expect(respuesta.status).to.eq(200);
    });
  });
});
