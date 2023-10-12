import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
<<<<<<< Updated upstream
=======
  const [fullname,    setFullname]    = React.useState('');
  const [email,       setEmail]       = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [school,      setSchool]      = React.useState('');
  const [password,    setPassword]    = React.useState('');

  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = async (event) => {
    if (password !== confirmPassword) {
      alert('password doesnt match');
    }
    else {
      try {
        await axios.post(process.env.API_URL + '/register', { fullname, email, phoneNumber, school, password });
        alert('register success');
      }
      catch (err) {
        console.error(err);
      }
    }
    event.preventDefault();
  }

>>>>>>> Stashed changes
  return (
    <div className="p-32 mainBgColor">
      <div className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col rounded-xl primaryBgColor">
          <div className="absolute top-[14%] left-[13%]">
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

<<<<<<< Updated upstream
        <div className="w-1/2 h-full flex flex-col p-20 bg-white rounded-xl">
          <h1 className="font-semibold text-5xl place-self-center pb-10">
            Create an Account
          </h1>
          <form className="w-full flex flex-col px-12 pt-3" action="">
            <label className="font-semibold pb-1" htmlFor="">
              Fullname
            </label>
            <input
              type="text"
              placeholder="Fullname"
              className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
            />
            <label className="font-semibold pb-1 pt-4" htmlFor="">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
            />
            <label className="font-semibold pb-1 pt-4" htmlFor="">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+62"
              className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
            />
            <label className="font-semibold pb-1 pt-4" htmlFor="">
              School/Universities
            </label>
            <input
              type="text"
              placeholder="Universities..."
              className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
            />
            <label className="font-semibold pb-1 pt-4" htmlFor="">
              Password
            </label>
            <input
              type="text"
              placeholder="Password"
              className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
            />
            <label className="font-semibold pb-1 pt-4" htmlFor="">
              Confirm Password
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
            />
            <button className="font-semibold py-3 px-4 mt-8 rounded-md ring-1 ring-black primaryBgColor">
              Register
            </button>
            <h1 className="font-semibold place-self-center pt-6">
              Already have an account?{" "}
              <span className="primaryColor">
                <Link to={"/login"}>Sign in</Link>
              </span>{" "}
            </h1>
          </form>
        </div>
=======
      <div className="w-1/2 h-full flex flex-col p-20 bg-white rounded-xl">
        <h1 className="font-semibold text-5xl place-self-center pb-10">Create an Account</h1>
        <form className="w-full flex flex-col px-12 pt-3" onSubmit={handleSubmit}>
          <label className='font-semibold pb-1' htmlFor="">Fullname</label>
          <input className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
              type="text"
              placeholder='Fullname'
              value={fullname}
              onChange={(event) => setFullname(event.target.value)} />

          <label className='font-semibold pb-1 pt-4' htmlFor="">Email</label>
          <input className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
              type="text"
              placeholder='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)} />

          <label className='font-semibold pb-1 pt-4' htmlFor="">Phone Number</label>
          <input className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
              type="text"
              placeholder='+62'
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)} />

          <label className='font-semibold pb-1 pt-4' htmlFor="">School/Universities</label>
          <input className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
              type="text"
              placeholder='Universities...'
              value={school}
              onChange={(event) => setSchool(event.target.value)} />

          <label className='font-semibold pb-1 pt-4' htmlFor="">Password</label>
          <input className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
              type="password"
              placeholder='Password'
              value={password}
              onChange={(event) => setPasssword(event.target.value)} />

          <label className='font-semibold pb-1 pt-4' htmlFor="">Confirm Password</label>
          <input className="block w-full rounded-md border-0 py-3 pl-4 pr-10 ring-1 ring-black"
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(event) => setConfirmPasssword(event.target.value)} />

          <button className="font-semibold py-3 px-4 mt-8 rounded-md ring-1 ring-black primaryBgColor">
            Register
          </button>

          <h1 className="font-semibold place-self-center pt-6">Already have an account? <span className="primaryColor"><Link to={'/login'}>Sign in</Link></span> </h1>

        </form>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};
