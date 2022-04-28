import React, { useState } from "react";

export default function TestComp(props) {
  const { count: prevCount, isLiked: prevLiked } = props;

  const [isLiked, setIsLiked] = useState(prevLiked);
  const [count, setCount] = useState(prevCount);

  console.log({
    count,
    isLiked,
  });

  const handleClick = () => {
    if (isLiked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <>
      <button onClick={handleClick} className={isLiked ? "liked-btn" : null}>
        {isLiked ? "Liked" : "Like"} {count}
      </button>
    </>
  );
}
