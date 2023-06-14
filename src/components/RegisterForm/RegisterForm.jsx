import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import css from '../LoginForm/LoginForm.module.css'
  
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
          <h2 className={css.title} >Registration</h2>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className={css.wrap}>
          <TextField required id="outlined" name="name" label="Name" />
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
          <button className={css.button} type="submit">Register</button>
        </div>
      </Box>
    </>
  );
};

export default RegisterForm;