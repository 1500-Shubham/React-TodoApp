import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Login</button>
          <h4>OR</h4>
          <Link to="/register">SignUp</Link>
        </form>
      </section>
    </div>
  )
}
