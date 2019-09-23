import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  // declaramos una variable para usar el año de nuestro equipo
  anio: Number;
  constructor() {
    // le asignamos el nuevo año en la que estamos segun nuestro equipo
    this.anio = new Date().getFullYear();

   }
}
