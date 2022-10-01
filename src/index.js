import { addingEventListeners } from "./pageFunctions";
import { basePageBuilder } from "./generateBasePage";
import { generateAboutPage} from "./generateAboutPage";
import { generateLocationPage } from "./generateLocationPage";
import { generateMenuPage } from "./generateMenuPage";
import { generateNewsPage} from "./generateNewsPage";



const div = document.querySelector("#content");

let generateWelcomePage = (() => {   
    basePageBuilder();
    generateAboutPage();
    addingEventListeners();
})();





