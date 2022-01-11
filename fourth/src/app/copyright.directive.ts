import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.addClass(el.nativeElement, 'copyright'); /*addClass adds the
    copyright class to the specified nativeElement. The class is defined in the styles.css file that exists in the app folder. In this file, we place CSS styles that affect our application globally.
    */
    renderer.setProperty( // setProperty sets the textContent property of the specified nativeElement to the actual copyright information text.

      el.nativeElement,
      'textContent',
      `Copyright ©${new Date().getFullYear()} All Rights Reserved.`
    );

  }

}
