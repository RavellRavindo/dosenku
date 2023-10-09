import React from 'react'
import { Link } from 'react-router-dom'

export const ResetPassword = () => {

  return (
        <div className="w-full h-screen px-80 py-32 mainBgColor">
          <div className="w-full h-full rounded-xl items-center justify-center flex flex-col secondaryBgColor">
            <div className="mb-16 w-1/2">
              <div className="text-center">
                <h1 className="text-white font-semibold text-5xl">
                  Reset Password
                </h1>
                <p className="text-white font-light mb-12 mt-2 text-lg">Enter your email below to receive reset link</p>
              </div>
              {/* <label className='font-semibold text-white text-left' htmlFor="">Email</label> */}
              <input type="text" placeholder='Email' className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black mt-2" />
              <button className="w-full text-white py-3 px-4 mt-6 rounded-md ring-1 ring-black primaryBgColor">
                <Link to={'/resetconfirmation'}>Reset Password</Link>
              </button>
            </div>
          </div>
        </div>
  )
}

export default ResetPassword