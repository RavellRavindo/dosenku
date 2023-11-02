import React from "react";

const Card = ({ title, color, imageUrl }) => {

    const test = () => {
        console.log(imageUrl);
    }
  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${color}`}>
      <div className="flex items-center">
        <img
          src={imageUrl} // Update the path to your image
          alt="Card Image"
          className="w-16 h-16 rounded-full mr-4"
          onClick={test}
        />
        <div>
          <p className="text-sm text-gray-700">{title}</p>
        </div>
      </div>
      <p>test text,</p>
    </div>
  );
};
export default Card;
