import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bobonneTranslateV2'
})
export class BobonneTranslateV2Pipe implements PipeTransform {

  transform(value: number): string {

    switch (value){
      case 1 : 
        return "Un"
      case 2 :
        return "Deux"
      case 3 : 
        return "Trois"
      case 4 : 
        return "Quatre"
      case 5 :
        return "Cinq"
      default :
        return "Quarante-deux"
    }
  }

}
