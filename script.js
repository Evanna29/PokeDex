let BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

async function fetchDataJson() {
    try {
      let response = await fetch(BASE_URL);
      let responseAsJson = await response.json();
      let myPokemonList= responseAsJson.results;
      getPokemonUrls(myPokemonList);
      displayTypes();

    } 
    catch (error) {
      console.error("not good");
    }
  }

let URLS = [];

function getPokemonUrls(arr){
  for (let i=0; i < arr.length;i++) {
    URLS.push(arr[i])
  }
  showAllPokemon(URLS)
}

async function showAllPokemon(arr) {
  document.getElementById("main-content").innerHTML ="";
  for (let i= 0; i < arr.length;i++) {
    let response = await fetch(arr[i].url);
    let pokemonItems = await response.json();
    let typesList = pokemonItems.types
    console.log(typesList[0].type.name)
    document.getElementById("main-content").innerHTML += pokeCardTemplate(pokemonItems)
  }
}

let typesWithColors = [
  {"type": "bug","color": "#92BC2C"},
  {"type": "dark", "color": "#595761"},
  {"type": "dragon", "color": "#0C69C8"},
  {"type": "electric", "color": "#F2D94E"},
  {"type": "fire", "color": "#FBA54C"},
  {"type": "fairy", "color": "#EE90E6"},
  {"type": "fighting", "color": "#D3425F"},
  {"type": "flying", "color": "#A1BBEC"},
  {"type": "ghost", "color": "#5F6DBC"},
  {"type": "grass", "color": "#5FBD58"},
  {"type": "ground", "color": "#DA7C4D"},
  {"type": "normal", "color": "#A0A29F"},
  {"type": "poison", "color": "#B763CF"},
  {"type": "psychic", "color": "#FA8581"},
  {"type": "rock", "color": "#C9BB8A"},
  {"type": "steel", "color": "#5695A3"},
  {"type": "water", "color": "#539DDF"}
]

let icons = [
  "./assets/icons/bug.svg", 
  "./assets/icons/dragon.svg", 
  "./assets/icons/fairy.svg", 
  "./assets/icons/fire.svg", 
  "./assets/icons/ghost.svg", 
  "./assets/icons/ground.svg", 
  "./assets/icons/normal.svg", 
  "./assets/icons/psychic.svg", 
  "./assets/icons/steel.svg",
  "./assets/icons/dark.svg", 
  "./assets/icons/electric.svg", 
  "./assets/icons/fighting.svg", 
  "./assets/icons/flying.svg", 
  "./assets/icons/grass.svg", 
  "./assets/icons/ice.svg", 
  "./assets/icons/poison.svg", 
  "./assets/icons/rock.svg", 
  "./assets/icons/water.svg"
];

function displayTypes(){
  typesHTML = "";
  for (let i= 0; i < typesWithColors.length; i++) {
    console.log(typesWithColors[i].type)
  }
}

  function pokeCardTemplate(pokemonItems){
    return `<div class="poke-card">
            <div class="poke-card-header">
              <p id="poke-nr">${pokemonItems.id}#</p>
              <p id="poke-name">${pokemonItems.name}</p>
            </div>
            <div class="image-content">
              <img class="poke-img" id="poke-img" src="${pokemonItems.sprites.other["official-artwork"]["front_default"]}" alt="Pokemon-Image" />
            </div>
            <div class="poke-card-footer">
              TYPES
            </div>
          </div>`
  }