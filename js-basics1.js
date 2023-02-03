//Spreading
var arr1 = [1,2,3,34];
var arr2 = [2,3,"hi",78];
console.log([...arr1,...arr2]);

const arr =[arr1,75,23];
console.log(arr);


//spreading in objects
const myvehicle = {
    brand : "ford",
    color : "red"
}
const updatevehicle = {
    brand : "Honda",
 
}
const myupdatedvehicle = {...myvehicle,...updatevehicle};
console.log(myupdatedvehicle.brand);
console.log(myupdatedvehicle.color);

//destructuring
var arr3 = [1,23,78];
[a,b,c] = arr3;
console.log(a);
console.log(c);

[d,,f] = arr3;
console.log(f);

//ref and primitive types refresher
//in variables a copy is passed whereas in objects it is passed by ref 
var x = 21;
var y = x;
x = 31;
console.log(y);

const obj1 = {
    name : "Pooja"
}
const obj2 = obj1;
obj1.name = "Swati";
console.log(obj2.name);
