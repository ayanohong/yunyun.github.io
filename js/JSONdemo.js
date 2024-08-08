// var wife = {
//     name:"云云",
//     age:24,
//     husband:"绿绿",
//     eat:function(){
//         alert("云云在吃饭")
//     }
// }
// wife.eat()
// console.log(wife.husband)
var wife = '{"name":"云云","age":24,"husband":"绿绿"}';
var JSwife = JSON.parse(wife);
console.log(JSwife.name)