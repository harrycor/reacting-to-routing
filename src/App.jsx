import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Films from './pages/Flims';
import FilmDetails from "./pages/FilmDetails";
import People from './pages/People';

const App = () => {
  return (
<BrowserRouter >
<Navbar />
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/films" element={<Films />}/>
  <Route path="/films/:filmid" element={<FilmDetails />}/>
  <Route path="/people" element={<People />}/>
</Routes>
</BrowserRouter>
  );
};

export default App;
