/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/**\r\n * Import my own css for webpack\r\n */\r\n\r\n\r\n(function init() {\r\n  console.log(\"JS Connect!! :)\");\r\n  const $body = document.body;\r\n  const $burgerButton = document.querySelector(\"#js_burger-button\");\r\n  const $header = document.querySelector(\"#js_header\");\r\n  const $menu = document.querySelector(\"#js_menu\");\r\n  const $menuLinks = Array.from(document.querySelectorAll(\".menu-link\"));\r\n  const $btnReturnTop = document.querySelector(\"#js_return-top\");\r\n  const $portFolioContainer = document.querySelector(\"#js_portfolio-container\");\r\n  const $btnSendEmail = document.querySelector(\"#js_send-mail\");\r\n  //Modal DOM\r\n  const $modalOpacity = document.querySelector(\".modal-opacity\");\r\n  //Form DOM\r\n  const $form = document.querySelector(\"#js_form-data\");\r\n  //Section skills element\r\n  const $wrapperSkills = document.querySelector(\"#js_progress-section\");\r\n\r\n  /*\r\n   * When a user click en send email appear modal of construction\r\n   */\r\n  $btnSendEmail.addEventListener(\"click\", () => {\r\n    $modalOpacity.classList.add(\"active\");\r\n    $body.classList.add(\"hide-scroll\");\r\n    $body.appendChild(\r\n      createModalCustom(\r\n        \"Estamos en construcción\",\r\n        \"El servicio para enviar un mail aún esta en construcción, agradezco tu visita\",\r\n        \"fade-in\"\r\n      )\r\n    );\r\n  });\r\n\r\n  /*\r\n   * When a user click a button \"OK\", close modal and dessapear\r\n   */\r\n  $body.addEventListener(\"click\", (event) => {\r\n    if (event.target.id === \"js_btn-ok\") {\r\n      const $modalConstruction = document.querySelector(\".modal.construction\");\r\n      $modalConstruction.classList.remove(\"fade-in\");\r\n      $modalConstruction.classList.add(\"fade-out\");\r\n      $modalOpacity.classList.remove(\"active\");\r\n      $body.classList.remove(\"hide-scroll\");\r\n      //Time for desappear modal of DOM\r\n      setTimeout(() => {\r\n        $body.removeChild($modalConstruction);\r\n      }, 100);\r\n    }\r\n  });\r\n\r\n  /*\r\n   * Function get information for my own bd.json\r\n   */\r\n  async function getInformationPortfolio() {\r\n    try {\r\n      const data = await fetch(\"./js/bd.json\");\r\n      const information = await data.json();\r\n      const response = await information.response;\r\n      return response;\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n\r\n  /*\r\n   * Function to render information to my own api\r\n   */\r\n  async function renderInformationPortfolio() {\r\n    const data = await getInformationPortfolio();\r\n    for (const d of data) {\r\n      $portFolioContainer.innerHTML += `\r\n        <div class=\"item\">\r\n          <div class=\"item-image\">\r\n            <img loading=\"lazy\" src=\"${d.src}\" alt=\"Image of project if no loader this\" />\r\n          </div>\r\n          <div class=\"item-information\">\r\n            <h3>${d.itemTitle}</h3>\r\n            <div class=\"item-information-made\">\r\n              <h4>Hecho en:</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      `;\r\n    }\r\n    const $madeWrapper = Array.from(\r\n      document.querySelectorAll(\".item-information-made\")\r\n    );\r\n    $madeWrapper.forEach((element, i) => {\r\n      const div = document.createElement(\"div\");\r\n      div.setAttribute(\"class\", \"labels\");\r\n      element.appendChild(div);\r\n      let labels = data[i].labels;\r\n\r\n      for (const label in labels) {\r\n        let labelText = `${labels[label]}`;\r\n        let template = `\r\n              <span class=\"item-information-label ${labelText}\">${labelText}</span>\r\n            `;\r\n        div.innerHTML += template;\r\n      }\r\n    });\r\n  }\r\n\r\n  /*\r\n   * Function for remove active state links menu\r\n   */\r\n  const removeClassIsActive = () => {\r\n    $menuLinks.forEach((element) => {\r\n      element.classList.remove(\"is-active\");\r\n    });\r\n  };\r\n\r\n  /*\r\n   * Function to put class 'fixed'\r\n   */\r\n  const headerFixed = () => {\r\n    let y = window.scrollY;\r\n    y > 56 ? $header.classList.add(\"fixed\") : $header.classList.remove(\"fixed\");\r\n  };\r\n\r\n  /*\r\n   *Function showHideMenu\r\n   */\r\n  const showHideMenu = (e) => {\r\n    e.preventDefault();\r\n    $menu.classList.toggle(\"is-active\");\r\n  };\r\n\r\n  /*\r\n   * Function returnTop\r\n   * Execute function in event\r\n   */\r\n  const returnTop = () => {\r\n    window.scroll({\r\n      top: `${100}%`,\r\n      behavior: \"smooth\",\r\n    });\r\n    removeClassIsActive();\r\n  };\r\n\r\n  window.addEventListener(\"scroll\", () => {\r\n    let y = window.scrollY;\r\n    y > 550\r\n      ? $btnReturnTop.classList.add(\"active\")\r\n      : $btnReturnTop.classList.remove(\"active\");\r\n    //Event click for appear btn return top\r\n    $btnReturnTop.addEventListener(\"click\", returnTop);\r\n  });\r\n\r\n  /*\r\n   * Event click for each links of menu\r\n   */\r\n  $menuLinks.forEach((links) => {\r\n    links.addEventListener(\"click\", (e) => {\r\n      if ($menuLinks.className == \"menu-link is-active\") {\r\n        removeClassIsActive();\r\n      } else {\r\n        removeClassIsActive();\r\n        links.classList.add(\"is-active\");\r\n        $menu.classList.remove(\"is-active\");\r\n      }\r\n    });\r\n  });\r\n\r\n  /*\r\n   *Function header fixed\r\n   */\r\n  window.addEventListener(\"scroll\", headerFixed);\r\n\r\n  /*\r\n   *Event click for show and hide menu\r\n   */\r\n  $burgerButton.addEventListener(\"click\", showHideMenu);\r\n\r\n  /*\r\n   * Executed function renderInformationPortfolio\r\n   */\r\n  renderInformationPortfolio();\r\n\r\n  /**\r\n   * Use Form Data to get information to send a service email in php\r\n   */\r\n  $form.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n    const data = new FormData($form);\r\n    const name = data.get(\"name\");\r\n    const email = data.get(\"email\");\r\n    const phone = data.get(\"phone\");\r\n    const message = data.get(\"message\");\r\n\r\n    //Create object with form data\r\n    createObject(name, email, phone, message);\r\n    //Clean inputs\r\n    cleanInputs();\r\n  });\r\n\r\n  /**\r\n   * Create this function to create a object to send service\r\n   * @param {*} name\r\n   * @param {*} email\r\n   * @param {*} phone\r\n   * @param {*} message\r\n   */\r\n  const createObject = (name, email, phone, message) => {\r\n    let ObjectToSendService = {\r\n      name: name,\r\n      email: email,\r\n      phone: phone,\r\n      message: message,\r\n    };\r\n    return ObjectToSendService;\r\n  };\r\n\r\n  /**\r\n   * Function to clean input of my form\r\n   */\r\n  const cleanInputs = () => {\r\n    const $inputs = document.querySelectorAll(\"input\");\r\n    const $textArea = document.querySelector(\"textarea\");\r\n    $inputs.forEach((input) => (input.value = \"\"));\r\n    $textArea.value = \"\";\r\n  };\r\n\r\n  /**\r\n   * Function to create a modal custom\r\n   */\r\n  const createModalCustom = (title, description, classAnimation) => {\r\n    const modal = `\r\n      <div class=\"modal construction ${classAnimation}\">\r\n        <h2 class=\"modal-title\">${title}</h2>\r\n        <p class=\"modal-text\">${description}</p>\r\n        <section class=\"modal-actions\">\r\n          <button class=\"modal-actions-ok\" id=\"js_btn-ok\">OK</button>\r\n        </section>\r\n      </div>\r\n    `;\r\n    const htmlConverted = convertHtmlString(modal);\r\n    return htmlConverted;\r\n  };\r\n\r\n  /**\r\n   * Convert template string to html format\r\n   * @param {*} HtmlString\r\n   */\r\n  const convertHtmlString = (HtmlString) => {\r\n    const html = document.implementation.createHTMLDocument();\r\n    html.body.innerHTML += HtmlString;\r\n    return html.body.children[0];\r\n  };\r\n\r\n  /**\r\n   * Inject template for skills\r\n   * @param $content\r\n   */\r\n  const printSkills = ($content) => {\r\n    /**\r\n     * Array of skills names and percent\r\n     */\r\n    let arrSkills = [\r\n      [\"HTML\", \"90%\"],\r\n      [\"CSS\", \"85%\"],\r\n      [\"JAVASCRIPT\", \"80%\"],\r\n      [\"VUE\", \"70%\"],\r\n      [\"SASS\", \"80%\"],\r\n      [\"GIT\", \"85%\"],\r\n    ];\r\n\r\n    arrSkills.forEach((skill) => {\r\n      $content.innerHTML += `\r\n        <div class=\"progressBar-content\">\r\n          <span class=\"progressBar-text\"> ${skill[0]} </span>\r\n          <div class=\"progressBar-progress\">\r\n            <div class=\"${skill[0]}\" style=\"width: 0;\"></div>\r\n            <span class=\"progressBar-percent\">${skill[1]}</span>\r\n          </div>\r\n        </div>\r\n      `;\r\n      window.addEventListener(\"scroll\", () => {\r\n        let scrollTop = document.documentElement.scrollTop;\r\n        let $progressBarItems = Array.from(\r\n          document.querySelectorAll(\".progressBar-progress > div\")\r\n        );\r\n        let $percents = document.querySelectorAll(\".progressBar-percent\");\r\n        $progressBarItems.forEach((item, index) => {\r\n          let heightItem = $content.offsetTop;\r\n          let percent = $percents[index];\r\n          if (heightItem - 450 < scrollTop) {\r\n            item.style.width = `${percent.textContent.trim()}`;\r\n            percent.classList.add(\"animate-percemt\");\r\n          } else {\r\n            item.style.width = \"0%\";\r\n            percent.classList.remove(\"animate-percemt\");\r\n          }\r\n        });\r\n      });\r\n    });\r\n  };\r\n  //Exec my print skills\r\n  printSkills($wrapperSkills);\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });