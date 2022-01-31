import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef: MatDialogRef<DialogComponent>) { }/*
  In a real-world scenario, you will probably need to create a reusable component for
  displaying a dialog in an Angular project. Even better, the component may end up in an
  Angular library as a package. Therefore, you should configure the dialog component to
  accept data dynamically, such as the title of the dialog.

  Injecting the MAT_DIALOG_DATA token in the constructor of
  DialogComponent. The MAT_DIALOG_DATA is not an Angular service, and
  that's the reason why we cannot inject it normally as we do with services. It is an
  injection token, and we use the @Inject decorator to inject it.The data variable will contain any data that
  we pass to the dialog when we call its open method

  For closing dialog,
  Instead of using the mat-dialog-close directive to close a dialog declaratively,
  we could use the MatDialogRef service. The MatDialogModule exports the
  MatDialogRef service that contains a close method that we can use.

  */

  ngOnInit(): void {
  }

  closeDialog(data?: boolean){
    this.dialogRef.close(data);
    window.alert(data);
  }

}
