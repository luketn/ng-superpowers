import { ActionReducer, Action } from '@ngrx/store';
import { Company } from '../models/company';
import * as company from '../actions/company';
import { CompanyState } from '../app.state';
import { Observable } from 'rxjs/Rx';

export function companiesReducer(state: CompanyState = { list: [], error: '' }, action: company.Actions) {
    switch (action.type) {
        case company.LOAD_COMPANIES_SUCCESS:
            return { list: action.payload, error: '' };
        case company.LOAD_COMPANIES_FAIL:
            return { list: [], error: action.payload };
        case company.REMOVE_COMPANY:
            // TODO: Implement remove as a real action against the server (for now this just removes an element locally)
            return { list: state.list.filter(company => company.id !== action.payload), error: '' };
        case company.ADD_COMPANY:
            // TODO: Implement add as a real action against the server (for now this just adds an element locally)
            let newId;
            if (state.list && state.list.length > 0) {
                const currentLargestId = Math.max(...state.list.map(company => company.id));
                newId = currentLargestId + 1;
            } else {
                newId = 1;
            }
            const companiesList: Company[] = state.list.concat({
                id: newId,
                name: 'Luke ' + newId,
                email: 'luke@' + newId + '.com',
                phone: newId
            });
            return { list: companiesList, error: '' };
        default:
            return state;
    }
};
