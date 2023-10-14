import React, { useState } from "react";

const LecturerList = () => {
  const lecturers = [
    { id: 1, name: "Dosen 1" },
    { id: 2, name: "Dosen 2" },
    { id: 3, name: "Dosen 3" },
    { id: 4, name: "Dosen 4" },
    { id: 5, name: "Dosen 5" },
    { id: 6, name: "Dosen 6" },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lecturers.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(lecturers.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto p-4 pt-14">
      <table className="w-full border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left font-semibold">ID</th>
            <th className="py-3 px-6 text-left font-semibold">Lecturer Name</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((lecturer) => (
            <tr key={lecturer.id} className="bg-white">
              <td className="py-4 px-6 border-b">{lecturer.id}</td>
              <td className="py-4 px-6 border-b">{lecturer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === currentPage ? "active" : ""}`}
            >
              {/* <button
                    onClick={() => setCurrentPage(number)}
                    className="page-link"
                  >
                    <div className="bg-stone-600 py-3 px-3">
                          {number}
                    </div>
                  
                  </button> */}

              <button
                onClick={() => setCurrentPage(number)}
                className={`page-link ${
                  number === currentPage
                    ? "bg-primaryColor text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LecturerList;
