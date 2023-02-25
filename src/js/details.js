/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Get the query parameter from the URL

// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the lsit to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */

import errorMessage from "./components/error.js";

const characterContainer = document.querySelector(".details-container");
const changeHeader = document.querySelector("#js-h1");

characterContainer.innerHTML += `<div class="skeleton-loader skeleton-image-details" style="background-image: url('')"></div>`
                                 


const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://thronesapi.com/api/v2/Characters/" + id ;


async function fetchCharacter() {
  try {
    const detailsResponse = await fetch(url);
    const detailsResult = await detailsResponse.json();

    console.log(detailsResult);

    newHtml(detailsResult);

    changeHeader.innerHTML = detailsResult.fullName;
    document.title = `Details for ${detailsResult.fullName}`;
  } catch(e) {
    characterContainer.innerHTML = errorMessage;
    console.log(e);
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
                                `
};
