import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { IonToggle } from "@ionic/angular";
import { Settings } from '../../services/settings';
import { IonBackButton } from "@ionic/angular";

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonToggle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonListHeader, IonItem, IonLabel, IonButtons ]
})
export class AjustesPage implements OnInit {

  // Al declarar el parámetro como 'public', Angular nos permite acceder a 
  // 'settingsService' directamente desde el archivo HTML (plantilla).
  constructor(public settingsService: Settings) { }

  // Método que se ejecuta cada vez que el usuario mueve el interruptor (ion-toggle)
  onToggleChange(event: any) {
    // Obtenemos el nuevo valor booleano (true o false) del evento del componente
    const isChecked = event.detail.checked;
    
    // Actualizamos el servicio pasándole el nuevo estado
    this.settingsService.setDarkMode(isChecked);
  }

  ngOnInit() {
  }

}
