import { mainBodyDiv } from "./generateBasePage";
import {pizzasObject} from "./objectForRecipes";

function generateMenuPage(){
    console.log("generateMenuPage");
    while(mainBodyDiv.firstChild){
        mainBodyDiv.firstChild.remove();
    }

    mainBodyDiv.classList.remove(mainBodyDiv.classList[1]);
    mainBodyDiv.classList.add("Menu");


    for (const x of pizzasObject){
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("itemDiv");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        h2.innerHTML = x.pizzaName;
        p.innerHTML = x.Description;
        itemDiv.appendChild(h2);
        itemDiv.appendChild(p);
        mainBodyDiv.appendChild(itemDiv);
    }
}

export{generateMenuPage};

// while(mainBodyDiv.firstChild){
//     mainBodyDiv.firstChild.remove();
// }