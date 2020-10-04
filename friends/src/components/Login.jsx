import React, { useState } from 'react'
import { axiosWithAuth } from '../api/axiosWithAuth';
import { useForm } from 'react-hook-form'
import { Button, Form, FormGroup, Label } from 'reactstrap';

const Login = props => {

  const [formState, setFormState] = useState({
    username: '',
    password: ''
  })

  const { register, handleSubmit, watch, errors } = useForm();


  // console.log('username: ', watch("username"))
  // console.log('Password: ', watch("password"))

  const submitLogin = data => {


    console.log('Creds: ', data)

    axiosWithAuth()
      .post('/login', { data })

      .then(response => {
        console.log('login with auth response: ', response)
        localStorage.setItem('token', response.data.payload)
        props.history.push('/protected')
        setFormState({
          username: '',
          password: ''
        })
      })

      .catch(error => {
        if (error.response) {
          console.error('login with auth response from server: ', error.response.data)
        }
        else {
          console.error('login error: ', error)
        }
      })



  }

  return (
    <div>
      <h2>User Login</h2>
      <Form onSubmit={handleSubmit(submitLogin)}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor='username' className='mr-sm-2'></Label>
          <input
            className='input'
            type='text'
            name='username'
            id='username'
            placeholder='Username'
            ref={register({ required: true })}
          />
          {errors.username && <p className='error'>Username is required</p>}
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor='password' className='mb-2 mr-sm-2 mb-sm-0'></Label>
          <input
            className='input'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            ref={register({ required: true })}
          />
          {errors.password && <p className='error'>password is required</p>}
        </FormGroup>

        <Button type='submit' className='submit'>Submit</Button>
      </Form>

    </div>


  )
}

export default Login
