import { generateLocationPage } from "./generateLocationPage";
import { generateMenuPage } from "./generateMenuPage";
import { generateNewsPage } from "./generateNewsPage";
import { generateAboutPage } from "./generateAboutPage";
import {buttons} from "./generateBasePage";

function addingEventListeners(){
    buttons.forEach(button => {
        button.addEventListener("click", (e) => 
        {
            buttons.forEach(elem => {            
                if(elem.classList.contains("underline")){
                    elem.classList.remove("underline");
                }
            })
            e.target.classList.add("underline");
            switch (e.target.innerHTML)
            {                
                case "About":
                    generateAboutPage();
                    break;
                case "News":
                    generateNewsPage();
                    break;
                case "Menu":
                    generateMenuPage();
                    break;
                case "Location":
                    generateLocationPage();
                    break;
                default:
                    break;

            }
        })
    })
    }

    export {addingEventListeners};