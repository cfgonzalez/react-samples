import React from "react";
import { CustomAppBar } from "../custom-app-bar/AppBar";
import { BrowserRouter, Routes } from "react-router";
import { gameRoutes } from "@src/Routes/game.routes";
import { generalRoutes } from "@src/Routes/general.routes";


export const Layout = () => {
  return(
    <>
      <CustomAppBar />
      <div>
        <div>Content</div>
        <BrowserRouter>
          <Routes>
            {generalRoutes}
            {gameRoutes}
          </Routes>
        </BrowserRouter>
        </div>
    </>    
  );
}