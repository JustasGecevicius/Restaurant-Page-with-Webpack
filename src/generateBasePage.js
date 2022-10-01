const mainBodyDiv = document.createElement("div");
const aboutButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const newsButton = document.createElement("button");
    const locationButton = document.createElement("button");
    const buttons = [aboutButton, menuButton, newsButton, locationButton];

const basePageBuilder = () => {
    console.log("basePageBuilder");
    const div = document.querySelector("#content");
    const mainDiv = document.createElement("div");
    
    console.log(buttons);
    const navBarDiv = document.createElement("div");
    const restaurantName = document.createElement("h1");
    const navBarButtonDiv = document.createElement("div");
    
    mainBodyDiv.classList.add("mainBodyDiv");
    
    mainDiv.classList.add("mainDiv");
    navBarDiv.classList.add("navBarDiv");
    navBarButtonDiv.classList.add(".navBarButtonDiv");
    restaurantName.innerHTML = "Mama's Pizza";
    aboutButton.innerHTML="About";
    aboutButton.classList.add("underline");
    menuButton.innerHTML="Menu";
    newsButton.innerHTML="News";
    locationButton.innerHTML="Location";
    
    navBarDiv.appendChild(restaurantName);
    navBarButtonDiv.appendChild(aboutButton);
    navBarButtonDiv.appendChild(menuButton);
    navBarButtonDiv.appendChild(newsButton);
    navBarButtonDiv.appendChild(locationButton);
    navBarDiv.appendChild(navBarButtonDiv);
    
    mainDiv.appendChild(navBarDiv);
    mainDiv.appendChild(mainBodyDiv);
    div.appendChild(mainDiv);
};

export{basePageBuilder, mainBodyDiv, buttons};

