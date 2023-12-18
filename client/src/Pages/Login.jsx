import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = async(e) => {
    console.log('Submit success?')
    e.preventDefault();
    let result = await fetch('http://localhost:5000/users/login', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {'Content-Type': 'application/json'}
    })
    result = await result.json()
    console.log(result)
    if(result){
      console.log('Data saved successfully')
      setForm({username: '', email: '', password: ''})
    }
  }
  return (
    <form id="register-form" method="post" action="/users/login">
      <h1><strong>Login</strong></h1>

      {/* User Login */}
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email-input" className="credential-field" value={form.email} onChange={(e) => setForm({ email: e.target.value })} placeholder='Enter Email' />

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password-input" className="credential-field" value={form.password} onChange={(e) => setForm({ password: e.target.value })} placeholder='Enter Password' />

      {/* Submit and Redirect */}
      <button type="submit" className="submit-btn" onClick={handleSubmit}>Login</button>
      <p><Link to = '/register'>Dont have an account? Register here!</Link></p>
    </form>
  )
}

export default Login