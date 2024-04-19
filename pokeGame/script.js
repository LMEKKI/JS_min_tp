const container = document.querySelector(".container");
const divPlayer = document.querySelector(".player");
const divEnemy = document.querySelector(".enemy");
const playBtn = document.querySelector(".btnPlay");

const fetchPokemon = async function () {
  const reponse = await fetch("https://pokebuildapi.fr/api/v1/random/team");
  const pokemon = await reponse.json();

  function launchGame() {
    let LsPokemon = [];
    for (let index = 0; index < 2; index++) {
      LsPokemon = pokemon[index];
    }
    console.log(LsPokemon);
  }

  playBtn.addEventListener("submit", launchGame());
};

fetchPokemon();
