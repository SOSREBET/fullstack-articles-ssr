import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '../assets/icons/menu_icon.svg?react'
import HeaderDrawer from './HeaderDrawer';

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <HeaderDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color='info'>
                <Toolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        <Button color="inherit" component={Link} to={'/'}>Articles</Button>
                    </Typography>

                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}

export default Header