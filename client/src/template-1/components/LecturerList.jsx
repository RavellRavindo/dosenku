import React, { useState } from "react";
import {BiLeftArrowAlt,BiRightArrowAlt} from 'react-icons/bi';

const LecturerList = () => {
  const lecturers = [
    {
      no: 1,
      name: "Prof. Idris Gautama So, S.E., S.Kom., M.M., Ph.D.",
      univ: "Binus University",
    },
    { no: 2, name: "Dosen 2", univ: "Binus University" },
    { no: 3, name: "Dosen 3", univ: "Binus University" },
    { no: 4, name: "Dosen 4", univ: "Binus University" },
    { no: 5, name: "Dosen 5", univ: "Binus University" },
    { no: 6, name: "Dosen 6", univ: "Binus University" },
    {
      no: 1,
      name: "Prof. Idris Gautama So, S.E., S.Kom., M.M., Ph.D.",
      univ: "Binus University",
    },
    { no: 2, name: "Dosen 2", univ: "Binus University" },
    { no: 3, name: "Dosen 3", univ: "Binus University" },
    { no: 4, name: "Dosen 4", univ: "Binus University" },
    { no: 5, name: "Dosen 5", univ: "Binus University" },
    { no: 6, name: "Dosen 6", univ: "Binus University" },
    {
      no: 1,
      name: "Prof. Idris Gautama So, S.E., S.Kom., M.M., Ph.D.",
      univ: "Binus University",
    },
    { no: 2, name: "Dosen 2", univ: "Binus University" },
    { no: 3, name: "Dosen 3", univ: "Binus University" },
    { no: 4, name: "Dosen 4", univ: "Binus University" },
    { no: 5, name: "Dosen 5", univ: "Binus University" },
    { no: 6, name: "Dosen 6", univ: "Binus University" },
    {
      no: 1,
      name: "Prof. Idris Gautama So, S.E., S.Kom., M.M., Ph.D.",
      univ: "Binus University",
    },
    { no: 2, name: "Dosen 2", univ: "Binus University" },
    { no: 3, name: "Dosen 3", univ: "Binus University" },
    { no: 4, name: "Dosen 4", univ: "Binus University" },
    { no: 5, name: "Dosen 5", univ: "Binus University" },
    { no: 6, name: "Dosen 6", univ: "Binus University" },
    {
      no: 1,
      name: "Prof. Idris Gautama So, S.E., S.Kom., M.M., Ph.D.",
      univ: "Binus University",
    },
    { no: 2, name: "Dosen 2", univ: "Binus University" },
    { no: 3, name: "Dosen 3", univ: "Binus University" },
    { no: 4, name: "Dosen 4", univ: "Binus University" },
    { no: 5, name: "Dosen 5", univ: "Binus University" },
    { no: 6, name: "Dosen 6", univ: "Binus University" },
    {
      no: 1,
      name: "Prof. Idris Gautama So, S.E., S.Kom., M.M., Ph.D.",
      univ: "Binus University",
    },
    { no: 2, name: "Dosen 2", univ: "Binus University" },
    { no: 3, name: "Dosen 3", univ: "Binus University" },
    { no: 4, name: "Dosen 4", univ: "Binus University" },
    { no: 5, name: "Dosen 5", univ: "Binus University" },
    { no: 6, name: "Dosen 6", univ: "Binus University" },
    {
      no: 1,
      name: "Prof. Idris Gautama So, S.E., S.Kom., M.M., Ph.D.",
      univ: "Binus University",
    },
    { no: 2, name: "Dosen 2", univ: "Binus University" },
    { no: 3, name: "Dosen 3", univ: "Binus University" },
    { no: 4, name: "Dosen 4", univ: "Binus University" },
    { no: 5, name: "Dosen 5", univ: "Binus University" },
    { no: 6, name: "Dosen 6", univ: "Binus University" },
    {
      no: 1,
      name: "Prof. Idris Gautama So, S.E., S.Kom., M.M., Ph.D.",
      univ: "Binus University",
    },
    { no: 2, name: "Dosen 2", univ: "Binus University" },
    { no: 3, name: "Dosen 3", univ: "Binus University" },
    { no: 4, name: "Dosen 4", univ: "Binus University" },
    { no: 5, name: "Dosen 5", univ: "Binus University" },
    { no: 6, name: "Dosen 6", univ: "Binus University" },
    {
      no: 1,
      name: "Prof. Idris Gautama So, S.E., S.Kom., M.M., Ph.D.",
      univ: "Binus University",
    },
    { no: 2, name: "Dosen 2", univ: "Binus University" },
    { no: 3, name: "Dosen 3", univ: "Binus University" },
    { no: 4, name: "Dosen 4", univ: "Binus University" },
    { no: 5, name: "Dosen 5", univ: "Binus University" },
    { no: 6, name: "Dosen 6", univ: "Binus University" },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lecturers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(lecturers.length / itemsPerPage);

  const maxVisiblePages = 5;
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

  const startPage = Math.max(1, currentPage - halfMaxVisiblePages);
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const pageNumbers = [];
  if (totalPages > maxVisiblePages) {
    if (currentPage <= halfMaxVisiblePages) {
      for (let i = 1; i <= maxVisiblePages - 2; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - halfMaxVisiblePages) {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (let i = totalPages - maxVisiblePages + 3; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (let i = currentPage - halfMaxVisiblePages + 2; i <= currentPage + halfMaxVisiblePages - 2; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="container mx-auto p-4 pt-14">
      <table className="w-full border border-gray-300 rounded-lg shadow-lg">
        <thead className="primaryBgColor">
          <tr>
            <th className="py-3 px-6 text-left font-semibold">no</th>
            <th className="py-3 px-6 text-left font-semibold">Lecturer Name</th>
            <th className="py-3 px-6 text-left font-semibold">
              School / University
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((lecturer) => (
            <tr key={lecturer.no} className="bg-white hover:bg-yellow-50">
              <td className="py-4 px-6 border-b">{lecturer.no}</td>
              <td className="py-4 px-6 border-b">{lecturer.name}</td>
              <td className="py-4 px-6 border-b">{lecturer.univ}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-8">
        <ul className="pagination flex">
          <li>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="page-link ring-1 ring-gray-300 hover:bg-gray-300 hover-text-gray-900 rounded-md px-2 py-2 mr-2 transition duration-300 ease-in-out"
            >
              <BiLeftArrowAlt></BiLeftArrowAlt>
            </button>
          </li>
          {pageNumbers.map((number, index) => (
            <li
              key={index}
              className={`page-item ${
                number === currentPage ? "active" : ""
              } px-1`}
            >
              {number === '...' ? (
                <span className="page-link">...</span>
              ) : (
                <button
                  onClick={() => setCurrentPage(number)}
                  className={`page-link ${
                    number === currentPage
                      ? "primaryBgColor ring-1 ring-black"
                      : "ring-1 ring-gray-300 hover-bg-gray-300 hover-text-gray-900"
                  } rounded-md px-3 py-1 transition duration-300 ease-in-out`}
                >
                  {number}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="page-link ring-1 ring-gray-300 hover-bg-gray-300 hover-text-gray-900 rounded-md px-2 py-2 ml-2 transition duration-300 ease-in-out"
            >
              <BiRightArrowAlt></BiRightArrowAlt>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LecturerList;
