import React from 'react'
import {useParams} from 'react-router-dom'

function Login() {
    const params = useParams()
    console.log(params);
  return (
    <div>
        Login
    </div>
  )
}

export default Login