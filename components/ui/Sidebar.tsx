import {FC} from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import {useUIContext} from 'context/ui/UIContext';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar: FC = () => {
    const {sideMenuOpen, closeSideMenu} = useUIContext();

    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={sideMenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{width: 250}}>
                <Box sx={{padding: '8px 16px'}}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {menuItems.map((text, idx) => (
                        <ListItemButton key={text}>
                            <ListItemIcon>
                                {idx % 2 ? (
                                    <InboxOutlinedIcon />
                                ) : (
                                    <MailOutlineOutlinedIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText>{text}</ListItemText>
                        </ListItemButton>
                    ))}
                </List>

                <Divider />

                <List>
                    {menuItems.map((text, idx) => (
                        <ListItemButton key={text}>
                            <ListItemIcon>
                                {idx % 2 ? (
                                    <InboxOutlinedIcon />
                                ) : (
                                    <MailOutlineOutlinedIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText>{text}</ListItemText>
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
