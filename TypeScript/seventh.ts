/*

Modules in TypeScript
For better scaling and modularity we use modules.
A module works @ file level where each file is the module itself, and the name of the module
name matches the filename without '.ts' extension. 
Each member marked with the export keyword becomes the part of module's public API.
Here we export two elements the seventh class and the constant PI.

*/ 

export class seventh {
    static getData(): number{
        return 2;
    }
}

export const PI = 3.14;

