import React, { useState } from "react";

export const Counter = () => {
  
  // El hook use state permite que el valor se mantenga entre renders
  const [count, setCount] = useState(0);

  let lastRender = new Date();
  const formattedTime = lastRender.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  function handleAddClick() {
    // El set causa un render de nuevo
    setCount(count + 1);
  }

  return (
    <div>
      <div>Last render: {formattedTime}</div>
      <div>Current Count: {count}</div>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}