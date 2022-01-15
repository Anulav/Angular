import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sixth';
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
      setTimeout(()=>{
        resolve();
      },4000);
    });
  }

  constructor(){
    this.changeTitle(this.setTitle); /* Setting setTitle as callback to the changeTitle */
    this.onCompletePromiseMethod().then(this.setTitlePromise); /*  To execute a method that returns a promise, we invoke the method and
                                                                   chain it with the then method. Much cleaner than callback.
                                                                */
  }

}


/* In a callback, the function that triggers asynchronous action accepts another function
   as a parameter, which is called when the asynchronous operation is completed.
   Nested callbacks can lead to 'Callback Hell'.

   Cons of Promises:
   1. Sometimes we might need to produce a response output that follows a more complex digest process
      or even cancel the whole process. We cannot accomplish such behavior with promises,
      because they are triggered as soon as they're being instantiated. In other words, promises
      are not lazy.
      Promises allow us to resolve or reject an asynchronous operation, but sometimes we
      might want to abort everything before getting to that point.
   2. Promises behave as one-time operations. Once they are resolved, we cannot expect to receive any further information or state change notification unless
      we rerun everything from scratch. Moreover, we sometimes need a more proactive
      implementation of asynchronous data handling, which is where OBSERVABLES come into
      the picture.

*/
