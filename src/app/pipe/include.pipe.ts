import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'include'
})
export class IncludePipe implements PipeTransform {

  transform(data: string, value: string) {
    let arr = data.includes(value);
    return arr
  }
  
}
