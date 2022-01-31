import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninth';

  constructor(private dialog: MatDialog){}

  showdialog(){
    this.dialog.open(DialogComponent,{
      autoFocus: false,     /* Setting the configuration for the dialog box here. The autoFocus property is part of the MatDialogConfig object that contains various
      options that we can use to configure a dialog, such as setting its width or height. We
      can also use this object to pass data to our dialog component.

      */
      data: 'Love Angular 10?'
    });
  }

}
