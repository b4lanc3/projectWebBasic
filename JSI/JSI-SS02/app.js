console.log(("Bài 1 "));
let num = [1, 2, 4, 5, 6, 1, 6, 8, 9, 0];
let result1 = [];
result1 = num.filter(function(element) {
    return result1.includes(element) ? '' : result1.push(element)
});

console.log(result1);
console.log("Bài 2 ");
let arr = [1, 54, 6, 7];
let newArr = arr.map((val, i, arr) => {
    return val + 5;
});
console.log(newArr);
console.log("Bài 3");
let forDeletion = [1, 8, 10, 96, 7];
let mularr = [1, 2, 4, 5, 6, 7, 3, 5, 675, 8, 96];
mularr = mularr.filter(item => !forDeletion.includes(item));

console.log(mularr);
console.log("Bài 4")
const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initialValue);
}
const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
]

const playersModified = convertArrayToObject(players, 'id');
console.log(playersModified);