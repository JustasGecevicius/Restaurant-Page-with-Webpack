const mainDiv = document.createElement("div");
// nav bar stuff
const navBarDiv = document.createElement("div");
const restaurantName = document.createElement("h1");
const navBarButtonDiv = document.createElement("div");
const aboutButton = document.createElement("button");
const menuButton = document.createElement("button");
const newsButton = document.createElement("button");
const locationButton = document.createElement("button");
const buttons = [aboutButton, menuButton, newsButton, locationButton];
// main body stuff
const mainBodyDiv = document.createElement("div");
mainBodyDiv.classList.add("mainBodyDiv");
const h2line = document.createElement("h2");
h2line.innerHTML = "Pizza from back Home";
const h3line = document.createElement("h3");
h3line.innerHTML = "Established 2005";
const h3line2 = document.createElement("h3"); 
h3line2.innerHTML = "Feel free to visit any time!";
const image = document.createElement("img");
image.setAttribute("src", "../Images/Pizza-chef-smilling-and-happy-vector-PNG.png");

//footer stuff


//classes and functions
mainDiv.classList.add("mainDiv");
navBarDiv.classList.add("navBarDiv");
navBarButtonDiv.classList.add(".navBarButtonDiv");
restaurantName.innerHTML = "Mama's Pizza";
aboutButton.innerHTML="About";
aboutButton.classList.add("underline");
menuButton.innerHTML="Menu";
newsButton.innerHTML="News";
locationButton.innerHTML="Location";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        buttons.forEach(elem => {
            console.log(elem.classList)
            if(elem.classList.contains("underline")){
                elem.classList.remove("underline");
            }
        })
        e.target.classList.add("underline");        
        //console.log(e);
    })
})
//adding everything to the DOM
navBarDiv.appendChild(restaurantName);
navBarButtonDiv.appendChild(aboutButton);
navBarButtonDiv.appendChild(menuButton);
navBarButtonDiv.appendChild(newsButton);
navBarButtonDiv.appendChild(locationButton);
navBarDiv.appendChild(navBarButtonDiv);
mainBodyDiv.appendChild(h2line);
mainBodyDiv.appendChild(h3line);
mainBodyDiv.appendChild(image);
mainBodyDiv.appendChild(h3line2);





mainDiv.appendChild(navBarDiv);
mainDiv.appendChild(mainBodyDiv);


//Export to the main function
export {mainDiv, buttons};


