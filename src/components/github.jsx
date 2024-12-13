// src/components/GitHub.js
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { getCommitsCount, getAllRepos } from '../api/github';
import './GitHub.css';

const GitHub = () => {
  const [commitsCount, setCommitsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const owner = 'sahil0902';

  useEffect(() => {
    const fetchData = async () => {
      const repos = await getAllRepos(owner);
      let totalCommits = 0;

      for (const repo of repos) {
        const commits = await getCommitsCount(owner, repo);
        totalCommits += commits;
      }

      setCommitsCount(totalCommits);
      setProjectsCount(repos.length);
      setIsLoading(false);
    };

    fetchData();
  }, [owner]);

  return (
    <div className="github-info">
      <h1>GitHub Repo Info</h1>
      <div className="info-container">
        <div className="info-item">
          <h2>Total Commits</h2>
          {isLoading ? (
            <div className="skeleton-loader"></div>
          ) : (
            <CountUp end={commitsCount} duration={2} className="count-up" />
          )}
        </div>
        <div className="info-item">
          <h2>Total Projects</h2>
          {isLoading ? (
            <div className="skeleton-loader"></div>
          ) : (
            <CountUp end={projectsCount} duration={2} className="count-up" />
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHub;