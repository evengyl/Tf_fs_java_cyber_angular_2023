import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurotobtc'
})
export class EurotobtcPipe implements PipeTransform {

  transform(value: number): string {
    let oneEuroToBTC : number = 0.000042

    let total : number = value * oneEuroToBTC
    return total + " BTC"
  }

}
