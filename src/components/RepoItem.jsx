import React from "react";
import { FaStar } from "react-icons/fa6";

const RepoItem = ({ repo }) => {
    const formatNumber = (num) => {
        if (num >= 1_000_000) {
          return (num / 1_000_000).toFixed(1) + 'M';
        } else if (num >= 1_000) {
          return (num / 1_000).toFixed(1) + 'k';
        }
        return num;
      };
      

  return (
   
      <div className="list-item-container">
        <h3>{repo.name}</h3>
        <p>{repo.description || "No description available"}</p>
        <div className="repo-info">
            <div className="repo-owner">
                <img src={repo.owner.avatar_url} alt="Avatar"  className="repo-avatar"/>
                <span>{repo.owner.login}</span>     
            </div>
            <div className="repo-stars">
                <span><FaStar /></span>
                <span className="repo-count">{formatNumber(repo.stargazers_count)}</span>     
            </div>
        </div>   
      </div>
  
  );
};


export default RepoItem;
