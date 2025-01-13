
import React from "react";
import RepoList from "./components/RepoList";
import { FaStar } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";

const App = () => {

  return (
    <div className="app-container">
      <div className="card">
      <header> <h2 className="header">Trending Repos</h2></header>
      <RepoList  />   
      <footer className="footer">
        <span className="active-footer" ><FaStar className="blue-icon"/>trending</span>
        <span className="inactive-footer"><FiSettings className="setting-icon"/>settings</span>
      </footer>
      </div>
      
    </div>
  );
};

export default App;
