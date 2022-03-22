import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Films from './pages/Flims';
import FilmDetails from "./pages/FilmDetails";
import People from './pages/People';
import PeopleDeatails from "./pages/PeopleDetails";

const App = () => {
  return (
<BrowserRouter >
<Navbar />
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/films" element={<Films />}/>
  <Route path="/films/:filmid" element={<FilmDetails />}/>
  <Route path="/people" element={<People />}/>
  <Route path="/people/:peopleid" element={<PeopleDeatails />}/>
  <Route  path="*" element={<h1>Well thats a mighty fine 404 error you got there</h1>}/>
</Routes>
</BrowserRouter>
  );
};

export default App;
