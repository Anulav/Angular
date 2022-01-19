import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { } /* Injecting Router service inside the component*/

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['/']); /* Using navigate method to link to Home url. It accepts link parameters array.
                                    We can also use link parameter arrays with routerLink as <a [routerLink]="['/heroes']">
    */
  }

}
