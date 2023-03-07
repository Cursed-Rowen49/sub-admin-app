import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { TextField } from '@mui/material';
import CustomizedSnackbars from '@/components/SnackBar/SnackBar';

import img from 'public/assert/images/ebotify-logo.webp';
import {
  BoxCard,
  LoginHeader,
  MainContainer,
  CardImage,
  LoginBoxContent,
  BoxSign,
  TextFieldBox,
  LoginButton,
} from './signin.style';
import Credentials from './DummyData';

export default function signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [snackbarPop, setSnackbarPop] = useState(false);
  const router = useRouter();

  const mainEmail = Credentials.email;
  const mainPassword = Credentials.password;
  const check = true;

  const regex =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const answer = email.match(regex);
  const isValidLen = password.trim().length < 6;

  // handleonClick Function
  const handleOnclick = () => {
    console.log('Email is : ' + email);
    console.log('Password is : ' + password);

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

    if (mainEmail === email && mainPassword === password) {
      router.push('/landingPage');
      const token = Math.random() * 10000;
      console.log(Math.floor(token));
    } else {
      console.log('Invalid credentials.');
      setTimeout(() => {
        setSnackbarPop(false);
      }, 3000);
      setSnackbarPop(true);
    }
  };

  // handleonchange Function
  const handleEmailOnChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);

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
      {snackbarPop ? <CustomizedSnackbars /> : ''}
      <MainContainer>
        <BoxCard>
          <CardImage>
            <Image src={img} alt="ebotify logo" width={92} height={36} />
          </CardImage>
          <LoginBoxContent>
            <LoginHeader>{heading}</LoginHeader>
            <BoxSign>{paragraph}</BoxSign>
          </LoginBoxContent>
          <TextFieldBox>
            <TextField
              label="Email Address"
              id="email"
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
              autoComplete="password"
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
          </TextFieldBox>
          <LoginButton fullWidth onClick={handleOnclick}>
            {heading}
          </LoginButton>
        </BoxCard>
      </MainContainer>
    </>
  );
}
