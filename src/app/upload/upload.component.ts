import { Component } from '@angular/core';
import { UploadService } from './upload.service';
import { EnglishTenesesModel } from '../shared/englishteneses/englishtenses.model';

@Component({
  selector: 'app-upload',
  standalone: false,
  
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {

   model: EnglishTenesesModel = new EnglishTenesesModel();

   constructor(private uploadService: UploadService) {}

    ngOnInit(): void {
      this.onGetEnglishTenesesModel();
    }


   onGetEnglishTenesesModel() {
      this.uploadService.getEnglishTenses()
        .subscribe(model => {
          this.model = model;
        });
    }


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
