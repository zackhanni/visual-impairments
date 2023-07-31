import { impairmentData } from "./impairmentData"

const cardsElement = document.querySelector("#cards")

function generateCard() {

    impairmentData.forEach(data => {

    // create card div
    const cardDiv = document.createElement("div")
    cardDiv.id = "card"
    cardDiv.classList.add("card")

    // card title and button div
    const cardTitleDiv = document.createElement("div")
    cardTitleDiv.classList.add("card-title")

    const titleElement = document.createElement("h2")
    titleElement.innerText = data.impairment

    const buttonElement = document.createElement("button")
    buttonElement.id = "btn"
    buttonElement.classList.add("btn")
    buttonElement.innerText = "Click to Activate"

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


function addSpotlight() {
    // JavaScript
    alert("inside addspotlight")
    const spotlightSize = 100; // Set the desired spotlight size

    document.addEventListener("mousemove", function (event) {
        // Remove normalization of the event object for older browsers

        let titleRect = document.querySelector(".content-container")?.getBoundingClientRect();
        if (!titleRect) return; // Check if the element is found

        let mouseX = event.clientX;
        let spotlightX = mouseX - spotlightSize / 2 - titleRect.left;
        let mouseY = event.clientY;
        let spotlightY = mouseY - spotlightSize / 2 - titleRect.top;

        const ccDiv = document.getElementById("content");
        //ccDiv.style.backgroundPosition = spotlightX + "px " + spotlightY + "px";
    }, false);
}

document.querySelector(".btn")?.addEventListener("click", addSpotlight)