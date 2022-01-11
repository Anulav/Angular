import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit{
  @Input() appPermission!: string[];
  private currentRole: string = 'agent';

    /* We now need to add the business logic that adds or removes the embedded view of the host element in the DOM according to the roles that we pass in the
      input property. We use two classes to help us:
    • TemplateRef: The Angular generated ng-template element of the embedded view.
    • ViewContainerRef: The container used to insert the embedded view, which is
      adjacent to the host element*/

  constructor(private tmplRef: TemplateRef<any>, private vc: ViewContainerRef) {
   }
  ngOnInit(): void {
    if(this.appPermission.indexOf(this.currentRole) === -1){
      this.vc.clear;
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }

 // In a real-world scenario, we would not hardcode the current role in the directive but use an Angular service to fetch it.



}
