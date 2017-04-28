import { ActionReducer, Action } from '@ngrx/store';
import { Company } from '../models/company';
import * as company from '../actions/company';
import { CompanyState } from '../app.state';

export function companiesReducer(state: CompanyState = {list: [], error: ''}, action: company.Actions) {
    switch (action.type) {
        case company.LOAD_COMPANIES_SUCCESS:
            return {list: action.payload, error: ''};
        case company.LOAD_COMPANIES_FAIL:
            return {list: [], error: action.payload};
        case company.REMOVE_COMPANY:
            // TODO: Implement remove + add + edit as real actions against the server (for now this just removes an element from the array client-side)
            return {list: state.list.filter(company => company.id !== action.payload), error: ''};
        default:
            return state;
    }
};
