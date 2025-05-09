import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const {user,setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })

    // console.log(userData)

    //console.log("Email:", email)
    //console.log("Password:", password)
    // console.log("User Data:", userData)

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, {email, password});

      console.log("Response:", response.data)
      // console.log("Status:", response.status)

      if (response.status === 200) {
        const data = response.data
        localStorage.setItem('token', data.token)
        setUser(data.user)
        navigate('/home')
      }
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        console.error("Network error:", error); // For debugging purposes
        // Show a user-friendly error message to the user
        alert("Connection error. Please check your internet connection or try again later.");
      } else {
        console.error("Error logging in:", error); // Detailed error for debugging
        // Show a generic error message to the user
        alert("An error occurred. Please try again.");
      }
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
      <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

      <form onSubmit={
        (e) => {
          submitHandler(e)
        }
      } >
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
          type="email"
          placeholder='email@example.com'
        />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
          required type="password"
          placeholder='password'
        />

        <button
          className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Login</button>

      </form>
      <p className='text-center'>New here? <Link to='/register' className='text-blue-600'>Create new Account</Link></p>
    </div>
    <div>
      <Link
        to='/captain-login'
        className='bg-[#000000] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
      >Sign in as Captain</Link>
    </div>
  </div>
  )
}

export default UserLogin