import { GameEdit } from "@src/Components/games/game-edit/gameEdit";
import { GameList } from "@src/Components/games/game-list/gameList";
import { LandingPage } from "@src/Components/landing-page/LandingPage";
import React from "react";
import { Route } from "react-router";


export const gameRoutes =  
  <>
    <Route path="/" element={<LandingPage />} />
    
    <Route path="/modulea/games/add" element={<GameEdit />} />
    <Route path="/modulea/games" element={<GameList />} />
    
    <Route path="/moduleb/games/add" element={<GameEdit />} />
    <Route path="/moduleb/games" element={<GameList />} />  
  </>;