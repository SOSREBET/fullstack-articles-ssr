import { type FC } from "react"
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"
import { routes } from "./Router"

interface IHeaderDrawer {
    isOpen: boolean
    toggleDrawer: () => void
}

const HeaderDrawer: FC<IHeaderDrawer> = ({ isOpen, toggleDrawer}) => {
    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {['Articles'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={routes.articles.path}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

    return (
        <Drawer 
            open={isOpen} 
            onClose={toggleDrawer} 
            keepMounted
            sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: '#242424',
                    color: 'white',
                }
            }}
        >
            {DrawerList}
        </Drawer>
    )
}

export default HeaderDrawer