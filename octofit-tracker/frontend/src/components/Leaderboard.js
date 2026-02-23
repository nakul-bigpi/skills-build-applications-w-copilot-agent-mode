import React, { useEffect, useState } from 'react';

function getEndpoint(name) {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  return codespace
    ? `https://${codespace}-8000.app.github.dev/api/${name}/`
    : `http://localhost:8000/api/${name}/`;
}

export default function Leaderboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const endpoint = getEndpoint('leaderboard');
    console.log('Fetching Leaderboard from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('Leaderboard response:', data);
        const list = Array.isArray(data) ? data : data.results ?? [];
        setItems(list);
      })
      .catch((err) => console.error('Leaderboard fetch error:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(items, null, 2)}</pre>
      {items.length === 0 && <p>No leaderboard data found.</p>}
    </div>
  );
}
