import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/service/deseos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor( 
    public _deseoService: DeseosService,
    private _router: Router,
    public alertController: AlertController
    ) {

  }

  async agregarLista(){
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
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if( data.titulo.length > 0 ){
                // Creo lista y guardo su id porque es el dato que retorna la función del service
                const idLista = this._deseoService.crearLista(data.titulo);

                // Con la id de la lista creada, me redirijo a la misma
                this._router.navigateByUrl('/tabs/tab1/agregar/'+idLista);
            }else{
                return;
            }
          }
        }
      ]
    });

    alert.present();
  }

}
