import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service'; //importamos el servicio para usarlo

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{
  
  //creamos una variable de tipo any que va ser un objeto
  heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroesService:HeroesService) { 
    //nos suscribimos para escuchar los cambios de params
    this.activatedRoute.params.subscribe( variable_params =>{
      //obtenemos lo que mandamos en las rutas ['heroe/:id']
      // console.log(variable_params['id']); //de esta manera obtenemos los parametros
      this.heroe = this._heroesService.getHeroe(variable_params['id']);
    });
  }

}
