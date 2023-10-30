import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {

  return (
      <div className="p-32 mainBgColor">
        <div className="w-full h-screen flex items-start">
          <div className="relative w-1/2 h-full flex flex-col rounded-xl primaryBgColor">
            <div className="absolute top-[14%] left-[13%]">
              <h1 className="text-white font-semibold text-5xl">
                DON’T FORGET TO <br />
                COMPLETE YOUR <br />
                PROFILE
              </h1>
              <div className="flex pt-10 ">
                <div className="bg-white rounded-xl bg-opacity-40 w-16 h-16 flex items-center justify-center relative z-10">
                  <p className="text-white font-semibold text-3xl">1</p>
                </div>
                <p className="pl-5 text-white font-light text-3xl">
                  Use that email address and <br />
                  valid for account verification
                </p>
              </div>
              <div className="flex pt-6 ">
                <div className="bg-white rounded-xl bg-opacity-40 w-16 h-16 flex items-center justify-center relative z-10">
                  <p className="text-white font-semibold text-3xl">2</p>
                </div>
                <p className="pt-3 pl-5 text-white font-light text-3xl">
                  Complete the registration form
                </p>
              </div>
              <div className="flex pt-6 ">
                <div className="bg-white rounded-xl bg-opacity-40 w-16 h-16 flex items-center justify-center relative z-10">
                  <p className="text-white font-semibold text-3xl">3</p>
                </div>
                <p className="pl-5 text-white font-light text-3xl">
                  Congratulations on becoming a <br />
                  DosenKu member
                </p>
              </div>
              <button className="w-full text-white py-3 px-4 mt-12 rounded-md ring-1 ring-black secondaryBgColor">
                <Link to={'/signup'}>Make new account</Link>
              </button>
            </div>
          </div>

          <div className="w-1/2 h-full flex flex-col p-20 pt-60 bg-white rounded-xl">
            <h1 className="font-semibold text-5xl place-self-center pb-10">Login</h1>
            <form className="w-full flex flex-col px-12 pt-3" action="">
              <label className='font-semibold pb-1 pt-4' htmlFor="">Email</label>
              <input type="text" placeholder='Email' className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black" />
              <label className='font-semibold pb-1 pt-4' htmlFor="">Password</label>
              <input type="text" placeholder='Password' className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black" />
              <button className="font-semibold py-3 px-4 mt-8 rounded-md ring-1 ring-black primaryBgColor">
                Login
              </button>
              <h1 className="font-semibold place-self-center pt-6"><span className='primaryColor'> <Link to={'/resetpassword'}>Forgot Password?</Link></span> </h1>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login