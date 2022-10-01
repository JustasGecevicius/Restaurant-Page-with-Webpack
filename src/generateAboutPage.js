import { mainBodyDiv } from "./generateBasePage";

const generateAboutPage = () => {

    while(mainBodyDiv.firstChild){
        mainBodyDiv.firstChild.remove();
    }
// main body stuff
mainBodyDiv.classList.remove(mainBodyDiv.classList[1]);
mainBodyDiv.classList.add("About");

const h2line = document.createElement("h2");
h2line.innerHTML = "Pizza from back Home";
const h3line = document.createElement("h3");
h3line.innerHTML = "Established 2005";
const h3line2 = document.createElement("h3"); 
h3line2.innerHTML = "Feel free to visit any time!";
const image = document.createElement("img");
image.setAttribute("src", "../Images/Pizza-chef-smilling-and-happy-vector-PNG.png");



//adding everything to the DOM
mainBodyDiv.appendChild(h2line);
mainBodyDiv.appendChild(h3line);
mainBodyDiv.appendChild(image);
mainBodyDiv.appendChild(h3line2);
};

//Export to the main function
export {generateAboutPage};


