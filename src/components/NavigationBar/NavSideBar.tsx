import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ResponsiveCard from '../GridItem/gridItem';
import Data from '@/ApiData/ThreeData';
import AddCardIcon from '@mui/icons-material/AddCard';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import image from 'public/assert/images/sidebar-logo.webp';

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import { ListContainer, ThemeButton } from './NavSideBar.style';
import themeContext from '../AppContext';
import AppContext from '../AppContext';

type Anchor = 'left';

export default function NavigationBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  //Adding useContext.
  const context = useContext(AppContext);
  const theme = context.mode.theme;
  const color = context.mode.color;
  const bgcolor = context.mode.bgColor;
  const btnbgcolor = context.mode.btnBgColor;

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleTheme = () => {
    if (theme === 'light') {
      context.setMode({
        theme: 'dark',
        color: 'rgb(17,24,39)',
        bgColor: '#f8f8f8',
      });
    } else {
      context.setMode({
        theme: 'light',
        color: '#f8f8f8',
        bgColor: 'rgb(17,24,39)',
      });
    }
  };

  const list = (anchor: Anchor) => (
    <Box sx={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Box>
        <ListContainer
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <Image
            src={image}
            alt="ebotify logo"
            width={150}
            height={50}
            title="ebotify logo"
          />
          <List>
            {[
              'Inbox',
              'Starred',
              'Send email',
              'Drafts',
              'Inbox',
              'Starred',
              'Send email',
              'Drafts',
              'Inbox',
              'Starred',
              'Send email',
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <AddCardIcon sx={{ color: '#fff' }} />
                    ) : (
                      <AdbIcon sx={{ color: '#fff' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <AddCardIcon sx={{ color: '#fff' }} />
                    ) : (
                      <AdbIcon sx={{ color: '#fff' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </ListContainer>
      </Box>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            width: '100vw',
            backgroundColor: `${bgcolor}`,
            color: `${color}`,
          }}
        >
          <Toolbar>
            <div>
              {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    onClick={toggleDrawer(anchor, true)}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sub Admin App
            </Typography>
            <ThemeButton onClick={handleTheme}>
              {context.mode.theme}
            </ThemeButton>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <ResponsiveCard dataFromApi={Data} />
    </>
  );
}
