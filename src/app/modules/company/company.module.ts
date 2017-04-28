import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from 'app/modules/company/pages/company-list/company-list.component';
import { RouterModule } from '@angular/router';
import { routes } from 'app/modules/company/company.routes';
import { CompanyTableComponent } from 'app/modules/company/views/company-table/company-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanyTableComponent, CompanyListComponent]
})
export class CompanyModule { }
