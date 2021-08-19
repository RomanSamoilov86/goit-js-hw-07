// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

// const ingridEl1 = document.createElement("li");
// ingridEl1.textContent = "Картошка";
// console.log(ingridEl1);

// const ingridEl2 = document.createElement("li");
// ingridEl2.textContent = "Грибы";
// console.log(ingridEl2);

// const ingridEl3 = document.createElement("li");
// ingridEl3.textContent = "Чеснок";
// console.log(ingridEl3);

// const ingridEl4 = document.createElement("li");
// ingridEl4.textContent = "Помидоры";
// console.log(ingridEl4);

// const ingridEl5 = document.createElement("li");
// ingridEl5.textContent = "Зелень";
// console.log(ingridEl5);

// const ingridEl6 = document.createElement("li");
// ingridEl6.textContent = "Приправы";
// console.log(ingridEl6);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngred = (ingredient) => {
  let elementOfList = document.createElement("li");
  elementOfList.innerText = ingredient;
  return elementOfList;
};

const elementsOfIngredients = document.querySelector("ul#ingredients");
const newIngredients = ingredients.map(listIngred);

elementsOfIngredients.append(...newIngredients);
console.log(elementsOfIngredients);
