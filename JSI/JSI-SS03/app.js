//Bài 1
//cách 1
const arr1 = [1, 2, 3, 5]
const copy = [...arr]
console.log(copy);
//cách 2
const arr1 = [1, 2, 3, 5]
const copy = arr.slice();
console.log(copy);
//Bài 2
//cách 1
const arrA = ["Hello", "Xin chào"]
const arrB = ["Bonjour ", "Olá "]
const waysToSayHello = [...arrA, ...arrB]
console.log(waysToSayHello);
//cách 2
const arrA = ["Hello", "Xin chào"]
const arrB = ["Bonjour ", "Olá "]
const waysToSayHello = arrA.concat(arrB);
//Bài 3
//arrSquare
const arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const arrSquare = arrX.map(x => x * x);
console.log(arrSquare);
//arrOdds
const arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const arrOdds = arrX.filter(x => x % 2 != 0);
console.log(arrOdds);
//Bài 4
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
const arr = [1, 5, 4, 6];
const filtered = filterRange(arr, 0, 2);
console.log(filtered);