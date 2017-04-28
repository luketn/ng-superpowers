import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'app/state/models/company';

@Component({
  selector: 'ngsp-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit {
  @Input() companies: Company[];
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
