//decorador
import { Component } from '@angular/core';
import { from } from 'rxjs';

//configurar
@Component({
    selector: 'app-header', //como va a cargar este componente angular...y cuando se necesite se llama
    templateUrl: './header.component.html'
})

//simple clase de typeScrip y le digo export para que sea utilizado fuera
export class HeaderComponent{
    
}