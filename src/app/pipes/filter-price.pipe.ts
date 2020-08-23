import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice',
  pure: false
})
export class FilterPricePipe implements PipeTransform {

  transform(items: any[], args: any): any {
    if(!args || args.length === 0) return items;
    return items.filter(item => item.price >= args[0] && item.price <= args[1]);
  }

}
