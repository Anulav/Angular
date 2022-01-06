//Class declarations and short hand class. Same as another OOP based language.
var Car = /** @class */ (function () {
    //The constructor can be used to add new data memebers such as isHybrid in this case.
    function Car(isHybrid, distance_return, color) {
        if (color === void 0) { color = 'red'; }
        this.isHybrid = isHybrid;
        this.distance_return = 0;
        this.color = color;
    }
    Car.prototype.getGasConsumption = function () {
        return this.isHybrid ? 'very low' : 'very high';
    };
    Car.prototype.drive = function (distance) {
        this.distance_return += distance;
    };
    Car.honk = function () {
        return 'HONK!';
    };
    Object.defineProperty(Car.prototype, "distance", {
        get: function () {
            return this.distance_return;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
//For decalarations of the variables, entry and assignment in the constructor TS can make this in 
//the following class
var Car2 = /** @class */ (function () {
    function Car2(make, model) {
        this.make = make;
        this.model = model;
    }
    return Car2;
}());
console.log(new Car(true, 0).getGasConsumption());
