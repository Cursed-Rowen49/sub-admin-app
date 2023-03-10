import styled from '@emotion/styled';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';

export const MainContainer = styled(Box)({
  display: 'flex',
});

export const SidebarDrawerHeading = styled(Typography)({
  fontSize: '24px',
  fontWeight: '700',
  color: 'rgb(17,24,39)',
});

export const NavigationToolbar = styled(Toolbar)({
  backgroundColor: '#fff',
});

export const ListItems = styled(ListItem)({
  display: 'flex',
});

export const DrawerList = styled(List)({
  color: '#fff',
});

export const CloseIconButton = styled(IconButton)({
    color:'#fff'
})