import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { UpperCasePipe } from '@angular/common';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
