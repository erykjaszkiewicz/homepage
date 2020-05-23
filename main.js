const name = "Maciek";
const age = 32;

console.log(name);
console.log(age);
//implementowanie html

//const emptyParagraph = document.querySelector(".week-summary__description--js");
//emptyParagraph.innerHTML = `Nawet uzupełniłem treść`;

//funkcje
function hello(name, age) {
  console.log(`Jestem ${name} i mam ${age} lata`);
}
hello(name, age);
hello("Eryk", 18);

const calculate = (myNumber) => myNumber * 7;
const myResult = calculate(7);
console.log(myResult);

function content(querySelector, content) {
  const element = document.querySelector(querySelector);
  element.innerHTML = content;
}
content(".week-summary__description--js2", "siemka siemka");

//obiekty

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed *`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  commander: {
    age: 22,
    name: "Eryk",
  },
};
console.log(console);

const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
};
showMeProperty("levels");

//Immutability w obiektach
const humanOne = {
  name: "Eryk",
  age: 22,
};

const humanTwo = {
  name: "Franek",
  age: 23,
};
console.log(humanOne);
console.log(humanTwo);

humanOne.age = 23;

console.log(humanOne);
console.log(humanTwo);

const humanThree = humanOne;

console.log(humanOne);
console.log(humanThree);

humanThree.age = 46;

console.log(humanOne);
console.log(humanThree);

//zagnieżdżenie w 1 przypadku

const humanFour = {
  name: "Jan",
  age: 23,
  adress: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanFive = {
  name: "Jan",
  age: 23,
  adress: humanFour.adress,
};
console.log(humanFour);
console.log(humanFive);

humanFour.adress.city = "Krzywiń";

console.log(humanFour);
console.log(humanFive);

//zagnieżdrzenie w dwóch przypadkach
const humanSix = {
  name: "Jan",
  age: 23,
  adress: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanSeven = {
  name: "Jan",
  age: 23,
  adress: {
    street: "Warszawska",
    city: humanSix.adress.city,
  },
};

console.log(humanSix);
console.log(humanSeven);

humanSix.adress.city = "Gdynia";

console.log(humanSix);
console.log(humanSeven);

const myPerson = {
  firstName: "Eryk",
  age: 22,
};

console.log(
  `Hej, Mam na imię ${myPerson.firstName} i mam ${myPerson.age} lata.`
);

//Instrukcje warunkowe

if (humanOne.age < humanTwo.age) {
  console.log("są równe");
}

if (humanTwo.age === 23 || humanTwo.name > 3) {
  console.log("to się nie wykona");
}

if (false) {
  console.log("to się nie wykona");
} else {
  console.log("to się wykona");
}

const myNumber = 7;
switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  default:
    console.log("jestem czymś innym");
}
if(32>20) {
    console.log('to prawda')
}else{
    console.log('to nieprawda')
}
(32>20) ? console.log('to prawda') : console.log('to nieprawda');

const result = (humanOne.age > humanTwo.age) ? age : false;

//przycisk
const button = document.querySelector('.action--js');

console.log(button)

const myClick = () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = `Wiatj nazywam się eryk`;
  heading.classList.toggle('klasa-z-js');
}

button.addEventListener('click', myClick);

//przycisk_menu
const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})