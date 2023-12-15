import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  function updateForm(value) {
    return setForm((prev) => {
      return {...prev, ...value};
    })
  }
  async function fetchFunction(e) {
    e.preventDefault()
    const update = {...form}
    const getData = await fetch("http://localhost:5000/docs", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			credentials: "include"
		})
  }
  return (
    <form id="register-form" method="post" onSubmit={fetchFunction}>
      <h1><strong>Login</strong></h1>

      {/* User Login */}
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email-input" className="credential-field" value={form.email} onChange={(e) => updateForm({ email: e.target.value })} placeholder='Enter Email' />

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password-input" className="credential-field" value={form.password} onChange={(e) => updateForm({ password: e.target.value })} placeholder='Enter Password' />

      {/* Submit and Redirect */}
      <button type="submit" className="submit-btn">Login</button>
      <p><Link to = '/register'>Dont have an account? Register here!</Link></p>
    </form>
  )
}

export default Login