import {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import {useUIContext} from 'context/ui/UIContext';

export const Navbar: FC = () => {
    const {openSideMenu} = useUIContext();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton size="large" edge="start" onClick={openSideMenu}>
                    <MenuOutlinedIcon />
                </IconButton>

                <Typography variant="h6">OpenJira</Typography>
            </Toolbar>
        </AppBar>
    );
};
