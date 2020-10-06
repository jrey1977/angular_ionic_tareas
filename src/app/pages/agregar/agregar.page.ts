import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/service/deseos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string = '';

  constructor( private _deseoService: DeseosService,
                        private _route: ActivatedRoute, 
                        private _router: Router 
    ) { 
        const idLista = this._route.snapshot.paramMap.get('idLista');
        this.lista = this._deseoService.cargarLista(idLista);
    }

  ngOnInit() {
  }

  agregarItem(){
    if(this.nombreItem.length === 0){
      return;
    }else{
      const nuevoItem = new ListaItem(this.nombreItem);
      this.lista.items.push(nuevoItem);
      this.nombreItem = '';
      this._deseoService.guardarLista();
    }
  }

  cambioEstado(item: ListaItem){
    const pendientes = this.lista.items.filter( itemData => {
      return itemData.completado === false;
    }).length;
    
    if(pendientes === 0){
      this.lista.terminadaEn = new Date();
      this.lista.completada = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.completada = false;
    }

    this._deseoService.guardarLista();
  }

  borrar(i: number){
    this.lista.items.splice(i,1);
    this._deseoService.guardarLista();
  }


}
