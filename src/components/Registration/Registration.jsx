import React, { useState } from 'react'

function Registration() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    phone: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(form)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='username'
        type="text"
        placeholder='Username'
        value={form.name}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name='password'
        type="password"
        placeholder='Password'
        value={form.password}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name='email'
        type="email"
        placeholder='Email'
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name='phone'
        type="text"
        placeholder='Phone number'
        value={form.phone}
        onChange={handleChange}
      />
      <br />
      <br />

      <button type='submit'>Ro'yxatdan o'tish</button>
    </form>
  )
}

export default Registration