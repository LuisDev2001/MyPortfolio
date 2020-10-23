/**
 * Import my own css for webpack
 */
import "../css/main.css";

(function init() {
  console.log("JS Connect!! :)");
  const $burgerButton = document.querySelector("#js_burger-button");
  const $header = document.querySelector("#js_header");
  const $menu = document.querySelector("#js_menu");
  const $menuLinks = Array.from(document.querySelectorAll(".menu-link"));
  const $btnReturnTop = document.querySelector("#js_return-top");
  const $portFolioContainer = document.querySelector("#js_portfolio-container");
  const $btnSendEmail = document.querySelector("#js_send-mail");
  //Modal DOM
  const $modalConstruction = document.querySelector(".modal.construction");
  const $btnModalOk = document.querySelector("#js_btn-ok");
  const $modalOpacity = document.querySelector(".modal-opacity");

  /*
   * When a user click en send email appear modal of construction
   */
  $btnSendEmail.addEventListener("click", () => {
    $modalOpacity.classList.add("active");
    $modalConstruction.classList.add("fade-in");
    $modalConstruction.classList.remove("fade-out");
    document.body.style.overflow = "hidden";
  });

  /*
   * When a user click a button "OK" close modal and dessapear
   */
  $btnModalOk.addEventListener("click", () => {
    $modalConstruction.classList.remove("fade-in");
    $modalConstruction.classList.add("fade-out");
    $modalOpacity.classList.remove("active");
    document.body.style.overflow = "visible";
  });

  /*
   * Function get information for my own bd.json
   */
  async function getInformationPortfolio() {
    try {
      const data = await fetch("./js/bd.json");
      const information = await data.json();
      const response = await information.response;
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  /*
   * Function to render information to my own api
   */
  async function renderInformationPortfolio() {
    const data = await getInformationPortfolio();
    for (const d of data) {
      $portFolioContainer.innerHTML += `
        <div class="item">
          <div class="item-image">
            <img loading="lazy" src="${d.src}" alt="Afrianska blog" />
          </div>
          <div class="item-information">
            <h3>${d.itemTitle}</h3>
            <div class="item-information-made">
              <h4>Hecho en:</h4>
            </div>
          </div>
        </div>
      `;
    }
    const $madeWrapper = document.querySelectorAll(".item-information-made");
    $madeWrapper.forEach((element, i) => {
      const div = document.createElement("div");
      div.setAttribute("class", "labels");
      element.appendChild(div);
      let labels = data[i].labels;

      for (const label in labels) {
        let labelText = `${labels[label]}`;
        let template = `
              <span class="item-information-label ${labelText}">${labelText}</span>
            `;
        div.innerHTML += template;
      }
    });
  }

  /*
   * Function for remove active state links menu
   */
  function removeClassIsActive() {
    $menuLinks.forEach((element) => {
      element.classList.remove("is-active");
    });
  }

  /*
   * Function to put class 'fixed'
   */
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

  /*
   * Executed function renderInformationPortfolio
   */
  renderInformationPortfolio();
})();
