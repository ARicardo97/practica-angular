import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  
  //creamos una variable y la inicializamos en vacio
  heroe:Heroe[] = [];

  //despues del private...el nombre del servicio que deseo asignar
  constructor(private _heroesService:HeroesService, private variable_router:Router) { 
    
  }

  ngOnInit() {
    this.heroe = this._heroesService.getHeroes(); //traemos el metodo de getheroes
    //imprimimos los datos
    console.log(this.heroe);
  }
  
  verHeroe(i:number){
      this.variable_router.navigate(['/heroe', i]);
  }
}
