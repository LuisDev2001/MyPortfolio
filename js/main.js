(function init() {
  console.log("JS Connect!! :)");
  const $burgerButton = document.querySelector("#js_burger-button");
  const $header = document.querySelector("#js_header");
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
