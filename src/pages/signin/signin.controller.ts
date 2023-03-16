import { useState } from 'react';
import { useRouter } from 'next/router';
import Credentials from '../../ApiData/DummyData';

interface ISigninController {
  getters: {
    email: string;
    password: string;
    isPasswordEmpty: boolean;
    isEmailEmpty: boolean;
    isEmailValid: boolean;
    isPasswordValid: boolean;
    snackbarPop: any;
    router: any;
  };
  handlers: {
    handleOnclick: any;
    handleEmailOnChange: any;
    handlePassOnChange: any;
  };
}

export function SigninController(): ISigninController {
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

    if (!(email === '') && !(password === '') && !isEmailValid) {
      if (mainEmail === email && mainPassword === password) {
        router.push('/landingPage');
      } else {
        console.log('Invalid credentials.');
        setTimeout(() => {
          setSnackbarPop(false);
        }, 2500);
        setSnackbarPop(true);
      }
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
    const isValidLen = password.trim().length <= 5;

    if (password.trim() === '') {
      setIsPasswordEmpty(false);
    }
    if (isValidLen) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  return {
    getters: {
      email,
      password,
      isPasswordEmpty,
      isEmailEmpty,
      isEmailValid,
      isPasswordValid,
      snackbarPop,
      router,
    },
    handlers: {
      handleOnclick,
      handleEmailOnChange,
      handlePassOnChange,
    },
  };
}

export default SigninController;
