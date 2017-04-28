import { Component, OnInit } from '@angular/core';
import { Company } from 'app/company/company';

@Component({
  selector: 'ngsp-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies: Company [];
  constructor() { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies = [
      {id: -1, name: 'company 1', email: 'email 1', phone: 12345},
      {id: -2, name: 'company 2', email: 'email 2', phone: 22345}
    ];
  }

}
