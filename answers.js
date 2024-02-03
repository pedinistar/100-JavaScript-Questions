let fruits = ["apple","banana","orange"]
console.log(fruits);

// fruits.push("grape")
// console.log(fruits);

// fruits.shift();
// console.log(fruits);


if (fruits.includes("banana")){
  console.log("banana is there");
}
else{
  console.log("banana is not there");
}

let newFruitArray = [fruits[0], fruits[1]]
console.log(newFruitArray);

// ⭐⭐⭐⭐ A better abproach
let newFruitsArray = fruits.slice(0, 2);
console.log(newFruitsArray);

let indexOfOrange = fruits.indexOf("orange")
console.log(indexOfOrange);


fruits.forEach(function (fruit) {
  console.log(fruit);
})

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

let uniqueFruits = [...new Set(fruits)];
console.log("Array with duplicates removed:", uniqueFruits);