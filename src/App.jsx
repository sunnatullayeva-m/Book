import Login from "./components/Login/Login";
import logins from "./components/data/LoginData/LoginData.js";
import './components/Login/Login.module.scss'

import Logins from "./components/Logins/Logins.jsx";
import logines from "./components/data/LoginData/LoginData.js";
import './components/Logins/Logins.module.scss'

import x from './assets/x.svg'
import book from './assets/book.svg'
import { useState } from 'react'
import './App.css'


function App() {

  const [show, setShow] = useState(false)

  const [form, setForm] = useState({
    name: '',
    author: '',
    img: '',
    descdescription: ''
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
    <div>


      {show && (


        <form onSubmit={handleSubmit} >

          <div className="module">

            <button onClick={() => setShow(false)} className='x' >

              <img src={x} alt="" />

            </button>



            <div className="inputs">

              <input
                name="name"
                className="input"
                type="text"
                placeholder="  name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                name="author"
                className="input"
                type="text"
                placeholder="  author"
                value={form.author}
                onChange={handleChange}
              />

              <input name="img "
                className="input"
                type="text"
                placeholder="  img url"
                value={form.img}
                onChange={handleChange}
              />

              <input name="descdescription"
                className="input1"
                type="text"
                placeholder=" descdescription"
                value={form.descdescription}
                onChange={handleChange}
              />

              <button type="submit" className="add">Add Book</button>

            </div>

          </div>

        </form>


      )
      }




      <div className="header">

        <img className="book" src={book} alt="" />
        <button onClick={() => setShow(true)} className="btn" >Add Book</button>

      </div>

      <div className='perent'>

        <div>
          {logins.map((item, index) => (
            <Login
              key={index}
              image={item.image}
              title={item.title}
              dishes={item.dishes}
              notes={item.notes}
            />
          ))}
        </div>




        <div>
          {logines.map((item, index) => (
            <Logins
              key={index}
              image={item.image}
              title={item.title}
              dishes={item.dishes}
              notes={item.notes}
            />
          ))}
        </div>

      </div>


    </div >
  )
}

export default App;