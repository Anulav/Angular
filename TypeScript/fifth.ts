/*Decorators in TS
Used to add metadata to class/methods for Dependency Injection or other class compilation directives.
By creating decorators, we are defining special annotations that may have an impact on the way our classes,
methods or functions behave or just plain simply altering the data we define in in fields or parameters.

Types of decorators in TS:
Class, Methods and Functions.

The @prefix can easily recognize decorators in a name and they are usully located on  
standalone statements above the element they decorator.
*/

/* Class decorators
Decorator statement is executed before the class.
Creating a class decorator requires defining a plain function, whose signature is a pointer to the
constructor belonging to the class we want as decorator, typed as function.

*/

function Banana(target: Function): void {
    target.prototype.banana = function (): void {
        console.log("Bananas");

    }
}

@Banana
class FruitBasket {
    constructor() { }
}

/*let Bannnnnanananan: FruitBasket = new FruitBasket();
Bannnnnanananan.banana();  //Here we gain a banana method by using @banana decorator. 
However this statement won't compile. To make compiler understand we use the approach; */
let bananans: any = new FruitBasket();
(bananans as any).banana();

/*Extending the Decorator to have custom message.  We can design our decorators with custom signature
and them returning the function with the same signature we defined above*/

function Banana2(message: string) {
    return function (target: Function) {
        target.prototype.banana = function (): void {
            console.log(message);

        }
    }
}

@Banana2("Bananas are yellow")
class FruitBasket2 {
}

let banananss: any = new FruitBasket2();
(banananss as any).banana();

/*Property Decorators are same as Class Decorators and but takes two parameters target and key and 
the function returned has different signature than that of a Class.
Applied to class members.
Possible use cases for the specific type of decorator consist of logging the values assigned to class
fields while instantiating objects of the class.


function Jedi(target: Object, key: string) {
    let propertyValue: string = this[key];
    if (delete this[key]) {
        Object.defineProperty(target, key, {
            get: function () {
                return propertyValue;
            },
            set: function (newValue) {
                propertyValue = newValue;
                console.log(`${propertyValue} is a Jedi`);
            }
        });
    }
}
class Character {
    @Jedi
    namez: string;
}
const character = new Character();
character.namez = 'Luke';

*/