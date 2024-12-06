import { CustomAppBar } from "@src/Components/custom-app-bar/AppBar";
import React from "react";
import { Outlet } from "react-router";

export const ModuleALayout = () => {
  return(
    <>
      <CustomAppBar
        color="primary"
        title="Module A"/>
      <div>
        <div>Content</div>
        <Outlet />
        </div>
    </>    
  );
}