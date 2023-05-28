const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  const outuputElement = document.querySelector("#output");
  results = data;
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  outuputElement.innerHTML = html;      
  console.log("first: ", results);
}

const urlList = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList(url) {
    const resp = await fetch(url);

    if (resp.ok) {

        const dat = await resp.json();
        doStuffList(dat);

    }
}

function doStuffList(data) {
    console.log(data);
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);

    let a = document.querySelector("#outputList");

    pokeList.map(function(poke){ 
        pokemon = `<li>${poke.name}</li>`;
        
        a.innerHTML += pokemon;




    })

}

function compare(a, b) {
    if (a.name > b.name) {
      // sort b before a
      return 1;
    } else if (a.name < b.name) {
      // a and b different but unchanged (already in the correct order)
      return -1;
    } else return 0; // a and b are equal
  }
  
function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}

getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);