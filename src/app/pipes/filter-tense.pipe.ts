import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTense',
})
export class FilterTensePipe implements PipeTransform {

  transform(items: any, term: string ,sentenceType:number,tensesType:number ): any[] {

    if (!items || items.length === 0 || (!term && sentenceType === 0 && tensesType === 0)) {
      return items;
    }

    //const resultArray = [];
    
    // for (const item of items) {
    //   if ((item.englishSentence.toLowerCase().indexOf(term.toLowerCase()) != -1 ||
    //        item.bulgarianSentence.toLowerCase().indexOf(term.toLowerCase()) != -1) &&
    //       (sentenceType === 0 || item.sentenceType === sentenceType) &&
    //       (tensesType === 0 || item.tensesType === tensesType)) {
            
    //     resultArray.push(item);
    //   }
    // }

    // return resultArray;

    return items.filter(item => {
      const matchesTerm = term ? (
        item.englishSentence.toLowerCase().includes(term.toLowerCase()) ||
        item.bulgarianSentence.toLowerCase().includes(term.toLowerCase())
      ) : true;

      const matchesSentenceType = sentenceType ? item.sentenceType === sentenceType : true;
      const matchesTensesType = tensesType ? item.tensesType === tensesType : true;

      return matchesTerm && matchesSentenceType && matchesTensesType;
    });
  }

}
