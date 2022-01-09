import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.Emulated //Angular embeds style sheets at the head of the document so that they might affect other elements of our application. To prevent this from happening, we can set up different levels of view encapsulation. In a nutshell, encapsulation is the way
})
export class AppComponent {
  title = 'third';
  myText = 'Hi there';
  currentStyle = 'color: red; width: 100px'; //For inline CSS, we can have a string with CSS values.
  newStyle = {        //Can also add JS objects as CSS classes from components.
    color: "skyblue",
    width: "200px"
  }
  hero = "Superman";
  onClick(){
    this.currentStyle = 'color: orange; width: 200px';
  }
  onLike(event: Boolean) {
    window.alert(`I like ${this.hero} and ${event}`);
    this.hero = 'Boothstomper';
    }
}

export const PI = 3.14;
