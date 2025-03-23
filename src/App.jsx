import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Login from './pages/Login'; import Profile from './pages/Profile'; import Match from './pages/Match'; import Suggest from './pages/Suggest';

function App() { return ( <Router> <Routes> <Route path="/" element={<Login />} /> <Route path="/profile" element={<Profile />} /> <Route path="/match" element={<Match />} /> <Route path="/suggest" element={<Suggest />} /> </Routes> </Router> ); }

export default App;

