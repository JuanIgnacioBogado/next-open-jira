import {DragEvent, FC} from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';

import {EntryCard} from 'components/ui';
import {EntryStatus} from 'interfaces';
import {useEntriesContext} from 'context/entries';
import {useUIContext} from 'context/ui';

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({status}) => {
    const {entries, entriesByStatus, updateEntry} = useEntriesContext();
    const {isDragging, endDragging} = useUIContext();

    const allowDrop = (e: DragEvent<HTMLDivElement>) => e.preventDefault();

    const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
        const id = e.dataTransfer.getData('text');
        const entry = entries.find(e => e._id === id)!;
        entry.status = status;
        updateEntry(entry);
        endDragging();
    };

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper
                sx={{
                    height: 'calc(100vh - 165px)',
                    overflowY: 'auto',
                    backgroundColor: 'transparent'
                }}
            >
                <List
                    sx={{
                        p: 0,
                        opacity: isDragging ? 0.2 : 1,
                        transition: 'all 0.3s'
                    }}
                >
                    {entriesByStatus(status).map(entry => (
                        <EntryCard key={entry._id} {...entry} />
                    ))}
                </List>
            </Paper>
        </div>
    );
};
