import { styled, Box, Button } from '@mui/material';

export const ListContainer = styled(Box)({
  width: 250,
  paddingTop: '20px',
  color: '#fff',
  backgroundColor: 'rgb(17,24,39)',
  textAlign: 'center',
  margin: '0px auto',
  minHeight: '100vh',
});

export const ThemeButton = styled(Button)({
  backgroundColor: 'rgb(17,24,19)',
  color: '#fff',
  margin: '0 10px',
  '&:hover': {
    backgroundColor: 'rgb(17,24,19)',
  },
});
