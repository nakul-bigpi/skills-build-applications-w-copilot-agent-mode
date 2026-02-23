import React, { useEffect, useState } from 'react';

function getEndpoint() {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  return codespace
    ? `https://${codespace}-8000.app.github.dev/api/activities/`
    : `http://localhost:8000/api/activities/`;
}

export default function Activities() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const endpoint = getEndpoint();
    console.log('Fetching Activities from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('Activities response:', data);
        const list = Array.isArray(data) ? data : data.results ?? [];
        setItems(list);
      })
      .catch((err) => console.error('Activities fetch error:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(items, null, 2)}</pre>
      {items.length === 0 && <p>No activities found.</p>}
    </div>
  );
}
