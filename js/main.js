(function init() {
  console.log("JS Connect!! :)");
  const $burgerButton = document.querySelector("#js_burger-button");
  const $header = document.querySelector("#js_header");
  const $menu = document.querySelector("#js_menu");
  const $menuLinks = Array.from(document.querySelectorAll(".menu-link"));
  const $btnReturnTop = document.querySelector("#js_return-top");

  /*
   * Function for remove active state links menu
   */
  function removeClassIsActive() {
    $menuLinks.forEach((element) => {
      element.classList.remove("is-active");
    });
  }

  function headerFixed() {
    let y = window.scrollY;
    y > 56 ? $header.classList.add("fixed") : $header.classList.remove("fixed");
  }

  /*
   *Function showHideMenu
   */
  function showHideMenu(e) {
    e.preventDefault();
    $menu.classList.toggle("is-active");
  }

  /*
   * Function returnTop
   * Execute function in event
   */
  function returnTop() {
    window.scroll({
      top: `${100}%`,
      behavior: "smooth",
    });
    removeClassIsActive();
  }
  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    y > 550
      ? $btnReturnTop.classList.add("active")
      : $btnReturnTop.classList.remove("active");
    //Event click for appear btn return top
    $btnReturnTop.addEventListener("click", returnTop);
  });

  /*
   * Event click for each links of menu
   */
  $menuLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
      if ($menuLinks.className == "menu-link is-active") {
        removeClassIsActive();
      } else {
        removeClassIsActive();
        links.classList.add("is-active");
        $menu.classList.remove("is-active");
      }
    });
  });

  /*
   *Function header fixed
   */
  window.addEventListener("scroll", headerFixed);

  /*
   *Event click for show and hide menu
   */
  $burgerButton.addEventListener("click", showHideMenu);
})();
