import React, { useState } from "react";
import Card from "./Card";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

const MainContent = () => {
  const cards = [
    { title: "Example website 1", color: "bg-blue-200", imageUrl: img1 },
    { title: "Example website 2", color: "", imageUrl: img1 },
    { title: "Example website 3", color: "", imageUrl: img2 },
    { title: "Empty website", color: "bg-pink-200", imageUrl: img1 },
    { title: "Example website 1", color: "bg-blue-200", imageUrl: img1 },
    { title: "Example website 2", color: "", imageUrl: img1 },
    { title: "Example website 3", color: "", imageUrl: img1 },
    { title: "Empty website", color: "bg-pink-200", imageUrl: img1 },
    { title: "Example website 1", color: "bg-blue-200", imageUrl: img1 },
    { title: "Example website 2", color: "", imageUrl: img1 },
    { title: "Example website 3", color: "", imageUrl: img2 },
    { title: "Empty website", color: "bg-pink-200", imageUrl: img1 },
    { title: "Example website 1", color: "bg-blue-200", imageUrl: img1 },
    { title: "Example website 2", color: "", imageUrl: img1 },
    { title: "Example website 3", color: "", imageUrl: img1 },
    { title: "Empty website", color: "bg-pink-200", imageUrl: img1 },
    { title: "Example website 1", color: "bg-blue-200", imageUrl: img1 },
    { title: "Example website 2", color: "", imageUrl: img2 },
    { title: "Example website 3", color: "", imageUrl: img1 },
    { title: "Empty website", color: "bg-pink-200", imageUrl: img1 },
    { title: "Example website 1", color: "bg-blue-200", imageUrl: img1 },
    { title: "Example website 2", color: "", imageUrl: img1 },
    { title: "Example website 3", color: "", imageUrl: img1 },
    { title: "Empty website", color: "bg-pink-200", imageUrl: img1 },
    { title: "Example website 1", color: "bg-blue-200", imageUrl: img1 },
    { title: "Example website 2", color: "", imageUrl: img1 },
    { title: "Example website 3", color: "", imageUrl: img1 },
    { title: "Empty website", color: "bg-pink-200", imageUrl: img1 },
    { title: "Example website 1", color: "bg-blue-200", imageUrl: img1 },
    { title: "Example website 2", color: "", imageUrl: img1 },
    { title: "Example website 3", color: "", imageUrl: img1 },
    { title: "Empty website", color: "bg-pink-200", imageUrl: img1 },
  ];

  const cardsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex-1 px-8 pt-4">
      <h1 className="text-2xl font-semibold mb-4">Website Template</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            color={card.color}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <div className="mt-4 text-center">
        <ul className="inline-flex">
          {/* Previous Button
          <li
            className={`px-2 py-1 cursor-pointer ${
              currentPage > 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => paginate(currentPage - 1)}
          >
            {"< Previous"}
          </li> */}

          {/* Page Numbers */}
          {Array(Math.ceil(cards.length / cardsPerPage))
            .fill()
            .map((_, index) => (
              <li
                key={index}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  index + 1 === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                style={{ margin: "0 4px" }}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </li>
            ))}

          {/* Next Button
          <li
            className={`px-3 py-2 rounded-full cursor-pointer ${
              currentPage < Math.ceil(cards.length / cardsPerPage)
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => paginate(currentPage + 1)}
          >
            {"Next >"}
          </li> */}
        </ul>
      </div>
    </main>
  );
};

export default MainContent;
