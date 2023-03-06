import React, { useState } from 'react';
import { BoxSx, TypographyHeading, ButtonSx } from './signin.style';
import Image from 'next/image';
import { Typography, Box, TextField } from '@mui/material';

export default function signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // handleonClick Function
  const handleOnclick = () => {
    console.log('Email is : ' + email);
    console.log('Password is : ' + password);
    const regex =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const answer = email.match(regex);
    const isValidLen = password.trim().length < 6;

    if (email.trim() === '') {
      setIsEmailEmpty(true);
    }
    if (answer) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
    // password onClickFunction
    if (password.trim() === '') {
      setIsPasswordEmpty(true);
    }
    if (isValidLen) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  // handleonchange Function
  const handleEmailOnChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
    const regex =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const answer = email.match(regex);

    if (email === '') {
      setIsEmailEmpty(false);
    } else {
      if (answer) {
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
    }
  };

  const handlePassOnChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
    const isValidLen = password.trim().length < 6;

    if (password.trim() === '') {
      setIsPasswordEmpty(false);
    }
    if (isValidLen) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

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
          <TypographyHeading variant="h1">{heading}</TypographyHeading>
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
          <Box>
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <TextField
                label="Email Address"
                id="outlined-size-small"
                size="small"
                sx={{
                  width: '90% !important',
                  margin: '10px auto',
                }}
                value={email}
                onChange={handleEmailOnChange}
                error={isEmailEmpty || isEmailValid}
                helperText={
                  isEmailEmpty
                    ? 'This Field is Required'
                    : isEmailValid
                    ? 'Email should be in example@gmail.com'
                    : ''
                }
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                size="small"
                sx={{
                  width: '90% !important',
                  margin: '10px auto',
                }}
                value={password}
                onChange={handlePassOnChange}
                error={isPasswordEmpty || isPasswordValid}
                helperText={
                  isPasswordEmpty
                    ? 'This Field is Required'
                    : isPasswordValid
                    ? 'atleast 6 Character needed.(NoSpaces)'
                    : ''
                }
              />
            </Box>
          </Box>
          <ButtonSx fullWidth onClick={handleOnclick}>
            Log In
          </ButtonSx>
        </BoxSx>
      </Box>
    </>
  );
}
