import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import App from "next/app";
import style from "../../styles/Navbar.module.css"
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "./Drawer";
import { useState } from "react";


export default function Navbar() {
 
  const [open, setOpen] = useState(true)
  return(
    <AppBar className={style.appBar}>
      <Toolbar>
        <Typography variant="h6" style={{flexGrow: 1, fontWeight: 700}}>Sayings By Hannan</Typography>
        <Box className={style.menu}>
            <Button color="inherit" className={style.menuItem}>
              <Link href='/'><a>Home</a></Link>
            </Button>
            <Button color="inherit" className={style.menuItem}>
              <Link href='/'><a>Contact</a></Link>
            </Button>
            <Button color="inherit" className={style.menuItem}>
              <Link href='/about'><a>About</a></Link>
            </Button>
        </Box>

        {/* === DRAWER === */}
        <Drawer />
      </Toolbar>
    </AppBar>
  )
};
