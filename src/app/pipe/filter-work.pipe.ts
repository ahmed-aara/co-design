import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWork'
})
export class FilterWorkPipe implements PipeTransform {
  transform(items: any, callback: (item: any) => any, num_img: any): any {
    return items.slice(0, num_img);
  }
}
