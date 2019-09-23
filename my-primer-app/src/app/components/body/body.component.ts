import { Component } from '@angular/core';
import { from } from 'rxjs';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    // para mostrar el card de ngIf
    mostrar = true;

    // esto es un objeto
    frase: any = {
        mesaje: 'Tienes que tener una gran resposabilidad, el dinero no cae del árbol',
        autor: 'Ricardo Matu'
    };

    //el ngFor trabaja con base a arreglos[]
    personajes: string[] = ['Spiderman', 'venom', 'Dr.Octopus'];

}