import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/service/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  listasPendientes: Lista[];
  @Input() terminada:boolean = true;

  constructor(
      public _deseoService: DeseosService,
      private _router: Router
    ) { 
    this.listasPendientes = this._deseoService.listas;
  }

  ngOnInit() {}

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

}
