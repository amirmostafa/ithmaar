import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], property: string, args: any): any {
    if(!args || args.length === 0) return items;
    return items.filter(item => _.find(args, (e) => e === item[property]) !== undefined);
  }

}
