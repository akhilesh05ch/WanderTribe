import React from "react"; import { Link } from "react-router-dom";

function Navbar() { return ( <nav className="flex gap-4 p-4 bg-white shadow"> <Link to="/profile">Profile</Link> <Link to="/match">Match</Link> <Link to="/suggest">Suggestions</Link> <Link to="/log">Travel Log</Link> <Link to="/leaderboard">Leaderboard</Link> </nav> ); }

export default Navbar;
