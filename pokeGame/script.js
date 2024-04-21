const container = document.querySelector(".container");
const divPlayer = document.querySelector(".player");
const divEnemy = document.querySelector(".enemy");
const playBtn = document.querySelector(".btnPlay");
const attBtn = document.querySelector(".btnAtt");
const defBtn = document.querySelector(".btnDef");
let enemyTextName = null;
const enemyimg = document.createElement("img");
const enemyName = document.createElement("p");
let playerTextName = null;
const playerimg = document.createElement("img");
const playerName = document.createElement("p");
let LsPokemon = [];
let data;

const fetchPokemon = async function () {
  const reponse = await fetch("https://pokebuildapi.fr/api/v1/random/team");
  const pokemon = await reponse.json();
  data = pokemon;
  launchGame();
};

playBtn.addEventListener("click", () => {
  fetchPokemon();
});

function loadPokemon() {
  for (let index = 0; index < 2; index++) {
    LsPokemon.push(data[index]);
  }

  console.log(LsPokemon);
  playerTextName = document.createTextNode(LsPokemon[0].name);
  enemyTextName = document.createTextNode(LsPokemon[1].name);
  playerimg.src = LsPokemon[0].image;
  playerName.appendChild(playerTextName);
  divPlayer.appendChild(playerimg);
  divPlayer.appendChild(playerName);

  // enemy

  console.log(LsPokemon);
  enemyimg.src = LsPokemon[1].image;
  enemyName.appendChild(enemyTextName);
  divEnemy.appendChild(enemyimg);
  divEnemy.appendChild(enemyName);
}

function launchGame() {
  playBtn.className = "hideBtn";
  activPlayerBtn();
  loadPokemon();
  GameLoqic();
}

function hidePlayerBtn() {
  attBtn.className = "hideBtn";
  defBtn.className = "hideBtn";
}
function activPlayerBtn() {
  attBtn.className = "activeBtn";
  defBtn.className = "activeBtn";
}

function GameLoqic() {
  attBtn.addEventListener("click", () => {
    enemyimg.className = "red";
    hidePlayerBtn();
  });
  defBtn.addEventListener("click", () => {
    hidePlayerBtn();
  });
}
