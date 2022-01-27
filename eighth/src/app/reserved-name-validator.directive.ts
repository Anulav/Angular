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
