import React, { useState } from "react";

import "./App.css";

import TestComp from "./TestComp";

function App() {
  const [arr, setArr] = useState([
    {
      count: 10,
      isLiked: false,
    },
    {
      count: 20,
      isLiked: false,
    },
    {
      count: 30,
      isLiked: false,
    },
    {
      count: 40,
      isLiked: false,
    },
    {
      count: 50,
      isLiked: false,
    },
  ]);

  const handleLikeAll = () => {
    setArr((prevArr) => {
      prevArr.forEach((like) => {
        like.isLiked = true;
      });

      return [...prevArr];
    });
  };

  console.log(arr);

  return (
    <div>
      {arr.map((like, index) => {
        return (
          <TestComp key={index} count={like.count} isLiked={like.isLiked} />
        );
      })}
      <button onClick={handleLikeAll}>Like ALL</button>
    </div>
  );
}

export default App;
