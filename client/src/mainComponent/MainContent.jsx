import React from "react";
import Card from "./Card";

const MainContent = () => {
  return (
    <main className="flex-1 px-8 pt-4">
      <h1 className="text-2xl font-semibold mb-4">Website Template</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Empty website"
          color="bg-blue-200"
          imageUrl="/images/img1.jpg"
        />
        <Card
          title="Empty website"
          color="bg-yellow-200"
        />
        <Card
          title="Empty website"
          color="bg-yellow-200"
        />
        <Card
          title="Empty website"
          color="bg-pink-200"
        />
        {/* <Chart /> */}
      </div>
    </main>
  );
};

export default MainContent;
