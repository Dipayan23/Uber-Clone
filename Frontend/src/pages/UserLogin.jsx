import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <form>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' required type="email" placeholder='email@example.com' />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' required type="password" placeholder='password'/>
            <button  className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
        </form>
    </div>
  )
}

export default UserLogin