/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
import errorMessage from "./components/error.js";

const resultsContainer = document.querySelector("#js-list-container");
const search = document.querySelector("#search-bar");

const url = "https://thronesapi.com/api/v2/characters";

fetchCharacters();

search.addEventListener("keyup", function(e){
  const searchResult = e.target.value.trim().toLowerCase();
  fetchCharacters(searchResult);
});

async function fetchCharacters(searchValue = "") {
  try {

    for (let i = 0; i < 100; i++) {
      resultsContainer.innerHTML += `<div class="skeleton-card">
                                     <div class="skeleton-loader skeleton-image" src=""></div>
                                     <div class="skeleton-loader skeleton-fullname"><p></p></div>
                                     <div class="skeleton-loader skeleton-family"><p></p></div>
                                     </div>`
    }

    const response = await fetch(url);
  
    const jsonResult = await response.json();
  
    console.log(jsonResult);
  
    const characters = jsonResult;

    const filteredCharacters = characters.filter(function(character){
      return character.fullName.toLowerCase().includes(searchValue);
    });

    resultsContainer.innerHTML = ``;
    
    filteredCharacters.forEach(function(character){
      resultsContainer.innerHTML += `<a href="../details.html?id=${character.id}" class="card">
                                     <div class="image" style="background-image: url(${character.imageUrl});" alt="picture of Game of Thrones character"></div>
                                     <div class="details">
                                       <h4 class="fullname">${character.fullName}</h4>
                                       <h4 class="family">${character.family}</h4>
                                     </div>
                                     </a>`;
    });
    console.log(resultsContainer);
  } catch (e){
    resultsContainer.innerHTML = errorMessage;
    console.log(e);
  };
};
