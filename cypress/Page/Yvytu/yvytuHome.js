class YvytuHome {
  //Botones de Header
  getMenuPillButton() {
    return cy.get('a[class*="rounded-full py-2 px-4"]');
  }

  getMenuAllButtons() {
    return cy.get("nav#menu-nav a");
  }

  //Banner de Imágenes

  getCurrentImageBanner() {
    return cy.get(
      `[class^="w-full h-600 bg-[url('/public/images/header-gallery/"][class*="slick-current"]`
    );
  }

  getImagenesBanner() {
    return cy.get(
      `[class*= "bg-[url('/public/images/header-gallery/"]:visible`
    );
  }

  getImgButton() {
    return cy.get("ul").first().find("li button");
  }

  /*getImgButton() {
    return cy.get("[id^=slick-slide-control2]");
  }*/

  getGenericSubtitle() {
    return cy.get("h2");
  }

  getGenericButton() {
    return cy.get("a");
  }

  //Sección de Textos

  getGenericParagraph() {
    return cy.get(".text-justify p");
  }

  //Botón Ir Arriba
  getIrArribaButton() {
    return cy.get("#btn-scroll-top");
  }

  //Reel de Imágenes cambio de locador cy.get('[class="slick-list draggable"]').eq(1).find("img");

  getImgReel() {
    return cy
      .get('[class="slider-reserva mt-16 slick-initialized slick-slider"]')
      .find("img");
  }

  //Imágenes cabañas
  getImgCabaniaYaguarete() {
    return cy.get("#slick-slide00");
  }

  getImgCabaniaArasari() {
    return cy.get("#slick-slide10");
  }

  //Cómo Llegar

  //Contacto

  //Colaborá

  //Sponsor

  //Redes

  //Footer
}

export default new YvytuHome();
