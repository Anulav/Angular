//1. variables. To run TS code on node first install ts-node. npm install -g ts-node or typescript. However the compilation and output is different for both.
var brand: string = 'Chevrolet';
var car:string = `${brand} is a nice car!`; //Interpolation requires `` and not quotes
console.log(car); //Chevrolet is a nice car!

/*Use let for variables rather than var because var overflows i.e scope is not confined and acts like global.
And const for constant variables.
*/
let i=0;
let array: string[] = ["Ford","Tesla","Ferrari"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log("The car is "+ element);
}
console.log(i); //This would be different if it was var.

//Const
const PI =3.14;
//PI =3; Gives error. 
console.log(PI);
const obj = {
    a : 5
};
obj.a = 6; //This works because internals of object is changed not object referred by obj.
//obj ={}; Gives error here as the object referred is changed.

//Number, also defines for floating, binary, hexadecimal and octal.
const age: number = 5;
const height: number = 123.4;

//Dynamic types with any
let distance: any;
distance = '1000kms';
distance = 1000;
let distances: any[] = [1000,'1000kms'];
distances.forEach(e=>{
    console.log(e);
});

//Custom datatypes
//You can create your datatypes as below:
type Animal = 'Cheetah' | 'Lion';
let simba: Animal = 'Lion';
//let mickey: Animal = 'mouse'; Error.Only Cheetah and Lion allowed.

//Enums
//Defines numbering starting with 0.
enum Brands {Chevrolet, Ford,Ferrari, Lamborghini, BMW, Tesla};
const myCar: Brands = Brands.Tesla;
console.log("myCar is "+myCar);
//We can also assign values to the elements.
enum LatestBrands {Chevrolet, Ford,Ferrari, Lamborghini, BMW, Tesla=1};
const myNewCar: LatestBrands = LatestBrands.Tesla;
const myDreamCar: LatestBrands = LatestBrands.Lamborghini;
console.log("my new car is "+ myNewCar);
console.log("my Dream car is "+ myDreamCar);
//value assignation is valid till it is integer only.
enum Values {a=2, b=3};
//We can also lookup enums using index.
console.log("Brand @ 1 "+ Brands[1]); 

//Void
function test(): void {
    const a = 0;
}

/* Types Inference in TS. 
If a variable is not assigned to a datatype. TS will infer itself up to an accuracy.
However if that is not possible it will assign it to any. */
const truck = 'Toyota';
console.log(truck.constructor.name);



