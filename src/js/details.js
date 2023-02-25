import errorMessage from "./components/error.js";

const characterContainer = document.querySelector(".details-container");
const changeHeader = document.querySelector("#js-h1");

characterContainer.innerHTML += `<div class="skeleton-loader skeleton-image-details" style="background-image: url('')"></div>`;

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://thronesapi.com/api/v2/Characters/" + id;

async function fetchCharacter() {
  try {
    const detailsResponse = await fetch(url);
    const detailsResult = await detailsResponse.json();

    newHtml(detailsResult);

    changeHeader.innerHTML = detailsResult.fullName;
    document.title = `Details for ${detailsResult.fullName}`;
  } catch (e) {
    characterContainer.innerHTML = errorMessage;
  }
}

fetchCharacter();

function newHtml(detailsResult) {
  characterContainer.innerHTML = `
                                <div class="character-parent-container">
                                <div class="character-image-container">
                                <div class="character-image" style="background-image: url('${detailsResult.imageUrl}')" alt="Picture of Game of Thrones character"></div>
                                </div>
                                <h2 class="character-family">${detailsResult.family}</h2>
                                <h2 class="character-title">${detailsResult.title}</h2>
                                </div>
                                `;
}
