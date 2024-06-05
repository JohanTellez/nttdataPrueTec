import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';

const routes: Routes = [
  { path: '', component: DataEntryComponent },
  { path: 'summary', component: DataSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
