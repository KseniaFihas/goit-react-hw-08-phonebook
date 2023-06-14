import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <h2 className={css.title}>Please input your login and password</h2>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
      >
              <div className={css.wrap} >
          <TextField
            required
            id="outlined-required"
            name="email"
            label="Email"
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            required
          />
          <button className={css.button} type="submit">Log In</button>
        </div>
      </Box>
    </>
  );
};


export default LoginForm;