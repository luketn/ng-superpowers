import { Component, OnInit } from '@angular/core';
import { Company } from 'app/company/company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'ngsp-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  providers: [CompanyService]
})
export class CompanyListComponent implements OnInit {
  companies: Company [];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies = this.companyService.getCompanies();
  }

}
