import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';

/*
An Angular module is a container for a particular block of code that adheres to the same functionality.
The functionality of an Angular module is dedicated to an application domain, such as orders
or customers, or a specific workflow, such as user registration. Generally, it addresses a
particular set of capabilities that an application can havan Angular application has, at the very least, a main module, AppModule. We
can also create other modules, usually called feature modules.
*/

@NgModule({
  declarations: [HeroListComponent],  //declarations: The components, directives, and pipes that are registered with the module.
  imports: [         //imports: Other modules that contain declarations to be used by this module.
    CommonModule
  ],
  exports: [HeroListComponent]
})
export class HeroesModule { }


