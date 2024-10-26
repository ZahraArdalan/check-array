const numbers = [1, 2, 3, 4];
function includes(array, search) {
  for (let index of array) {
    if (index == search) return true;
    return false;
  }
}
console.log(includes(numbers, 5));
