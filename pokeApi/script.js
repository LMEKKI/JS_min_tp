const ulelement = document.querySelector(".listePokemon");
const ulImages = document.querySelector(".listeImgPokemon");
console.log(ulImages);

const contactApi = async () => {
  const data = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/20");
  const dataTransform = await data.json();

  dataTransform.forEach((names) => {
    let newLi = document.createElement("div");
    let newDiv = document.createElement("div");
    let newName = document.createTextNode(names.name);
    let newImg = document.createElement("img");
    newDiv.appendChild(newName);

    newImg.src = names.sprite;
    newLi.appendChild(newImg);
    newLi.appendChild(newDiv);

    ulelement.appendChild(newLi);
  });
};
contactApi();
