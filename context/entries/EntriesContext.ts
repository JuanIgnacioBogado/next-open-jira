import {createContext, useContext} from 'react';
import {Entry, EntryStatus} from 'interfaces';

interface ContextProps {
    entries: Entry[];
    entriesByStatus: (status: EntryStatus) => Entry[];
    addNewEntry: (description: string) => void;
    updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);

export const useEntriesContext = () => useContext(EntriesContext);
