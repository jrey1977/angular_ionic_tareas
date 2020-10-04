import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/service/deseos.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listasPendientes:Lista[];

  constructor( 
    public _deseoService: DeseosService,
    private _router: Router,
    public alertController: AlertController
    ) {
      this.listasPendientes = this._deseoService.listas;
  }

  async agregarLista(){
    //this._router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista' 
        }
      ],
      buttons: ['OK']
    });

    alert.present();
  }

}
