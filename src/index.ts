import { impairmentData } from "./impairmentData"

function generateCard() {

    const cardsElement = document.querySelector("#cards")

    interface ImpairmentData {
        impairment: string;
        about: string;
        website: string;
        demo: string;
      }

    impairmentData.forEach((data: ImpairmentData) => {

    // create card div
    const cardDiv = document.createElement("div")
    cardDiv.id = "card"
    cardDiv.classList.add("card")

    // card title and button div
    const cardTitleDiv = document.createElement("div")
    cardTitleDiv.classList.add("card-title")

    const titleElement = document.createElement("h2")
    titleElement.innerText = data.impairment

    //create button
    const buttonElement = document.createElement("button")
    buttonElement.id = "btn"
    buttonElement.classList.add("btn")
    buttonElement.innerText = "Click to Activate"
    // buttonElement.setAttribute("onclick",`alert('${data.demo}');`)
   //  buttonElement.setAttribute("onclick", demoPage(${data.demo}) )

    buttonElement.onclick = function() {
        const demoUrl: string = data.demo
        window.location.href = demoUrl
   }

    // append title and button to card-title
    cardTitleDiv.appendChild(titleElement)
    cardTitleDiv.appendChild(buttonElement)

    // card body
    const cardBodyDiv = document.createElement("div")
    cardBodyDiv.id = "about"
    cardBodyDiv.classList.add("card-body")

    const aboutParagraph = document.createElement("p")
    aboutParagraph.innerText = data.about

    const linkElement = document.createElement("a")
    linkElement.href = data.website
    linkElement.innerText = `Learn more about ${data.impairment}`

    // append about and link to body div
    cardBodyDiv.appendChild(aboutParagraph)
    cardBodyDiv.appendChild(linkElement)

    // append title and body to card
    cardDiv.appendChild(cardTitleDiv)
    cardDiv.appendChild(cardBodyDiv)

    // append card to cards div
    cardsElement?.appendChild(cardDiv)


    })
}
generateCard()


// spotlight3
// https://codepen.io/Marichka94/pen/zewmpQ
// /public/spotlight.html
window.addEventListener("load", () => {

    const spotlight = document.querySelector('.spotlight') as HTMLElement;
    let spotlightSize = 'transparent 20%, rgba(0, 0, 0, 0.7) 30%';

    window.addEventListener('mousemove', e => updateSpotlight(e));
    window.addEventListener('mousedown', e => {
        spotlightSize = 'transparent 10%, rgba(0, 0, 0, 0.9) 25%';
        updateSpotlight(e);
    });

    window.addEventListener('mouseup', e => {
        spotlightSize = 'transparent 20%, rgba(0, 0, 0, 0.7) 30%';
        updateSpotlight(e);
    });

    function updateSpotlight(e: MouseEvent) {
		
        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
});