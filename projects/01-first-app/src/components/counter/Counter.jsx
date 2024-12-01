import React from "react";

export const Counter = () => {
  
  let count = 0;

  function handleAddClick() {
    count = count + 1;
  }

  
  return (
    <div>
      <div>Current Count: {count}</div>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}