import React, { useState, useEffect } from "react";
import RepoItem from "./RepoItem";
import useFetchData from "../hooks/useFetchData";

const GITHUB_API_URL = "https://api.github.com/search/repositories";

const RepoList = () => {
  const [page, setPage] = useState(1);
  const query_date = "2024-07-05";
  const url = `${GITHUB_API_URL}?q=created:>${query_date}&sort=stars&order=desc&per_page=10&page=${page}`;
  const { data: repos, loading, error } = useFetchData(url);


  const handlePageScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      !loading 
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
    return () => window.removeEventListener("scroll", handlePageScroll);
  }, [loading]);


  if (error) {
    return (
      <div className="error-container">
        <p>Something went wrong! Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="list-container">
       
      {repos.length === 0 && !loading ? (
        <p>No repositories found</p>
      ) : (
        repos.map((repo, index) => (
          <RepoItem repo={repo} key={`${repo.id}-${repo.name}-${index}`} />
        ))
      )}
     {loading && <div>Loading...</div>}
   
    </div>
  );
};

export default RepoList;
