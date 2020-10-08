(function init() {
  console.log("JS Connect!! :)");
  const $burgerButton = document.querySelector("#js_burger-button");
  const $header = document.querySelector("#js_header");
  const $menuLinks = Array.from(document.querySelectorAll(".menu-link"));
  //Event click for each links of menu
  $menuLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
      if ($menuLinks.className == "menu-link is-active") {
        removeClassIsActive();
      } else {
        removeClassIsActive();
        links.classList.add("is-active");
      }
    });
  });
  //Function for remove active state links menu
  function removeClassIsActive() {
    $menuLinks.forEach((element) => {
      element.classList.remove("is-active");
    });
  }
  //Function header fixed
  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    y > 56 ? $header.classList.add("fixed") : $header.classList.remove("fixed");
  });
  //Function showHideMenu
  function showHideMenu(e) {
    e.preventDefault();
    const $menu = document.querySelector("#js_menu");
    $menu.classList.toggle("is-active");
  }
  //Event click for show and hide menu
  $burgerButton.addEventListener("click", showHideMenu);
})();
