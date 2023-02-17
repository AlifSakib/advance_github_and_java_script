//JavaScript Handle garbaje collection with mark and sweep algorithm.

function inception() {
  inception();
}

inception();

const myArray = ["a", "b", "c", "c", "b", "d"];
const elementCounts = {};
myArray.forEach((element) => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});
console.log(elementCounts);
