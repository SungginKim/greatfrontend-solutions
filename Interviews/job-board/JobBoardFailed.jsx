import { useState, useEffect } from "react";

const URL = "https://hacker-news.firebaseio.com/v0/jobstories.json";
const MAX_POST_PER_PAGE = 6;

function JobPost({ post }) {
  const { by, id, time, title, url } = post;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export default function App() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(0, MAX_POST_PER_PAGE);
  }, []);

  const fetchData = async (start, end) => {
    setIsLoading(true);
    const responseId = await fetch(URL).then((res) => res.json());
    const slicedIds = responseId.slice(start, end);

    const responseDetails = await Promise.all(
      slicedIds.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json(),
        ),
      ),
    );
    setDetails((prev) => [...prev, ...responseDetails]);
    setIsLoading(false);
  };

  const handleLoad = () => {
    fetchData(details.length, details.length + 6);
  };

  console.log(details);

  return (
    <div>
      <h1>Hacker News Job Board</h1>
      {details.length < 1 ? (
        <p>Loading...</p>
      ) : (
        details.map((post) => <JobPost key={post.id} post={post} />)
      )}

      <button onClick={handleLoad}>
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
