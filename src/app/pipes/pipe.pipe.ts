import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piper'
})
export class Piper implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value, args)
    return null;
  }

}
