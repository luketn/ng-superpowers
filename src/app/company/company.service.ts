import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Company } from 'app/company/company';

@Injectable()
export class CompanyService {

  constructor(private http: Http) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get('http://firebootcamp-crm-api.azurewebsites.net/api/company')
                    .map(response => response.json())
        ;
  }
}

