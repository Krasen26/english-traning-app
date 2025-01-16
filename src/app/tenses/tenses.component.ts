import { Component } from '@angular/core';
import { EnglishTenesesModel } from '../shared/englishteneses/englishtenses.model';
import { TensesComponentService } from './tenses.service';
import { DropDownItem } from '../shared/dropdown-tenses/dropdown-item.model';
import { TensesDropDown } from '../shared/dropdown-tenses/tenses-dropdown.model';
import { EnglishTenesesItem } from '../shared/englishteneses/englishtenses-item.model';

@Component({
  selector: 'app-tenses',
  standalone: false,
  
  templateUrl: './tenses.component.html',
  styleUrl: './tenses.component.scss'
})
export class TensesComponent {

  model: EnglishTenesesModel = new EnglishTenesesModel();

  
  constructor(private tensesService: TensesComponentService) {
   
  }

  ngOnInit(): void {
    this.onGetEnglishTenesesModel();
   
  }

  onGetEnglishTenesesModel() {
    this.tensesService.getEnglishTenses()
      .subscribe(model => {
        this.model = model;
        //this.setTenses();
      });
  }


  onToggleText(item:EnglishTenesesItem) {
    item.isTextShown = !item.isTextShown;
  }
  // onCloseMenu() {
  //   this.model.tensesDropDown.isOpen = false;
  // }
  // onOpenMenu() {
  //   this.model.tensesDropDown.isOpen = !this.model.tensesDropDown.isOpen;
  // }

  // onSelectTense(tense: TenseItem) {
  //   this.model.tensesDropDown.selectedTense = tense;
  //   this.model.tensesDropDown.isOpen = false;
  // }

  // setTenses(){
  //   this.model.tensesDropDown = new TensesDropDown();

  //   let tensesItem = new TenseItem();
  //   tensesItem.id = 0;
  //   tensesItem.name = "All";
  //   tensesItem.isSelected = true;
  //   this.model.tensesDropDown.tensesItems.push(tensesItem);

  //   let tensesItemOne = new TenseItem();
  //   tensesItemOne.id = 1;
  //   tensesItemOne.name = "Present Simple";
  //   tensesItem.isSelected = false;
  //   this.model.tensesDropDown.tensesItems.push(tensesItemOne);


  //   let tensesItemTwo = new TenseItem();
  //   tensesItemTwo.id = 2;
  //   tensesItemTwo.name = "Present Continuous";
  //   tensesItem.isSelected = false;
  //   this.model.tensesDropDown.tensesItems.push(tensesItemTwo);

  //   let tensesItemThree = new TenseItem();
  //   tensesItemThree.id = 3;
  //   tensesItemThree.name = "Present Perfect Simple";
  //   tensesItem.isSelected = false;
  //   this.model.tensesDropDown.tensesItems.push(tensesItemThree);

  //   let tensesItemFour = new TenseItem();
  //   tensesItemFour.id = 4;
  //   tensesItemFour.name = "Past Simple";
  //   tensesItem.isSelected = false;
  //   this.model.tensesDropDown.tensesItems.push(tensesItemFour);

  //   let tensesItemFive = new TenseItem();
  //   tensesItemFive.id = 5;
  //   tensesItemFive.name = "Future Simple";
  //   tensesItem.isSelected = false;
  //   this.model.tensesDropDown.tensesItems.push(tensesItemFive);


  // }

  OnGetSelectedTensesItems(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected ID:', selectedValue);
    // Можеш да добавиш логика за обработка тук

    const selectedItem = this.model.tensesDropDown.tensesItems.find(item => item.name === selectedValue);
   console.log('Selected item:', selectedItem);
  }

  OnGetSelectedSentenceTypeItems(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected ID:', selectedValue);

    const selectedItem = this.model.sentenceTypeDropDown.sentenceTypes.find(item => item.name === selectedValue);
    console.log('Selected item:', selectedItem);
    }
}
