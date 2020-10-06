import { response } from 'express';
import React, { useState } from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { axiosWithAuth } from '../api/axiosWithAuth';


const NewFriend = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    age: '',
  })

  const [newFriend, setNewFriend] = useState({})

  const handleChanges = e => {

    const newFormData = {
      ...formState,
      [e.target.name]: e.target.name === 'age' ? Number(e.target.value) : e.target.value
    }

    setFormState(newFormData)
    setNewFriend(newFormData)

  }

  const submitFriend = e => {

    e.preventDefault()

    axiosWithAuth()
      .post('/api/friends', newFriend)
      .then(response => {
        console.log('Post NewFriend Response: ', response)
      })
      .catch(error => console.log('Post NewFriend Error: ', error))

    setFormState({
      name: '',
      age: '',
      height: ''
    })

  }

  return (
    <div>
      <h2>New Friend</h2>
      <Form onSubmit={submitFriend}>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor='name' className='mr-sm-2'></Label>
          <input
            className='input'
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={formState.name}
            onChange={handleChanges}
          />
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor='email' className='mr-sm-2'></Label>
          <input
            className='input'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={formState.email}
            onChange={handleChanges}
          />
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor='age' className='mr-sm-2'></Label>
          <input
            className='input'
            type='number'
            name='age'
            id='age'
            placeholder='Age'
            value={formState.age}
            onChange={handleChanges}
          />
        </FormGroup>

        <Button type='submit' className='submit'>Submit</Button>

      </Form>
    </div>
  )
}

export default NewFriend
