import React from 'react'
// import './auth.css'

export const Login = () => {

  const colorBox = {
    backgroundColor: '#FFCC70',
  };

  const mainBgColor = {
    backgroundColor: '#F8F8F8'
  };

  return (
      <div className="p-32" style={mainBgColor}>
        <div className="w-full h-screen flex items-start">
          <div className="relative w-1/2 h-full flex flex-col rounded-xl" style={colorBox}>
            <div className="absolute top-[14%] left-[15%]">
              <h1 className="text-white font-semibold text-5xl">
                FOLLOW THESE <br />
                STEPS TO GET <br />
                VERIFIED
              </h1>
              <div className="flex pt-10 ">
                <div className="bg-white rounded-xl bg-opacity-40 w-16 h-16 flex items-center justify-center relative z-10">
                  <p className="text-white font-semibold text-3xl">1</p>
                </div>
                <p className="pl-5 text-white font-light text-3xl">
                  Use a valid academic address and <br />
                  contactable phone number
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
                  We’ll email you back once your account <br />
                  is verified shortly
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 h-full flex flex-col p-20 bg-white rounded-xl">
            <h1 className="font-semibold text-5xl place-self-center pb-10">Create an Account</h1>
            <div className="w-full flex flex-col px-12 pt-5">
              <label className='font-semibold pb-1' htmlFor="">Fullname</label>
              <input type="text" placeholder='name' className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-black" />
            </div>
            <div className="w-full flex flex-col px-12 pt-4">
              <label className='font-semibold pb-1' htmlFor="">Email</label>
              <input type="text" placeholder='name' className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-black" />
            </div>
            <div className="w-full flex flex-col px-12 pt-4">
              <label className='font-semibold pb-1' htmlFor="">Phone Number</label>
              <input type="text" placeholder='name' className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-black" />
            </div>
            <div className="w-full flex flex-col px-12 pt-4">
              <label className='font-semibold pb-1' htmlFor="">School/Universities</label>
              <input type="text" placeholder='name' className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-black" />
            </div>
            <div className="w-full flex flex-col px-12 pt-4">
              <label className='font-semibold pb-1' htmlFor="">Password</label>
              <input type="text" placeholder='name' className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-black" />
            </div>
            <div className="w-full flex flex-col px-12 pt-4">
              <label className='font-semibold pb-1' htmlFor="">Confirm Password</label>
              <input type="text" placeholder='name' className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-black" />
            </div>
          </div>

        </div>
      </div>
  )
}

export default Login