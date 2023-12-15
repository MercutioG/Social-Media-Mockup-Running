import { useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form id="register-form" method="post" action="/auth/register">
      <h1><strong>Register An Account</strong></h1>

      {/* User Registration */}
      <label htmlFor="username">Username: </label>
      <input type="text" name="name" />

      <label htmlFor="email">Email: </label>
      <input type="email" name="email" />

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" />

      <label htmlFor="password2">Confirm Password: </label>
      <input type="password" name="password2" />

      {/* Submit and Redirect */}
      <button type="submit" class="submit-btn">Submit</button>

      <p><Link to = '/login'>Already have an account? Log in here!</Link></p>
    </form>
  )
}

export default Register