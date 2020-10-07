import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[] = [];

  constructor() { 

      this.cargarListas();

  }

  crearLista( titulo:string ){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarLista();

    // Devuelvo la id de la lista creada para redirigirme a la misma
    return nuevaLista.id;
  }

  editarLista(id:number, titulo:string){
    let listaEditada = this.listas.find( listaData => {
      return listaData.id === id;
    })
    listaEditada[titulo] = titulo;
    this.guardarLista();
  }

  guardarLista(){
      localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarListas(){
      if(localStorage.getItem('data')){
          this.listas = JSON.parse(localStorage.getItem('data'));
      }else{
        this.listas = [];
      }
  }

  cargarLista(id:string | number){
      id = Number(id);

      return this.listas.find( listaData => {
        return listaData.id === id;
      })
  }

  borrarLista(lista: Lista){
    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id;
    })
    this.guardarLista();
  }
}
