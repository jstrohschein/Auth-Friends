import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../api/axiosWithAuth'



const Friends = props => {

  const [state, setState] = useState({
    friends: []
  })

  const getFriends = () => {

    axiosWithAuth()

      .get('/api/friends')

      .then(response => {
        console.log('Friends.js: axiosWithAuth: Friends: ', response)
        // setState({
        //   frien
        // })
      })

      .catch(error => console.log('Friends.js: axiosWithAuth Error: ', error))
  }

  useEffect(() => getFriends(), [])

  return (
    <div></div>
  )
}

export default Friends