import {
  styled,
  Box,
  TextField,
  Typography,
  Button,
  List,
} from '@mui/material';
import { style } from '@mui/system';

export const BoxSx = styled(Box)({
  maxWidth: '436px',
  height: '436px',
  backgroundColor: '#fff',
  margin: '108px auto',
  borderRadius: '6px',
  boxShadow: '6',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const TypographySx = styled(Typography)({
  fontSize: '32px',
  fontFamily: 'system-ui',
  fontWeight: '700',
  marginTop: '18px',
  marginBottom: '12px',
});

export const ButtonSx = styled(Button)({
  width: '90%',
  marginTop: '10px',
  marginBottom: '10px',
  backgroundColor: '#4958bd',
  fontFamily: 'system-ui',
  textTransform: 'capitalize',
  textAlign: 'center',
});

export const button = styled(Button)({
  maxWidth: '436px',
  height: '436px',
  backgroundColor: '#959595',
  borderRadius: '6px',
});

export const CustomTextField = styled(TextField)({
  width: '90% !important',
  margin: '10px auto',
  '&:hover': {},
});
