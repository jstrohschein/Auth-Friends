import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, FormGroup, Label } from 'reactstrap';


const NewFriend = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    age: null,
    id: null
  })

  const { register, handleSubmit, watch, errors } = useForm();

  const submitNewFriend = friend => {
    console.log('New Friend: ', friend)
  }

  return (
    <div>
      <h2>New Friend</h2>
      <Form onSubmit={handleSubmit(submitNewFriend)}>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor='name' className='mr-sm-2'></Label>
          <input
            className='input'
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            ref={register({ required: true })}
          />
          {errors.name && <p className='error'>Name is required</p>}
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor='email' className='mr-sm-2'></Label>
          <input
            className='input'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            ref={register({ required: true })}
          />
          {errors.email && <p className='error'>Email is required</p>}
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor='age' className='mr-sm-2'></Label>
          <input
            className='input'
            type='text'
            name='age'
            id='age'
            placeholder='Age'
            ref={register({ required: true })}
          />
          {errors.age && <p className='error'>Age is required</p>}
        </FormGroup>

        <Button type='submit' className='submit'>Submit</Button>

      </Form>
    </div>
  )
}

export default NewFriend
