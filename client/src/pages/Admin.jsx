import React from 'react'
import LecturerNav from '../components/LecturerNav'
import LecturerList from '../components/LecturerList';
import Footer from '../components/Footer';

const Admin = () => {
  return (
    <div>
      <LecturerNav />
      <div className="flex flex-col items-center pt-14">
        <input
          className="px-4 py-2 rounded-md focus:outline-none focus:ring w-5/6 sm:w-3/6 ring-1 ring-black"
          type="text"
          placeholder="Search..."
        />
      </div>
      <LecturerList/>
      <Footer/>
    </div>
  );
}

export default Admin;