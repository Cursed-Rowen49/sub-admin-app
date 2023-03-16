import React, { useState } from 'react';
import Image from 'next/image';
import SigninController from './signin.controller';

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

export default function signin() {
  const { getters, handlers } = SigninController();

  const {
    email,
    password,
    isPasswordEmpty,
    isEmailEmpty,
    isEmailValid,
    isPasswordValid,
    snackbarPop,
  } = getters;

  const { handleOnclick, handleEmailOnChange, handlePassOnChange } = handlers;

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
