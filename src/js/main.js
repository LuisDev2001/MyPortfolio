/**
 * Import my own css for webpack
 */
import "../css/main.css";

(function init() {
  console.log("JS Connect!! :)");
  const $body = document.body;
  const $burgerButton = document.querySelector("#js_burger-button");
  const $header = document.querySelector("#js_header");
  const $menu = document.querySelector("#js_menu");
  const $menuLinks = Array.from(document.querySelectorAll(".menu-link"));
  const $btnReturnTop = document.querySelector("#js_return-top");
  const $portFolioContainer = document.querySelector("#js_portfolio-container");
  const $btnSendEmail = document.querySelector("#js_send-mail");
  //Modal DOM
  const $modalOpacity = document.querySelector(".modal-opacity");
  //Form DOM
  const $form = document.querySelector("#js_form-data");
  //Section skills element
  const $wrapperSkills = document.querySelector("#js_progress-section");

  /*
   * When a user click en send email appear modal of construction
   */
  $btnSendEmail.addEventListener("click", () => {
    $modalOpacity.classList.add("active");
    $body.classList.add("hide-scroll");
    $body.appendChild(
      createModalCustom(
        "Estamos en construcción",
        "El servicio para enviar un mail aún esta en construcción, agradezco tu visita",
        "fade-in"
      )
    );
  });

  /*
   * When a user click a button "OK", close modal and dessapear
   */
  $body.addEventListener("click", (event) => {
    if (event.target.id === "js_btn-ok") {
      const $modalConstruction = document.querySelector(".modal.construction");
      $modalConstruction.classList.remove("fade-in");
      $modalConstruction.classList.add("fade-out");
      $modalOpacity.classList.remove("active");
      $body.classList.remove("hide-scroll");
      //Time for desappear modal of DOM
      setTimeout(() => {
        $body.removeChild($modalConstruction);
      }, 100);
    }
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
            <img loading="lazy" src="${d.src}" alt="Image of project if no loader this" />
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
    const $madeWrapper = Array.from(
      document.querySelectorAll(".item-information-made")
    );
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
  const removeClassIsActive = () => {
    $menuLinks.forEach((element) => {
      element.classList.remove("is-active");
    });
  };

  /*
   * Function to put class 'fixed'
   */
  const headerFixed = () => {
    let y = window.scrollY;
    y > 56 ? $header.classList.add("fixed") : $header.classList.remove("fixed");
  };

  /*
   *Function showHideMenu
   */
  const showHideMenu = (e) => {
    e.preventDefault();
    $menu.classList.toggle("is-active");
  };

  /*
   * Function returnTop
   * Execute function in event
   */
  const returnTop = () => {
    window.scroll({
      top: `${100}%`,
      behavior: "smooth",
    });
    removeClassIsActive();
  };

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

  /**
   * Use Form Data to get information to send a service email in php
   */
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData($form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    //Create object with form data
    createObject(name, email, phone, message);
    //Clean inputs
    cleanInputs();
  });

  /**
   * Create this function to create a object to send service
   * @param {*} name
   * @param {*} email
   * @param {*} phone
   * @param {*} message
   */
  const createObject = (name, email, phone, message) => {
    let ObjectToSendService = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    return ObjectToSendService;
  };

  /**
   * Function to clean input of my form
   */
  const cleanInputs = () => {
    const $inputs = document.querySelectorAll("input");
    const $textArea = document.querySelector("textarea");
    $inputs.forEach((input) => (input.value = ""));
    $textArea.value = "";
  };

  /**
   * Function to create a modal custom
   */
  const createModalCustom = (title, description, classAnimation) => {
    const modal = `
      <div class="modal construction ${classAnimation}">
        <h2 class="modal-title">${title}</h2>
        <p class="modal-text">${description}</p>
        <section class="modal-actions">
          <button class="modal-actions-ok" id="js_btn-ok">OK</button>
        </section>
      </div>
    `;
    const htmlConverted = convertHtmlString(modal);
    return htmlConverted;
  };

  /**
   * Convert template string to html format
   * @param {*} HtmlString
   */
  const convertHtmlString = (HtmlString) => {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML += HtmlString;
    return html.body.children[0];
  };

  /**
   * Inject template for skills
   * @param $content
   */
  const printSkills = ($content) => {
    /**
     * Array of skills names and percent
     */
    let arrSkills = [
      ["HTML", "90%"],
      ["CSS", "85%"],
      ["JAVASCRIPT", "80%"],
      ["VUE", "70%"],
      ["SASS", "80%"],
      ["GIT", "85%"],
    ];

    arrSkills.forEach((skill) => {
      $content.innerHTML += `
        <div class="progressBar-content">
          <span class="progressBar-text"> ${skill[0]} </span>
          <div class="progressBar-progress">
            <div class="${skill[0]}" style="width: 0;"></div>
            <span class="progressBar-percent">${skill[1]}</span>
          </div>
        </div>
      `;
      window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        let $progressBarItems = Array.from(
          document.querySelectorAll(".progressBar-progress > div")
        );
        let $percents = document.querySelectorAll(".progressBar-percent");
        $progressBarItems.forEach((item, index) => {
          let heightItem = $content.offsetTop;
          let percent = $percents[index];
          if (heightItem - 450 < scrollTop) {
            item.style.width = `${percent.textContent.trim()}`;
            percent.classList.add("animate-percemt");
          } else {
            item.style.width = "0%";
            percent.classList.remove("animate-percemt");
          }
        });
      });
    });
  };
  //Exec my print skills
  printSkills($wrapperSkills);
})();
