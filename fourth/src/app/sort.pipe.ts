import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';
/* On contrary to Components custom pipe classes are generated where the command to generate the custom pipe is run */
@Pipe({
  name: 'sort',
  pure: false /* Angular executes pure pipes when there is a change to the reference of the
                input variable. For example, if the heroes array is assigned to a new value, the pipe will
                correctly reflect the change. However, if we add a new hero in the array, the pipe will not
                be triggered at all.  */
})
export class SortPipe implements PipeTransform {

  transform(value: Hero[], args: any): Hero[] {
  /*
  transform(value: unknown, ...args: unknown[]): unknown {
      The first parameter, value, is the input that we want to transform. The second parameter, args, is an optional list of arguments that we can provide to the transformation method,
      each one separated by a colon.
      Angular has configured the transform method to use a particular type called unknown, which works similarly to the any
      type. A variable of the unknown type can have a value of any type. The main difference is that TypeScript will not let us apply arbitrary operations on unknown
      values, such as calling a method, unless we first perform type-checking.

      */


      if (value) {
        return value.sort((a: Hero, b: Hero)=>{
            if(a[args] < b[args]){ // Giving: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Hero'
              return -1;           // temp solution, had to include in angularCompilerOptions "noImplicitAny": false in tsconfig
            } else if (b[args] < a[args]) {
              return 1;
              }
              return 0;
        });
      }

    return [];
  }

}
