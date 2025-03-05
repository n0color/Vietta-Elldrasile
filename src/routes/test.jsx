import React, { useEffect, useState } from 'react';

function Test() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vanyasite', {
          method: "post",
          withCredentials: true,
            headers: {
                 "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response)
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      console.log(data)
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.header}</h2>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;