import React from "react";

const Card = ({ title, color, imageUrl}) => {
  const test = () => {
    console.log(imageUrl);
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${color} transition-transform hover:scale-105`}>
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt="Card Image"
          className="w-32 h-32 rounded-full mr-10 border-4 border-white"
          onClick={test}
        />
        <div>
          <p className="text-lg font-semibold text-gray-700">{title}</p>
        </div>
      </div>
      {/* <p className="mt-4">Test text</p> */}
    </div>
  );
};

export default Card;