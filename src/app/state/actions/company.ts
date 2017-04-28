import { Action } from '@ngrx/store';
import { Company } from '../models/company';
import { Observable } from 'rxjs/Observable';

export const REMOVE_COMPANY = 'Remove Company';
export const LOAD_COMPANIES = 'Load Companies';
export const LOAD_COMPANIES_SUCCESS = 'Load Companies Success';
export const LOAD_COMPANIES_FAIL = 'Load Companies Fail';

export class LoadCompaniesAction implements Action {
  readonly type = LOAD_COMPANIES;
}
export class LoadCompaniesSuccessAction implements Action {
  readonly type = LOAD_COMPANIES_SUCCESS;
  constructor(public payload: Company[]) { }
}
export class LoadCompaniesFailAction implements Action {
  readonly type = LOAD_COMPANIES_FAIL;
  public payload: string;
  constructor(public error: string) { this.payload = error; }
}

export class RemoveCompanyAction implements Action {
  readonly type = REMOVE_COMPANY;
  payload: number;

  constructor(id: number) { this.payload = id; }
}

export type Actions = LoadCompaniesAction | LoadCompaniesSuccessAction | LoadCompaniesFailAction | RemoveCompanyAction;
