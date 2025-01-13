import { Component } from '@angular/core';
import { EnglishTenesesModel } from '../shared/englishteneses/englishtenses.model';
import { PresentSimpleService } from './present-simple.service';

@Component({
  selector: 'app-present-simple',
  standalone: false,
  
  templateUrl: './present-simple.component.html',
  styleUrl: './present-simple.component.scss'
})
export class PresentSimpleComponent {

  model: EnglishTenesesModel = new EnglishTenesesModel();

  constructor(private presentSimpleService: PresentSimpleService) {
   
  }

  ngOnInit(): void {
    this.onGetEnglishTenesesModell();
  }

  onGetEnglishTenesesModell() {
    this.presentSimpleService.getEnglishTenses()
      .subscribe(model => {
        this.model = model;
      });
  }
}
