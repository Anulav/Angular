//Class declarations and short hand class. Same as any other OOP based language.
class Car{
    private distance_return: number = 0;
    private color: string;

    //The constructor can be used to add new data memebers such as isHybrid in this case.
    constructor(private isHybrid: boolean, distance_return: number, color: string = 'red'){
        this.color = color;
    }

    getGasConsumption(): string {
        return this.isHybrid? 'very low' : 'very high';
    }

    drive(distance: number): void {
        this.distance_return+=distance;
    }

    static honk(): string {
        return 'HONK!';
    }

    get distance():number{
        return this.distance_return;
    }

}
//For decalarations of the variables, entry and assignment in the constructor TS can make this in 
//the following class
class Car2{
    constructor(public make: String, public model: string){}
}

console.log( new Car(true,0).getGasConsumption());
console.log( new Car2('Mercedes','E-series').model);
