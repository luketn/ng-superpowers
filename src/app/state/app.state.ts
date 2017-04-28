import { Company } from './models/company';
import { Observable } from 'rxjs/Observable';

export interface CompanyState {
    list: Company[];
    error: string;
}

export interface AppState {
    companies: CompanyState;
}
