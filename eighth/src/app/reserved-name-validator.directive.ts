import { AbstractControl, ValidatorFn } from "@angular/forms";
const heroes = [
  { id: 1, name: 'Boothstomper' },
  { id: 2, name: 'Drogfisher' },
  { id: 3, name: 'Bloodyllips' },
  { id: 4, name: 'Mr Bu Moverse' },
  { id: 5, name: 'Piranhaelli' }
  ];
export function reservedNameValidator(): ValidatorFn{
  return (control: AbstractControl):{[key: string]:boolean} | null=>{
    console.log("inside validator");

    const reserved = heroes.find(hero => hero.name === control.value);
    return reserved? {'reservedName': true}: null; //This is why return type is declared as -> {[key: string]:boolean} | null
  }
}

/*
The validator is a function that returns another function, called the configured
validator function. It accepts the form control object to which it will be applied as a
parameter. If the value of the control matches the name of a hero from the heroes list, it
returns a validation error object. Otherwise, it returns null.
The key of the validation error object specifies a descriptive name for the validator error.
This is a name that we can later check in the errors object of the control to find out if it
has any errors. The value of the validation error object can be any arbitrary value that we
can pass in the error message.
*/
