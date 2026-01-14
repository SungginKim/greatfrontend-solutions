import { useState, useEffect } from "react";

export default function App() {
  const [jobDetails, setJobDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const jobStoriesURL = "https://hacker-news.firebaseio.com/v0/jobstories.json";

  useEffect(() => {
    fetchJobs(0, visibleCount);
  }, []);

  const fetchJobs = async (start, end) => {
    setIsLoading(true);

    const getJobStories = await fetch(jobStoriesURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const ids = await getJobStories.json();
    const slicedIds = ids.slice(start, end);

    const details = await Promise.all(
      slicedIds.map(async (id) => {
        const res = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return await res.json();
      })
    );

    setJobDetails((prev) => [...prev, ...details]);
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    fetchJobs(jobDetails.length, jobDetails.length + 6);
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="job-board-container">
      <h1>Hacker News Jobs Board</h1>
      {jobDetails.map(({ title, by, time, url, id }) => {
        const date = new Date(time * 1000);
        const formattedTime = date.toLocaleString();
        return (
          <div key={id} className="job-container">
            <a href={url}>{title}</a>
            <p>{`By ${by} • ${formattedTime}`}</p>
          </div>
        );
      })}
      <button onClick={handleLoadMore}>
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
