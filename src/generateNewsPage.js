import { mainBodyDiv } from "./generateBasePage";
import {news} from "./objectForNews";

function generateNewsPage(){
    console.log("generateNewsPage");
    while(mainBodyDiv.firstChild){
        mainBodyDiv.firstChild.remove();
    }
    mainBodyDiv.classList.remove(mainBodyDiv.classList[1]);
    mainBodyDiv.classList.add("News");
    console.log(mainBodyDiv);

    for (const x of news){
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("newsDiv");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let h4 = document.createElement("h4");
        h2.innerHTML = x.subject;
        p.innerHTML = x.text;
        h4.innerHTML = x.date;
        itemDiv.appendChild(h2);
        itemDiv.appendChild(h4);
        itemDiv.appendChild(p);

        mainBodyDiv.appendChild(itemDiv);
    }
}

export{generateNewsPage};