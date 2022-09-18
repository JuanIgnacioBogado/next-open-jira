import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import {useEntriesContext} from 'context/entries';
import {useUIContext} from 'context/ui';

export const NewEntry = () => {
    const {addNewEntry} = useEntriesContext();
    const {isAddingEntry, setIsAddingEntry} = useUIContext();
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onSave = () => {
        if (!inputValue.trim()) return;

        addNewEntry(inputValue);
        setInputValue('');
        setIsAddingEntry(false);
        setTouched(false);
    }

    return (
        <Box mb={2} px={1}>
            {!isAddingEntry ? (
                <Button
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    fullWidth
                    variant="outlined"
                    onClick={() => setIsAddingEntry(true)}
                >
                    Agregar tarea
                </Button>
            ) : (
                <>
                    <TextField
                        fullWidth
                        sx={{mt: 2, mb: 1}}
                        autoFocus
                        multiline
                        placeholder="Nueva entrada"
                        label="Nueva entrada"
                        helperText={!inputValue.trim() && touched && 'Ingrese un valor'}
                        error={!inputValue.trim() && touched}
                        value={inputValue}
                        onBlur={() => setTouched(true)}
                        onChange={({target: {value}}) => setInputValue(value)}
                    />

                    <Box display="flex" justifyContent="space-between">
                        <Button
                            variant="outlined"
                            endIcon={<CancelOutlinedIcon />}
                            onClick={() => setIsAddingEntry(false)}
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<SaveOutlinedIcon />}
                            onClick={onSave}
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};
