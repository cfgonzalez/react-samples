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

  function handleAddPlus3Click() {
    // Solo se actualiza una vez ya que react "encola" los set y solo cambia en el proximo "rerender"
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  function handleAddAndAlert() {
    // Esto no funcionaria ya que react siempre trabaja con un snapshot del state durante el render
    // setCount(count + 5);
    // alert(count);

    // En su lugar hay que hacer esto
    let newCount = count + 5;
    setCount(newCount);
    alert(newCount);
  }

  return (
    <div>
      <div>Last render: {formattedTime}</div>
      <div>Current Count: {count}</div>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleAddPlus3Click}>Add + 3</button>
      <button onClick={handleAddAndAlert}>Add +5 and Alert</button>
    </div>
  );
}