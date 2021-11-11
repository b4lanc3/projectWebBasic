// bài 1
function student(name,age,address) {
    return {
     "name":name,
     "age":age,
     "address":address
    }
}
const Minh = student("Minh",16,"Hà nội")
console.log(Minh)
// bài 2 
var smartPhones = [
    { name:'iphone', price:649 },
    { name:'Galaxy S6', price:576 },
    { name:'Galaxy Note 5', price:489 }
  ];
  
  var prices = smartPhones.map(function(smartPhone) {
    return smartPhone.price;
  });
  console.log(prices)
  //bài 3
 const foo=(x,y,z) => {console.log( x, y, z )};

const foo1=() => {
	alert(Hello)
}
const foo2=(a, b) => {
    let m = a + b * 100;
    return m;
}
