import React from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import TextField from '@mui/material/TextField'
import TextFieldProps from '@mui/material/TextField'

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { control, handleSubmit } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
          {...field}
          required
        />}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField 
          label="Password"
          type="password"
          {...field}
        />}
      />
      <input type="submit" />
    </form>
  )
}

export default LoginForm