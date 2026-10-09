import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
// 1. Importamos los componentes de Ionic que usaremos en el HTML
import { IonCard, IonItem, IonCheckbox, IonLabel, IonButton } from '@ionic/angular';
// 2. Importamos CommonModule para poder usar directivas como [class.tachado]
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pelicula-item',
  templateUrl: './pelicula-item.component.html',
  styleUrls: ['./pelicula-item.component.scss'],
  standalone: true, // ¡La línea clave! Le decimos a Angular que este componente es independiente.
  imports: [CommonModule, IonCard, IonItem, IonCheckbox, IonLabel, IonButton],
})
export class PeliculaItemComponent  implements OnInit {

  @Input() pelicula!: Pelicula;

  constructor() { }

  mostrarDetalles(){
    console.log('Datos de la tarea:', this.pelicula);
  }

  ngOnInit() {}

}
