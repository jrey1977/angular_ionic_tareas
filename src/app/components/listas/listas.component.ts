import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/service/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) listaHTML: IonList;
  @Input() terminada:boolean = true;

  constructor(
      public _deseoService: DeseosService,
      private _router: Router,
      public alertController: AlertController
    ) {
  }

  ngOnInit() {
    console.log(this._deseoService.listas);
  }

  listaSeleccionada(lista: Lista){
    if(this.terminada){
        this._router.navigateByUrl('/tabs/tab2/agregar/'+lista.id);
    }else{
        this._router.navigateByUrl('/tabs/tab1/agregar/'+lista.id);
    }
      
  }

  borrarLista(lista:Lista){
      this._deseoService.borrarLista(lista);
  }

  async editarLista(lista:Lista){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.listaHTML.closeSlidingItems();
          }
        },
        {
          text: 'Grabar',
          handler: (data) => {
            if( data.titulo.length > 0 ){
                // Creo lista y guardo su id porque es el dato que retorna la función del service
                lista.titulo = data.titulo;
                this._deseoService.guardarLista();
                this.listaHTML.closeSlidingItems();
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
