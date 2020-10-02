import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/service/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listasPendientes:Lista[];

  constructor( 
    public _deseoService: DeseosService,
    private _router: Router
    ) {
      this.listasPendientes = this._deseoService.listas;
  }

  agregarLista(){
    this._router.navigateByUrl('/tabs/tab1/agregar');
  }

}
