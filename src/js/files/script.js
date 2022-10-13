// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import './my-scripts/my-scripts.modules.js';


Array.from(document.querySelectorAll('.navigation__link[data-be="false"]')).forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
    })
})