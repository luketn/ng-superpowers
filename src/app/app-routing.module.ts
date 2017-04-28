import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from 'app/company/company-list/company-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/companies', pathMatch: 'full'},
  {path: 'companies', component: CompanyListComponent},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
