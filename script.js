class Personnes {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
  get sePresenter() {
    return `je m'\appel ${this.nom} et j'\ai :  ${this.age}`;
  }
}

const lmekki = new Personnes("lmekki", 27);

console.log(lmekki.sePresenter);

class Chien {
  constructor(nom, race) {
    this.nom = nom;
    this.race = race;
  }
  get aboyer() {
    return `je m'\appel ${this.nom} et je suis un :  ${this.race}`;
  }
}

const rex = new Chien("rex le fou", " chiwawa");
console.log(rex.aboyer);

class rectangle {
  constructor(largeur, hauteur) {
    this.largeur = largeur;
    this.hauteur = hauteur;
  }
  get superficie() {
    return this.hauteur * this.largeur;
  }
  get perimetre() {
    return (this.hauteur + this.largeur) * 2;
  }
}

const leRec = new rectangle(5, 5);

console.log(leRec.superficie, leRec.perimetre);

class circle {
  constructor(rayon, color) {
    this.color = color;
    this.rayon = rayon;
  }
  get superficie() {
    return this.rayon * Math.PI;
  }

  get cercleAir() {
    return this.rayon * 2 * Math.PI;
  }
}

const leCercle = new circle(10, "blue");

console.log(leCercle.superficie, leCercle.cercleAir);

class Vehicule {
  constructor(VitM, color) {
    this.VitM = VitM;
    this.color = color;
  }
}

class voiture extends Vehicule {
  constructor(VitM, color, marque) {
    super(VitM, color);
    this.marque = marque;
  }
  get LaMarque() {
    return this.marque;
  }
}

const mercedes = new voiture(300, "bleu", "mercedes");
console.log(mercedes.LaMarque);

///////// fin  Tp sur les Class
