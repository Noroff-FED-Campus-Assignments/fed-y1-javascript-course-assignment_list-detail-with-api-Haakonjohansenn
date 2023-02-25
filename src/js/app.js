import errorMessage from "./components/error.js";

const resultsContainer = document.querySelector("#js-list-container");
const search = document.querySelector("#search-bar");

const url = "https://thronesapi.com/api/v2/characters";

fetchCharacters();

search.addEventListener("keyup", function (e) {
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
                                     </div>`;
    }

    const response = await fetch(url);

    const jsonResult = await response.json();

    const characters = jsonResult;

    const filteredCharacters = characters.filter(function (character) {
      return character.fullName.toLowerCase().includes(searchValue);
    });

    resultsContainer.innerHTML = ``;

    filteredCharacters.forEach(function (character) {
      resultsContainer.innerHTML += `<a href="../details.html?id=${character.id}" class="card">
                                     <div class="image" style="background-image: url(${character.imageUrl});" alt="picture of Game of Thrones character"></div>
                                     <div class="details">
                                       <h4 class="fullname">${character.fullName}</h4>
                                       <h4 class="family">${character.family}</h4>
                                     </div>
                                     </a>`;
    });
    console.log(resultsContainer);
  } catch (e) {
    resultsContainer.innerHTML = errorMessage;
  }
}
