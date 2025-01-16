import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(items: any, term: string): any {

    if (items.null || items.lenght === 0 || term == null || term === '') {

      return items;
    }

    const resultArray = [];

    for (const item of items) {

      if (item.englishSentence.toLowerCase().indexOf(term.toLowerCase()) != -1 || item.bulgarianSentence.toLowerCase().indexOf(term.toLowerCase()) != -1){

        resultArray.push(item);
      }

    }

    return resultArray;
  }
}
