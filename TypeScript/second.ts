//Functions, lambdas, and execution flow

/*Functions
functions in TS similar to JS except it can be static. */
function sayHello(name: string): string{
    return `Hello, ${name}`;
}
//As observed, we annotate the parameters and the return type.
console.log(sayHello("Anulav"));

/*We might assume that here the variable pointing to a anonymous function will be typed as string.
But that's not the case in TS as the varible type is function in this case. */
const sayHelloFunction: (name: string) => string = function(name: string): string {
    return `Hello, ${name}`;
} 
console.log(sayHelloFunction("Angie"));
/*console.log(sayHelloFunction.constructor.name); //Function
This whole block, which is of the form 
(arguments: type) => returned type, becomes the type annotation our
compiler expects. */

/*Function Parameters in TS
Optional Parameters 
In TS optional parameters are defined by adding '?' symbol as postfix to the parameter we want to make optional.  */
function greetMe(name: string, greeting?: string ): string{
    if(!greeting){
        greeting =  `Hi,`;
    }
    return `${greeting} ${name}`;
};
console.log(greetMe("Anulav","Hi there"));
console.log(greetMe("Angie"));
//Optional parameters are to be placed at the end of the argument list.

//Default Parameters.
function greetMe2(name: string, greeting: string = 'Hello'){
    return greeting + " " + name; 
}
console.log(greetMe2("Michael"));
console.log(greetMe2("Michael","What's up?, "));
//Again as optional parameters the default parameters are to be placed at the end of the argument list.

/* Rest Parameters
JavaScript has the flexibilty of JS when defining functions is the ability to accept the 
an unlimited non-declared array of parameters in the form of the arguments list.
In TS we can have the same functionality using Rest parametes. Like var-args in Java. */
function greetPeople(greeting: string, ...names: string[]){
    names.forEach(e=>{
        console.log(greeting+ " "+ e);       
    });
    console.log(names.length);
}
console.log(greetPeople("Hi, ","Jasmine","Aladdin","Genie"+"Abu","Carpet"));

//Arrow Functions
const double = (x: any) => x*2;
const add = (x: any,y: any) => x+y; //Multiple parameters with arrow functions.
const add2 = (x: any,y: any) =>{
    const sum = x+y;        //Arrow functions with body.
    return sum*2;
}
/*'this' access callbacks vs arrow functions.
The value of this can be point to a different context depending on where it is executed.
When referring this inside the callbacks, we loose track of the upper context so may employ assigning
the variables to be used by assigning to 'self' or 'that'. But arrow functions can make it happen.For Example,
function delayedGreeting(name: string): void{
    setTimeout(function(){
        console.log(`Hi, ${this.name}`); //This will print Hi, undefined.        
    },0);
}
delayedGreeting("Annabelle");

function delayedGreeting(name: string): void{
    setTimeout(function(this: string, name: string){
        console.log("Hi,"+ this.name}`); //This will print Hi, undefined.        
    }),0);
}
delayedGreeting("Annabelle");
NOT CLEAR YET! */

//Common TS features
//Spread Parameter. Can also be used for JS objects
const newItem = 3;
const oldArray = [1,2];
const newArray = [...oldArray, newItem];
const car2 = {
    brand : 'Mercedes'
}
const vehicles = {...car2, Category: "Coupe"};
console.log(newArray);
console.log(vehicles);

//Template Strings same as f-strings
const url = `There were ${newItem} newItems`;
console.log(url);

//Generics 
//Method Generic args name 
function method<T>(arg : T) : T {
    return arg;
}
console.log(method<number>(1));
//To make specific to array
function method2<T>(args : T[]): T[]{
    console.log(args.length);
    return args;
    
}
method2([1,2,3]);
//Or make it adhere to an interface
interface Shape{
    area(): number;
}
class Rectangle implements Shape{
    area(){ console.log(120);
    return 100;}
}
function method3<T extends Shape > (args : T) : number{
    return args.area();
}
console.log(method3(new Rectangle()));
function allAreas<T extends Shape> (...args: T[]): number{
    let sum = 0;
    args.forEach(e=>{
        sum+=e.area();
    });
    return sum;
}
allAreas(new Rectangle(), new Rectangle());



