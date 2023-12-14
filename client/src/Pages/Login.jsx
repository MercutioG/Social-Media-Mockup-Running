import React from 'react'

const Login = () => {
  return (
    <form id="register-form" method="post" action="/auth/login">
			<h1><strong>Login</strong></h1>

      {/* User Login */}
			<label htmlFor="email">Email: </label>
      <input type="email" name="email" class="credential-field"/>

			<label htmlFor="password">Password: </label>
      <input type="password" name="password" class="credential-field"/>

      {/* Submit and Redirect */}
			<button type="submit" class="submit-btn">Login</button>
			<a href="/auth/register">Dont have an account? Register here!</a>
		</form>
  )
}

export default Login