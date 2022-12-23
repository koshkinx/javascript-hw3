//1)Створити функцію яка отримує массив і вибирає з нього всі парні
// числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами.

let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];
let arrNew = [];
function arrNumber() {
  for (i = 0; i < arrRandomNumbers.length; i++) {
    let a = arrRandomNumbers[i];
    if (a % 2 == 0) {
      arrNew.push(a);
    }
  }
  console.log(arrNew);
}
arrNumber();

// 2) Створити цикл який 5 разів виводить prompt  запитує що купити і вводить це в массив.

let five = 5;
let arrEat = [];
function eat() {
  for (i = 0; i < five; i++)
    if (i <= five) {
      let but = prompt(" що купити,бро", "");
      arrEat.push(but);
    }
  console.log("список готовий!відправляю у пентагон!", arrEat);
  return arrEat;
}
eat();

// 3) Створити функцію яка отримує як аргумент массив
// і вираховує середнє значення всіх чисел. ( при розрахунках вважайте що массив може бути будьякої довжини переданий)

let ser = arrRandomNumbers.length;
let jus = 0;
function sum(b) {
  for (i = 0; i < ser; i++) {
    let a = arrRandomNumbers[i];
    jus += a;
  }
  b = jus / ser;
  console.log(b);
}
sum();

// 4)Створити функцію яка замінює в массиві =) на ;)

let smile = [":)", "=)", ":)", "=)", ":)", "=)"];
let comaSmile = ";)";
function newSmile() {
  for (let i = 0; i < smile.length; i++) {
    if (smile[i] === "=)") {
      smile[i] = comaSmile;
    }
  }
  console.log(smile);
}
newSmile();

// 5) створити функцію яка отримує аргумент, якщо це 'last' то функція створює массив поміщає в нього останній елемент массиву
//   і видаляє останній елемент  массиву animals, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший

   елемент з animals
let animals = ["cat", "cow", "fish", "chicken", "dog", "pig"];
let q = prompt("введи last чи first ");
function game() {
  if (q === "last") {
    let clone = animals.slice(5);
    animals.pop();
    console.log(animals);
    console.log(clone);
  } else if (q === "first") {
    let clone2 = animals.slice(0, 1);
    animals.shift();
    console.log(animals);
    console.log(clone2);
  } else {
    alert("ВИ ВВЕЛИ НЕПРАВІЛЬНІ ЗНАЧЕННЯ!!!САМОЗНИЩЕННЯ ЧЕРЕЗ 3...2...1...");
  }
}
game();

// 6) Напишіть функцію яка отримує массив і повертає сумму всіх значень массиву

function sumC() {
  let b = 0;
  let arrayK = [1, 3, 5, 6, 32, 6, 643, 3, 2, 3];
  for (i = 0; i < arrayK.length; i++) {
    b += arrayK[i];
  }
  console.log(b);
  console.log(arrayK.sort());
}
sumC();

// 7)Створити функцію яка отримує в аргумент старт значення і фініш значення ( старт менше фініша)
//  також отрмує массив задовільної довжини. Функція повина повертати массив в якому вирізанні значення з старт індекса по фініш

start = parseInt(prompt("введіть стартове значення "));
finish = parseInt(
  prompt(
    "введіть фінішне значення(повинно бути менше стартового)та не быльше 17 "
  )
);
anyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function cutValue() {
  if (start < finish) {
  } else {
    alert(
      "стартове значення повинно бути менше фінішного.фшнішне не більше 17"
    );
  }
  let newAnyArray = anyArray.slice(start, finish);
  console.log(newAnyArray.length);
  console.log(newAnyArray);
}
cutValue();
