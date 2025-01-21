import { Component } from '@angular/core';
import { EnglishTenesesModel } from '../shared/englishteneses/englishtenses.model';
import { TensesComponentService } from './tenses.service';
import { EnglishTenesesItem } from '../shared/englishteneses/englishtenses-item.model';
import { EnglishTenesesResult } from './english.teneses-result';

@Component({
  selector: 'app-tenses',
  standalone: false,

  templateUrl: './tenses.component.html',
  styleUrl: './tenses.component.scss',
})
export class TensesComponent {
  model: EnglishTenesesModel = new EnglishTenesesModel();

  sentenceType: number = 0;
  tensesType: number = 0;

  constructor(private tensesService: TensesComponentService) {}

  ngOnInit(): void {
    this.onGetEnglishTenesesModel();
  }

  onGetEnglishTenesesModel() {
    this.tensesService.getEnglishTenses().subscribe((model) => {
      this.model = model;
      //this.setTenses();
    });
  }

  onToggleText(item: EnglishTenesesItem) {
    item.isTextShown = !item.isTextShown;
  }

  OnGetSelectedTensesItems(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected ID:', selectedValue);
    // Можеш да добавиш логика за обработка тук

    const selectedItem = this.model.tensesDropDown.tensesItems.find(
      (item) => item.name === selectedValue
    );

    if (selectedItem !== null) {
      this.tensesType = selectedItem.id;
    }
    
    console.log('Selected item:', selectedItem);
  }

  OnGetSelectedSentenceTypeItems(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected ID:', selectedValue);

    const selectedItem = this.model.sentenceTypeDropDown.sentenceTypes.find(
      (item) => item.name === selectedValue
    );

    if (selectedItem !== null) {
      this.sentenceType = selectedItem.id;
    }

    console.log('Selected item:', selectedItem);
  }

  onItemEdit(item: EnglishTenesesItem) {

    for (let englishTeneses of this.model.englishTenesesItems) {
      englishTeneses.isEditMode = false;
    }

    item.isEditMode = true;
  }

  onItemBack(item: EnglishTenesesItem) {

    item.isEditMode = false;

  }

  onItemSave(item: EnglishTenesesItem) {

    this.tensesService.onEdit(item).subscribe((englishTenesesResult: EnglishTenesesResult) => {

      item.isEditMode = false;

      console.log(englishTenesesResult.successMessage);
    });

  }
  onItemDelete(item: EnglishTenesesItem) {

    const id = item.Id;

    this.tensesService.onDelete(item).subscribe((englishTenesesResult: EnglishTenesesResult) => {

      this.onGetEnglishTenesesModel();
      //console.log(englishTenesesResult.successMessage);
      //console.log(this.model.englishTenesesItems.length);

      //let data: EnglishTenesesItem[] = [];


      //for (let english of this.model.englishTenesesItems) {
      //  console.log("TEST 1 " + english);
      //  //if (english.Id == 5) {

      //  //  console.log("TEST " + english);
      //  //}

      //  if (english.Id != item.Id) {

      //    data.push(english);
      //  }
      //}

      //console.log(data.length);


      //this.model.englishTenesesItems = data;
      
    });

  }
  
}
