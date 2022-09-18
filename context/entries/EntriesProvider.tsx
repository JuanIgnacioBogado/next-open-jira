import {FC, PropsWithChildren, useMemo, useReducer} from 'react';
import {EntriesContext, entriesReducer} from './';
import {Entry, EntryStatus} from 'interfaces';

import {v4} from 'uuid';

export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: v4(),
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: v4(),
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            _id: v4(),
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            status: 'finished',
            createdAt: Date.now() - 100000
        }
    ]
};

export const EntriesProvider: FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const entriesByStatus = (status: EntryStatus) =>
        useMemo(
            () => state.entries.filter(entry => entry.status === status),
            [state.entries]
        );

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: v4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        };

        dispatch({type: '[Entry] Add-Entry', payload: newEntry});
    };

    const updateEntry = (entry: Entry) => {
        console.log('entry', entry);
        dispatch({type: '[Entry] Entry-Updated', payload: entry});
    }

    return (
        <EntriesContext.Provider
            value={{
                ...state,
                entriesByStatus,
                addNewEntry,
                updateEntry
            }}
        >
            {children}
        </EntriesContext.Provider>
    );
};
