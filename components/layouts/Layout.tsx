import {FC, ReactNode} from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';

import {Navbar, Sidebar} from 'components/ui';

interface Props {
    children: ReactNode;
    title?: string;
}

export const Layout: FC<Props> = ({children, title}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Head>
                <title>{title || 'OpenJira'}</title>
            </Head>

            <Navbar />
            <Sidebar />

            <Box sx={{padding: '10px 20px'}}>{children}</Box>
        </Box>
    );
};
