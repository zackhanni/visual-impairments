import { impairmentData } from "./impairmentData"

const cardsElement = document.querySelector("#cards")
const about = document.querySelector("#about")
const activateButton = document.querySelector("#btn")




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