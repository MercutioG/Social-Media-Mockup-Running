import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: ''})
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    console.log('Submit success?')
    e.preventDefault();
    let result = await fetch('http://localhost:5000/users/register', {
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
    navigate('/')

  }
  return (
    <form id="register-form" method="post" action="/users/register">
      <h1><strong>Register An Account</strong></h1>

      {/* User Registration */}
      <label htmlFor="username">Username: </label>
      <input 
        type="text"
        name="name"
        value={form.username}
        onChange={(e) => setForm({ username: e.target.value })}
        placeholder='Create Username'
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={(e) => setForm({ email: e.target.value })}
        placeholder='Enter Email'
      />

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={(e) => setForm({ password: e.target.value })}
        placeholder='Create Password'
      />

      {/* Submit and Redirect */}
      <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>

      <p><Link to = '/login'>Already have an account? Log in here!</Link></p>
    </form>
  )
}

export default Register