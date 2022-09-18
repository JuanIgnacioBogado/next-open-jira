import {EntriesState} from './';
import {Entry} from 'interfaces';

type EntriesActionType =
| {type: '[Entry] Add-Entry', payload: Entry}
| {type: '[Entry] Entry-Updated', payload: Entry}

export const entriesReducer = (state: EntriesState, {type, payload}: EntriesActionType): EntriesState => {
    switch (type) {
        case '[Entry] Add-Entry':
            return {
                ...state,
                entries: [...state.entries, payload]
            };

        case '[Entry] Entry-Updated':
            return {
                ...state,
                entries: state.entries.map(entry => entry._id === payload._id ? payload : entry)
            };

        default:
            return state;
    }
};
