import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() {

    
   }

  ngOnInit() {
  }

  //funcion para buscar heroes
  buscarHeroe(termino:string){
    console.log(termino);
  }
}


