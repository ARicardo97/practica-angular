import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  //creamos una variable local
  heroes:any[] = [];
  ter:string;

  //creamos un parametro de activated para usar la ruta
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private variable_router:Router) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['ter']);
      this.heroes = this._heroesService.buscarHeroes(params['ter']);
      console.log(this.heroes);
    })
  }
  verHeroe(i:number){
    this.variable_router.navigate(['/heroe', i]);
  }
}
