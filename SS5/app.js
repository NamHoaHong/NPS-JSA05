// let menu = [];
// let menu = new Array();
// console.log(typeof(menu));
// console.log(Array.isArray(menu));
let animals = new Array("dog", "cat", "fish", "cat");
console.log(animals);
console.log(typeof(animals));
for(let i = 0; i <= animals.length; i++){
    console.log(animals[i])
}
// vong lap for - of
for(let key of animals){
    console.log(key);
}
// => for of => bien chay chinh la phan tu cua mang

//vong lap for in
for(let key in animals){
    console.log(key);
}
// => for in => bien chay chinh la so thu tu cua cac phan tu trong mang

// Phương thức indexOf trong mảng: dùng để tìm kiếm vị trí phàn tử trong mảng( dựa vào giá trị)
// Tìm vị trí chú méo "cat" trong mảng bằng cách sử dụng indexOf
let catPosition = animals.indexOf("cat");
console.log(catPosition);

// Neu co hai con meo trong array animals => lam the nao de tim vi tri con meo thu hai?
let secondCatPosition = animals.indexOf("cat", 2);
console.log(secondCatPosition);
//hoac
let anothersecondCatPosition = animals.indexOf("cat", catPosition + 1);
console.log(anothersecondCatPosition);
// Phương thức find trong mảng: dùng để tìm và trả về giá trị của mảng đầu tiên thỏa mãn điều kiện
let num = [1,2,3,10];
// Lấy ra các phần tử có giá trị lớn hơn 2 đầu tiên
let greaterThanTwo = num.find(function(key){
    return key > 2;
});
console.log(greaterThanTwo);

// Lấy ra toàn bộ phàn tử có giá trị lớn hơn 2 (trả kết quả dưới dạng mảng mới)
let numbers = [1, 2, 3, 10];
let lonHonHai = num.map(function (key){
    return key > 2
})
console.log(lonHonHai);

// Object

// Khai báo object
let obj = {};

// Thêm thuộc tính vào object
obj.name = "Nam";
obj.age = 17;
obj.address = "Hà Nội";
console.log(obj);

obj.say = () => {alert("Hello")}
// Xóa thuôc tính trong object
delete obj.address;

// Local Storage là nơi lưu trữ dữ liệu tạm thời trên trình duyệt

// LoalStorage hoạt động ntn???: Hoạt động giống hệt 1 Object: có key: value, 

let obj = {
    name: "Hiếu",
    age: 24,
    address: "Hà Nội"
  }
  // Khai báo localStorage??
  localStorage.setItem("object", JSON.stringify(obj)); //ép kiểu sang chuỗi 
  
  // Lấy ra giá trị thông qua từ khóa như nào
  let giaTriLayRaTuLocalStorage = JSON.parse(
    localStorage.getItem("object")
  );
  
  
  console.log(giaTriLayRaTuLocalStorage);
  
  // UPdate giá trị trong localStorage
  obj.game = "CS:GO";
  localStorage.setItem("object", JSON.stringify(obj)); //ép kiểu sang chuỗi 
  let giaTriLayRaTuLocalStorageLan2 = JSON.parse(
    localStorage.getItem("object")
  );
  console.log(giaTriLayRaTuLocalStorageLan2);