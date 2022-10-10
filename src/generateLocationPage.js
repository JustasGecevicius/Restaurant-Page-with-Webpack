import { mainBodyDiv } from "./generateBasePage";

function generateLocationPage(){
    console.log("generateLocationPage");
    while(mainBodyDiv.firstChild){
        mainBodyDiv.firstChild.remove();
    }

    mainBodyDiv.classList.remove(mainBodyDiv.classList[1]);
    mainBodyDiv.classList.add("Location");

    const h2line = document.createElement("h2");
h2line.innerHTML = "Visit our Restaurant!";
const h3line = document.createElement("h3");
h3line.innerHTML = "64 Pl. Drouet d'Erlon, 51100 Reims";
const h3line2 = document.createElement("h3"); 
h3line2.innerHTML = "Feel free to visit any time!";
const image = document.createElement("img");
image.setAttribute("src", "./Images/googlemaps-Zyrgon.jpg");



//adding everything to the DOM
mainBodyDiv.appendChild(h2line);
mainBodyDiv.appendChild(h3line);
mainBodyDiv.appendChild(image);
mainBodyDiv.appendChild(h3line2);
}

export{generateLocationPage};