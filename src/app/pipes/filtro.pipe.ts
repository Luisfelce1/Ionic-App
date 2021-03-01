import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from 'src/app/models/lista.models';


@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform( listas: Lista[], completado: boolean = true): Lista[] {

    listas.filter( lista => lista.terminada === completado );

    return listas.filter( lista => lista.terminada === completado );
  }
}
