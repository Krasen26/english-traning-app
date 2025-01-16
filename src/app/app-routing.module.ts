import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TensesComponent } from './tenses/tenses.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tenses', component: TensesComponent },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
