import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from "app/company/company-list/company-list.component";

const routes: Routes = [
  {path: '', component: CompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
