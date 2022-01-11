import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeric]'
})
export class NumericDirective {
  /*  The Angular framework provides two helpful decorators that we can use in our directives to enhance their functionality:
    • @HostBinding binds a value to the property of the native host element.
    • @HostListener binds to an event of the native host element.
 */
  @HostBinding('class')
  currentClass!: string;

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent){
    const charCode = event.key.charCodeAt(0);
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      this.currentClass = 'invalid';
      event.preventDefault();
    } else {
      this.currentClass = 'valid';
    }

  }

  constructor() { }

}
