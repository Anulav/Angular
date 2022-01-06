//Interfaces 
interface Exception{
    message: string;
    id?: number; //This is optional , hence '?'.
}

interface ErrorHandling{
    exceptions: Exception[];
    logException(message: string, id?: number): void;
}

interface ExceptionHandlerSettings{
    logAllExceptions : boolean;
}

class CustomExceptionHandler implements ErrorHandling{
    exceptions: Exception[] = [];
    logAllExceptions: boolean = false;
    
    constructor(settings: ExceptionHandlerSettings){
        this.logAllExceptions = settings.logAllExceptions;
    }

    logException(message: string, id?: number): void {
        throw new Error("Method not implemented.");
    }

}

//In TS, we can create instances of interfaces
interface A {
    a: any;
}
const instance = <A>{ a: 3};
instance.a = 5;
console.log(instance);
//This makes it easier to have a built-in Mocking library. Rather than having a separate dependency.

//Inheritance in TS
class Car3 {
    constructor(public make: string, public model: string){}
}
class Sedan extends Car3{
    year: string
    constructor(year: string, model: string, make: string){
        super(make, model); //Super method calls the parent constructor.
        this.year = year;
    }
}
let city: Sedan = new Sedan('2003','Honda City-R','Red Factory');
console.log(city);

