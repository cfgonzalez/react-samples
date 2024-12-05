import React from "react";
import { LandingPage } from "@src/Components/landing-page/LandingPage";
import { Route } from "react-router";


export const generalRoutes =  
  <>
    <Route path="/" element={<LandingPage />} />       
  </>;