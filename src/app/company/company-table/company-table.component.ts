import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'app/company/company';

@Component({
  selector: 'ngsp-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit {
  @Input() companies: Company[];
  constructor() { }

  ngOnInit() {
  }

}
