import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    let vatPercentage:number=18;
    if(args){
        vatPercentage=args;
    }
    return value+(value*vatPercentage/100);
  }

}
