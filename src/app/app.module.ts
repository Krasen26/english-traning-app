import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { TensesComponent } from './tenses/tenses.component';
import { UploadComponent } from './upload/upload.component';
import { FilterTensePipe } from './pipes/filter-tense.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TensesComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FilterNamePipe,
    FilterTensePipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
