// // Ôn tập lại về Array (mảng_danh sách): IndexOf, find, (duyệt mảng theo  cách nào??), map.
// // Ôn tập lại về Object (đối tượng): Khai báo, Thuộc tính, Phương thức, \
// // Local Storage: 
// // Maybe little API?


// ////////////// Ôn tập về Array

// /khai báo: 
// let animals = [];  //C2

// let animals = new Array("dog", "cat", "fish", "cat");

// console.log(animals);

// check kiểu dữ liệu: 
// console.log(typeof (animals)); // Array

// Chứng minh animals là kiểu dữ liệu Array
// console.log(Array.isArray(animals)); // true || false


// Duyệt mảng: nêu 3 cách duyệt mảng?? for, for-in, for-of
// length: độ dài 
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// C2: sử dụng for-of
// for (let key of animals) {
//   console.log(key); // ra gì?? 
// }

// => for of => biến chạy chính là giá trị phần tử của mảng

// C3: sử dụng for - in

// for (let index in animals) {
//   console.log(index);// in ra gì?? in ra vị trí phần tử mảng
// }

// => for of => biến chạy chính là vị trí phần tử của mảng


// Phương thức IndexOf trong mảng: dùng để tìm kiếm vị trí phần tử trong mảng (dựa vào giá trị);
// Tìm vị trí chú mèo "cat" bên trong mảng. Ta sử dụng indexOf
// let vitriMeo1 = animals.indexOf("cat");// 1
// let vitriMeo2 = animals.indexOf("cat", vitriMeo1 + 1);// tìm cat bên trong mảng và trả về vị trí đầu tiên tìm thấy
// console.log(vitriMeo2);//3

//  Tìm vị trí chú mèo thứ 2 trong mảng???


// Phương thức find trong mảng: dùng để tìm và trả về giá trị mảng đầu tiên thỏa mãn điều kiện
// let num = [1, 2, 3, 10];
// // lấy ra những phần tử có giá trị lớn hơn 2;
// // let lonHonHai = num.find(key => key > 2);
// let lonHonHai = num.find(function (key) {
//   return key > 2;
// });



// Lấy ra toàn bộ phần tử có giá trị lớn hơn 2; (trả kq về dưới dạng mảng mới);

// let num = [1, 2, 3, 10];
// let lonHonHai = num.map(function (key) {
//   return key > 2
// })
// console.log(lonHonHai); // ???





/////////////////////// Object
// khai báo object
let obj = {};

// Thêm thuộc tính vào object?
obj.name = "Đức";
obj.age = 17;
obj.address = "Hà Nội";

obj.say = () => {
  const newLocal = "Xin chào. Tôi là Việt Đức";
}

// Update thuộc tính trong object
obj.name = "Bình";

// xóa thuộc tính trong object
delete obj.address;

console.log(obj);
setInterval