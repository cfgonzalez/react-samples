import { GameEdit } from "@src/Components/games/game-edit/gameEdit";
import { GameList } from "@src/Components/games/game-list/gameList";
import { ModuleALayout } from "@src/Components/module-layouts/module-a-layout/moduleALayout";
import { ModuleBLayout } from "@src/Components/module-layouts/module-b-layout/moduleBLayout";

import React from "react";
import { Route } from "react-router";


export const gameRoutes =  
  <>    
    <Route path="modulea" element={<ModuleALayout />}>
      <Route path="games/add" element={<GameEdit />} />
      <Route path="games/:gameId/edit" element={<GameEdit />} />
      <Route path="games" element={<GameList />} />
    </Route>
    <Route path="moduleb" element={<ModuleBLayout />}>
      <Route path="games/add" element={<GameEdit />} />
      <Route path="games/:gameId/edit" element={<GameEdit />} />
      <Route path="games" element={<GameList />} />
    </Route>
  </>;