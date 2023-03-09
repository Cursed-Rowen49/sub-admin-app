import { Box, Paper, styled } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const CardContainer = styled(Box)({
  minWidth: 264,
  height: 230,
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export const CardImage = styled(Box)({
  width: '140px',
  height: '100px',
});
