import { Component } from '@angular/core';
import { UploadService } from './upload.service';
import { EnglishTenesesModel } from '../shared/englishteneses/englishtenses.model';
import { UploadDataResult } from './upload-result.model';

@Component({
  selector: 'app-upload',
  standalone: false,
  
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  sentenceType: number = 1;
  tensesType: number = 1;

  model: EnglishTenesesModel = new EnglishTenesesModel();

   constructor(private uploadService: UploadService) {}

    ngOnInit(): void {
      this.onGetEnglishTenesesModel();
    }

  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {

    this.loading = !this.loading;

    console.log(this.file);

    const formData = new FormData();

    formData.append('uploadcsv', this.file, this.file.name);

    this.uploadService.onUploadData(0,this.tensesType,this.sentenceType,formData).subscribe((uploadDataResult: UploadDataResult) => {

      //item.fullImageUrl = uploadDataResult.fullImageUrl;

      //item.imageUrl = uploadDataResult.imageUrl;
    });
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
  
      const selectedItem = this.model.tensesDropDown.tensesItems.find(item => item.name === selectedValue);

      if (selectedItem !== null)
      {
        this.tensesType = selectedItem.id;

        console.log(selectedItem);
      }

     console.log('Selected item:', selectedItem);
    }
  
    OnGetSelectedSentenceTypeItems(event: Event): void {
      const selectElement = event.target as HTMLSelectElement;
      const selectedValue = selectElement.value;
      console.log('Selected ID:', selectedValue);
  
      const selectedItem = this.model.sentenceTypeDropDown.sentenceTypes.find(item => item.name === selectedValue);

      if (selectedItem !== null) {

        this.sentenceType = selectedItem.id;
      }

      console.log('Selected item:', selectedItem);
      }
}
