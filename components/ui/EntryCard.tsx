import {DragEvent, FC} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {Entry} from 'interfaces';
import {useUIContext} from 'context/ui';

export const EntryCard: FC<Entry> = ({_id, createdAt, description, status}) => {
    const {startDragging, endDragging} = useUIContext();

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', _id);
        startDragging();
    };

    const onDragEnd = () => endDragging();

    return (
        <Card sx={{m: 1}} draggable {...{onDragEnd, onDragStart}}>
            <CardActionArea>
                <CardContent>
                    <Typography whiteSpace="pre-line">
                        {status} - {description}
                    </Typography>
                </CardContent>

                <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Typography variant="body2">hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};
