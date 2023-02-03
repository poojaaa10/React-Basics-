//Classes
class Car{
    constructor(name){
        this.brand = name;
    }
}
const mycar = new Car("ford");
console.log(mycar.brand);

//alt syntax 
class Car1{
   name = 'bmw'; // no need to write constructor keyword
}
const mycar1 = new Car1();
console.log(mycar1.name);

class Car2 extends Car{
brand = "mg hector";
}
const mycar2 = new Car2();