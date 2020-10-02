import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[] = [];

  constructor() { 
      const lista1 = new Lista('Lista de la compra');
      const lista2 = new Lista('Lista de tias para follármelas por el culo porque son muy cerdas');

      this.listas.push(lista1, lista2);

  }
}
