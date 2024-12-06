import React from "react";
import { useParams } from "react-router";

export const GameEdit = () => {

  let params = useParams();


  return(
    <>
      <h1>Game Edit Component</h1>
      <div>game id : {params.gameId}</div>
    </>    
  );
}