import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sixth';
  timeNow! : Date;

  time$ = new Observable(observer =>{  /* New Observable. By convention we use $ after the name of an observable. */
    setInterval(()=>{
      observer.next();
    },1000);
  })
  private setTitle = () => {
      this.title = 'sixth_edited';
  }

  private setTitlePromise = () =>{
      this.title = 'sixth_edited_promise'
  }


  private changeTitle(callback: () => void){
    setTimeout(()=>{
      callback();
    },2000);
  }

  private onCompletePromiseMethod(){
    return new Promise<void>((resolve, reject)=>{     /* Two methods as args on success resolve and reject for error.*/
      setTimeout(()=>{                               // Even after changing the method setTimeout to setInterval the the promise is executed once.
        resolve();
      },4000);
    });
  }

  private setTimeNow = ()=>{
    this.timeNow = new Date();
  }


  constructor(){
    this.changeTitle(this.setTitle); /* Setting setTitle as callback to the changeTitle */
    this.onCompletePromiseMethod().then(this.setTitlePromise); /*  To execute a method that returns a promise, we invoke the method and
                                                                   chain it with the then method. Much cleaner than callback.
    */
    this.timeNow = new Date();
    this.time$.subscribe(this.setTimeNow); /*  We use the subscribe method to register to an observable and get
                                              notified of any changes. If we do not call this method, setInterval never executes.
   */
  }

}


/* In a callback, the function that triggers asynchronous action accepts another function
   as a parameter, which is called when the asynchronous operation is completed.
   Nested callbacks can lead to 'Callback Hell'.

  Limitations of Promises:
  • They cannot be canceled.
  • They are immediately executed.
  • They are one-time operations only; there is no easy way to retry them.
  • They respond with only one value.

  To overcome above, we use Observables.

  Observations: Although as assumed the Promise with setInterval should have executed once. But it executed
  multiple times. Strange :|

  Observables return a stream of events, and our subscribers receive prompt notification
  of those events so that they can act accordingly. They do not perform an asynchronous
  operation and die (although we can configure them to do so), but start a stream of
  continuous events on which we can subscribe.

  Reactive programming entails applying asynchronous subscriptions and transformations to observable streams of events
*/
