document.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('.profile');
  element.classList.add('animate');
});

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const projectInfo =  [
{
    title: "Pool cleaning service",
    img: "poolapp.png",
    description: "This project makes payment methods easier between clients and providers, make it easier for clients to schedule appointments with providers by seeing their availability and what locations they cover, look at what the provider worked on and a time stamp of where they are, providers are able to check what tasks they have done and what is in progress still. Me and my team are doing this project using HTML, CSS, JS for frontend, Django is being used for the backend, and MySQL as a database. "
},
{
    title: "Game world game",
    img: "ipadGame.png",
    description: "This project is done using Java using codenameone, this project has multiple player shaped objects that move in their intended headed directions within the defined boundaries and the main player can go to places to increase their waterintake or go to restroom to have their waterintake back to 0, and the main player can also attend or miss lecture which will have different results."
},
{
title: "Emenu (Drink Menu Management System)",
img: "Emenu.png",
description: "Created a website using HTML, CSS, Django, bootstrap, and Spline.The core features include a view of detailed list of drinks with essential information such as images, names, ingredients, and prices, modify existing drinks to update their names, ingredients, and prices, and image, easily add new drinks to the menu or delete existing ones, quickly find specific drinks using a search feature." 
},
{
    title: "Sea Monster Crowdfunding",
    img: "calculate.png",
    description: "This website is done using HTML, CSS, and JS. This website renders a data and displays which game has the most contributions, total raised from all the games Contributions, total number of games, what is the top funded game and what is second to it. This webpage also displays all the games into the website."
},
{
    title: "Pool service figma",
    img: "FigmaOne.png",
    description: "This was the Figma design for the pool cleaning service website with different design for both desktop and mobile designs."
},
{
    title: "login figma design",
    img: "FigmaTwo.png",
    description: "This Figma design was an idea for another website that I was working on with a team where I was brainstorming ideas on homepage and signup page. "
},
{
    title: "Animal Welfare",
    img: "animalWelfare.png",
    description: "This website is to inform people about animal welfare's and to sign a petition. This website was done using HTML, CSS, and js."
}, 
{
    title: "Calendar",
    img: "calendar.png",
    description: "This website is a calendar which states what things I am doing on what day and time. This websute is a frontend project and was done using the React.js framework and CSS to style."
}
];


const show = document.getElementById("projects-container");

function addGamesToPage(projects) {

    // loop over each item in the data
    for(let i = 0; i < projects.length; i++){
    const project = projects[i];

    // create a new div element, which will become the game card
    const createDiv =  document.createElement('div');

    // add the class game-card to the list
    createDiv.classList.add('project-card');
    
    createDiv.innerHTML = `<h3>Title: ${project.title}</h3> <img src="${project.img}" class="project-img"/>  <p class="desc"> <b>Description:</b> ${project.description}</p>`;
 
     // append the game to the games-container       
     show.appendChild(createDiv);

}

}

addGamesToPage(projectInfo);

function filteringJavaProjects(){

    deleteChildElements(show);

    let javaProjOnly = projectInfo.filter (( project) => {

        return project.description.includes("Java");
    });

    addGamesToPage(javaProjOnly);

}

function filteringFrontEndProjects(){

    deleteChildElements(show);

    let frontEndProjOnly = projectInfo.filter (( project) => {

        
        return project.description.includes("HTML") || 
        project.description.includes("CSS") || 
        project.description.includes("JS");


    });

    addGamesToPage(frontEndProjOnly);

}


function filteringFigmaProjects(){

    deleteChildElements(show);

    let figmaDesignOnly = projectInfo.filter((project) => {

return project.description.includes("Figma");

    })

    addGamesToPage(figmaDesignOnly);
}


function addAllGamesToPage (){

    deleteChildElements(show);

    addGamesToPage(projectInfo);

}

const javaButton = document.getElementById("java-btn");
const frontEndButton = document.getElementById("frontEnd-btn");
const figmaButton = document.getElementById("figma-btn");
const allButton = document.getElementById("all-btn");


javaButton.addEventListener("click", filteringJavaProjects);
frontEndButton.addEventListener("click", filteringFrontEndProjects);
figmaButton.addEventListener("click", filteringFigmaProjects);
allButton.addEventListener("click", addAllGamesToPage);


const textColor = document.getElementsByClassName("intro");
const bodyParagraphs = document.getElementsByClassName("list");
const textLighter = document.getElementsByClassName("wholeText");
const wordLighter = document.getElementsByClassName("wordsPlay");
const glow = document.getElementsByClassName("glowing");
const buttonDesign = document.getElementsByClassName("seeProj");
const buttonDesignTwo = document.getElementsByClassName("secondButton");
const InfoText = document.getElementsByClassName("personalInfo");


const toggleLightMode = () => {

    document.body.classList.toggle("lightMode");

 // Iterate through each element with the class "intro" and toggle the class
 for (let i = 0; i < textColor.length; i++) {
    textColor[i].classList.toggle("lightModeTwo");
}

for(let para of bodyParagraphs){
    para.classList.toggle("lightModeTwo");
}

for(let t of textLighter){
    t.classList.toggle("lightModeTwo");
}

for(let w of wordLighter){
    w.classList.toggle("wordsLighter");
}
for(let g of glow){
    g.classList.toggle("lightGlow");
}
for(let g of glow){
    g.classList.toggle("lightGlow");
}
for(let b of buttonDesign){
    b.classList.toggle("lightModeButton");
}
for(let bTwo of buttonDesignTwo){
    bTwo.classList.toggle("lightModeButton");
}
for(let info of InfoText){
    info.classList.toggle("lightModeTwo");
}


  }
  
  const themeButton = document.getElementById("colorMode");
  themeButton.addEventListener("click", toggleLightMode);


 
let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
  };

  
  
const revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
for(let i = 0; i < revealableContainers.length; i++){
  let windowHeight = window.innerHeight;
  let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
  if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
    /* add the active class to the revealableContainer's classlist */
    revealableContainers[i].classList.add("active");
  } else {
    /* remove the active class to the revealableContainer's classlist */
    revealableContainers[i].classList.remove("active");
  }
  
}
  
}


window.addEventListener("scroll", reveal);



/*
let line = document.getElementById("glowingLine");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value === 0) {
        // Reset the margin when scrolled to the top
        line.style.marginLeft = '10%'; // Set it to the original position
    } else {
        // Change the margin based on the scroll position
        line.style.marginLeft = value * 2.5 + 'px';
    }
});

*/



