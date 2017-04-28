import { Component, OnInit } from '@angular/core';
import { Company } from 'app/company/company';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ngsp-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  providers: [CompanyService]
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  editCompany(companyId: number) {
    console.log('Edit ' + companyId);
  }

  deleteCompany(companyId: number) {
    console.log('Delete ' + companyId);
  }

}
