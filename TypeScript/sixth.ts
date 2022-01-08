/*
Advanced DataTypes in TS

Partial: Used when we create an object from an Interface but want to use only some of its properties.

*/
interface Hero {
    name: string;
    power: string;
}

const hero1: Partial<Hero> = {
    name: 'SuperMan'
}
console.log(hero1);

/*
Record : In TS we don't have anything like a Dictionary for key,Value we can use record or other technique.
*/

interface SuperHeroes {
    powers: {
        [key: string]: number
    }
}

const Batman = <SuperHeroes>{
    powers: {
        agility: 30
    }
};

console.log(Batman);


//The above can be replaced using a Record

interface Heroes {
    powers: Record<string, number>
}
let Superman = <Heroes>{
    powers: { laserEyes: 100 }
}

console.log(Superman);

/*
Union is to be used when we know the types a property can have. Like Generics but specified to some types only
*/

interface Cars {
    props: string[] | Record<string, number>; //Used union as alternative type.
}

let Mercedes = <Cars>{
    props: ["Red color"]
}
let BMW = <Cars>{
    props: { "CC": 1500 }
}
console.log(Mercedes);
console.log(BMW);

/*
Nullable properties
Can check for Nullables using '?'
*/
interface Cars3 {
    props: number[] | null | undefined;
}

let Ferrari = <Cars3>{};
let BMV = <Cars3>{
    props : [1,2]
}
if (Ferrari.props !== null && Ferrari.props !== undefined) { //Here we have done Null check which can be removed as below 
    for (let i = 0; i < Ferrari.props.length; i++) {
            console.log("Ferrari.props");
    }
}

/*
for (let i = 0; i < (BMW.props?BMW.props.length : 0); i++) { //Here we have used Nullable properties
    console.log("BMW.props");
     
}

*/

// Somethings still need clearance!! :(