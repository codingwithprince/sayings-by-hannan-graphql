import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import style from '../../styles/Navbar.module.css'
import { useState } from 'react';
import { Home, Settings } from '@mui/icons-material';
import Link from 'next/link'

export default function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return(
        <>
            <Drawer anchor="right"  open={openDrawer} onClose={()=> setOpenDrawer(false)}>
                <List onClick={()=> setOpenDrawer(false)}>
                    <ListItem >
                        <Link href='/'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/about'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton className={style.menuBtn} onClick={()=> {setOpenDrawer(true)}}>
               <MenuIcon style={{color: 'white'}}/>
            </IconButton>
        </>
    )
};
