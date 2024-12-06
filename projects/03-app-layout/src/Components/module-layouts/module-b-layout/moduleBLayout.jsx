import { CustomAppBar } from "@src/Components/custom-app-bar/AppBar";
import React from "react";
import { Outlet } from "react-router";


export const ModuleBLayout = () => {
  return(
    <>
      <CustomAppBar
        color="secondary"
        title="Module B" />
      <div>
        <div>Content</div>
        <Outlet />
        </div>
    </>    
  );
}