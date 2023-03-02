import * as React from 'react';
import { BoxSx, TypographySx, ButtonSx, CustomTextField } from './signin.style';
import Image from 'next/image';
import { Typography, Box, FormControl } from '@mui/material';

export default function signin() {
  const paragraph: string = 'Sign in on the Internal Platform';
  const heading: string = 'Log in';

  return (
    <>
      <Box>
        <BoxSx>
          <Image
            src="/ebotify-logo.webp"
            alt="ebotify logo"
            width={92}
            height={36}
          />
          <TypographySx variant="h1">{heading}</TypographySx>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#959595',
              marginBottom: '24px',
            }}
          >
            {paragraph}
          </Typography>

          <Box component="form" noValidate autoComplete="off">
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <CustomTextField
                label="Email Address"
                id="outlined-size-small"
                size="small"
                required
              />
              <CustomTextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                size="small"
                required
              />
            </Box>
          </Box>
          <ButtonSx
            type="submit"
            fullWidth
            sx={{
              mt: 1,
              backgroundColor: 'blue',
              '&:hover': {
                backgroundColor: 'blue',
              },
            }}
          >
            Log In
          </ButtonSx>
        </BoxSx>
      </Box>
    </>
  );
}
