import React from 'react'
import { Link } from 'react-router-dom'

export const Verify = () => {

  return (
        <div className="w-full h-screen px-64 py-32 mainBgColor">
          <div className="w-full h-full rounded-xl items-center justify-center flex flex-col bg-white">
            <h1 className="text-white font-semibold text-3xl primaryColor">
                We’ll send an email once your account gets verified
            </h1>
            <p className="text-white font-light mb-12 mt-2 text-lg secondaryColor"><Link to={'/'}>Click here to go back home page</Link></p>
          </div>
        </div>
  )
}

export default Verify