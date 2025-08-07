import { useState, type FC } from 'react';
import { Link } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '../assets/icons/menu_icon.svg'
import HeaderDrawer from './HeaderDrawer';
import { routes } from './Router';

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
                <Toolbar sx={{justifyContent: { xs: 'space-between', sm: 'inherit '}}}>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                    >
                        <img src={MenuIcon} alt="menu icon" width={20} height={20}/>
                    </IconButton>
                    <Typography component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        <Button color="inherit" component={Link} to={routes.home.path}>Home</Button>
                        <Button color="inherit" component={Link} to={routes.articles.path}>Articles</Button>
                    </Typography>

                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}

export default Header