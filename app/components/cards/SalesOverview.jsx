import React from "react";

const SalesOverview = () => {
  const items = [
    { id: 1, title: "Item 1", content: "Content for Item 1" },
    { id: 2, title: "Item 2", content: "Content for Item 2" },
    { id: 3, title: "Item 3", content: "Content for Item 3" },
    { id: 4, title: "Item 4", content: "Content for Item 4" },
  ];

  return (
    <div className="[95%] lg:w-[80%] pt-12 mx-auto flex-wrap">
      {items.map((item) => (
        <div
          key={item.id}
          className={`p-4  lg:w-[33%]   flex flex-wrap m-1   h-[240px] w-[256px] ${
            item.id === 2 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <h2 className="text-lg font-bold mb-2">{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SalesOverview;
