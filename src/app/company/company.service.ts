import { Injectable } from '@angular/core';

@Injectable()
export class CompanyService {

  constructor() { }

  getCompanies() {
    return [
      {id: -1, name: 'company 1', email: 'email 1', phone: 12345},
      {id: -2, name: 'company 2', email: 'email 2', phone: 22345}
    ];
  }
}
