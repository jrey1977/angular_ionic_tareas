import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listas: Lista[], finiquitada:boolean = true): Lista[] {
    return listas.filter(miLista => {
      return miLista.completada === finiquitada
    });
    // return listas.filter( miLista => miLista.completada === finiquitada);
  }

}
