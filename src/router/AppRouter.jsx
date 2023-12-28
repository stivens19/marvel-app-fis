import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MarvelState from '../context/MarvelState';
import MarvelApp from '../MarvelApp';
import Home from './../containers/Home';
import Details from './../containers/Details';
const AppRouter = () => {
  return (
    <MarvelState>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MarvelApp />}>
                  <Route index element={<Home />} />
                  <Route path="/details/:characterId" element={<Details />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </MarvelState>
    
  )
}

export default AppRouter