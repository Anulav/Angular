//Functions, lambdas, and execution flow
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Functions
//functions in TS similar to JS except it can be static.
function sayHello(name) {
    return "Hello, ".concat(name);
}
//As observed, we annotate the parameters and the return type.
console.log(sayHello("Anulav"));
//We might assume that here the variable pointing to a anonymous function will be typed as string.
//But that's not the case in TS as the varible type is function in this case.
var sayHelloFunction = function (name) {
    return "Hello, ".concat(name);
};
console.log(sayHelloFunction("Angie"));
//console.log(sayHelloFunction.constructor.name); //Function
//This whole block, which is of the form 
//(arguments: type) => returned type, becomes the type annotation our
//compiler expects.
//Function Parameters in TS
//Optional Parameters 
//In TS optional parameters are defined by adding '?' symbol as postfix to the parameter we want to make optional.  
function greetMe(name, greeting) {
    if (!greeting) {
        greeting = "Hi,";
    }
    return "".concat(greeting, " ").concat(name);
}
;
console.log(greetMe("Anulav", "Hi there"));
console.log(greetMe("Angie"));
//Optional parameters are to be placed at the end of the argument list.
//Default Parameters.
function greetMe2(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return greeting + " " + name;
}
console.log(greetMe2("Michael"));
console.log(greetMe2("Michael", "What's up?, "));
//Again as optional parameters the default parameters are to be placed at the end of the argument list.
//Rest Parameters
//JavaScript has the flexibilty of JS when defining functions is the ability to accept the 
//an unlimited non-declared array of parameters in the form of the arguments list.
//In TS we can have the same functionality using Rest parametes. Like var-args in Java.
function greetPeople(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    names.forEach(function (e) {
        console.log(greeting + " " + e);
    });
    console.log(names.length);
}
console.log(greetPeople("Hi, ", "Jasmine", "Aladdin", "Genie" + "Abu", "Carpet"));
//Arrow Functions
var double = function (x) { return x * 2; };
var add = function (x, y) { return x + y; }; //Multiple parameters with arrow functions.
var add2 = function (x, y) {
    var sum = x + y; //Arrow functions with body.
    return sum * 2;
};
//'this' access callbacks vs arrow functions.
//The value of this can be point to a different context depending on where it is executed.
//When referring this inside the callbacks, we loose track of the upper context so may employ assigning
//the variables to be used by assigning to 'self' or 'that'. But arrow functions can make it happen.For Example,
// function delayedGreeting(name: string): void{
//     setTimeout(function(){
//         console.log(`Hi, ${this.name}`); //This will print Hi, undefined.        
//     },0);
// }
// delayedGreeting("Annabelle");
// function delayedGreeting(name: string): void{
//     setTimeout(function(this: string, name: string){
//         console.log("Hi,"+ this.name}`); //This will print Hi, undefined.        
//     }),0);
// }
// delayedGreeting("Annabelle");
//NOT CLEAR YET!
//Common TS features
//Spread Parameter. Can also be used for JS objects
var newItem = 3;
var oldArray = [1, 2];
var newArray = __spreadArray(__spreadArray([], oldArray, true), [newItem], false);
var car2 = {
    brand: 'Mercedes'
};
var vehicles = __assign(__assign({}, car2), { Category: "Coupe" });
console.log(newArray);
console.log(vehicles);
//Template Strings same as f-strings
var url = "There were ".concat(newItem, " newItems");
console.log(url);
//Generics 
//Method Generic args name 
function method(arg) {
    return arg;
}
console.log(method(1));
//To make specific to array
function method2(args) {
    console.log(args.length);
    return args;
}
method2([1, 2, 3]);
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.area = function () {
        console.log(120);
        return 100;
    };
    return Rectangle;
}());
function method3(args) {
    return args.area();
}
console.log(method3(new Rectangle()));
