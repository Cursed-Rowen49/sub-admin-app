import { styled, Box, Typography, Button } from '@mui/material';

export const MainContainer = styled(Box)({
  width: '100vw',
  margin: '0',
  padding: '0',
});

export const BoxCard = styled(Box)({
  maxWidth: '436px',
  height: '436px',
  backgroundColor: '#fff',
  margin: '108px auto',
  borderRadius: '6px',
  // boxShadow: '6',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '2px 2px 12px 3px #00000033',
});
export const CardImage = styled(Box)({
  width: '92px',
  height: '36px',
});

export const LoginBoxContent = styled(Box)({});

export const LoginHeader = styled(Typography)({
  fontSize: '32px',
  fontFamily: 'system-ui',
  fontWeight: '700',
  marginTop: '18px',
  marginBottom: '12px',
  display: 'flex',
  justifyContent: 'center',
});

export const BoxSign = styled(Typography)({
  fontSize: '12px',
  fontWeight: '700',
  color: '#959595',
  marginBottom: '24px',
});

export const TextFieldBox = styled(Box)({
  textAlign: 'center',
});

export const LoginButton = styled(Button)({
  width: '90%',
  marginTop: '10px',
  marginBottom: '10px',
  fontFamily: 'system-ui',
  textTransform: 'capitalize',
  display: 'flex',
  alignItems: 'center',
  mt: 1,
  color: 'white',
  backgroundColor: '#2f3fad',
  '&:hover': {
    backgroundColor: '#4d5fd4',
  },
});
