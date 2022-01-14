import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero.model';
import { HeroDetailService } from './hero-detail.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroDetailService], /*Provided HeroDetailService although it is also provideIn root. Service Scoping Baby!!.Also this is shorthand for providers: [{provide: HeroService, useClass: HeroService}]*/
  //viewProviders: [HeroDetailService] In order to restrict the dependency Injection to current next we use the viewProviders rather than providers
})
export class HeroDetailComponent implements OnInit {

  hero! : Hero;
  @Input() id!: number;

  constructor(private heroDetailService: HeroDetailService ) { }

  ngOnInit(): void {
    this.hero = this.heroDetailService.getHero(this.id);
  }

}
