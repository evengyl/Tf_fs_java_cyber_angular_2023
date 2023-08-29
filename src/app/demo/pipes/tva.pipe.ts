import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tva'
})
export class TvaPipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    let total = value * ((args[0] / 100) + 1)
    return total
  }

}
