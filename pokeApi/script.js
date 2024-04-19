const ulelement = document.querySelector(".listePokemon");

const contactApi = async () => {
  const data = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/20");
  const dataTransform = await data.json();
  dataTransform.forEach((names) => {
    var newDiv = document.createElement("li");
    var newContent = document.createTextNode(names.name);
    newDiv.appendChild(newContent);

    ulelement.appendChild(newDiv);
  });
};
contactApi();
