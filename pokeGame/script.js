const container = document.querySelector(".container");
const divPlayer = document.querySelector(".player");
const divEnemy = document.querySelector(".enemy");
const playBtn = document.querySelector(".btnPlay");
let LsPokemon = [];

const fetchPokemon = async function () {
  const reponse = await fetch("https://pokebuildapi.fr/api/v1/random/team");
  const pokemon = await reponse.json();

  function launchGame() {
    for (let index = 0; index < 2; index++) {
      LsPokemon.push(pokemon[index]);
    }
    const playerName = document.createTextNode(LsPokemon[0].name);
    const playerimg = document.createElement("img");
    console.log(LsPokemon);
    playerimg.src = LsPokemon[0].image;
    divPlayer.appendChild(playerimg);
    divPlayer.appendChild(playerName);
    // enemy
    const enemyName = document.createTextNode(LsPokemon[1].name);
    const enemyimg = document.createElement("img");
    console.log(LsPokemon);
    enemyimg.src = LsPokemon[1].image;
    divEnemy.appendChild(enemyimg);
    divEnemy.appendChild(enemyName);
  }
  launchGame();
};

playBtn.addEventListener("click", () => {
  fetchPokemon();
});
