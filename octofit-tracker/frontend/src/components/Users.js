import React, { useEffect, useState } from 'react';

function getEndpoint(name) {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  return codespace
    ? `https://${codespace}-8000.app.github.dev/api/users/`
    : `http://localhost:8000/api/users/`;
}

export default function Users() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const endpoint = getEndpoint();
    console.log('Fetching Users from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('Users response:', data);
        const list = Array.isArray(data) ? data : data.results ?? [];
        setItems(list);
      })
      .catch((err) => console.error('Users fetch error:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(items, null, 2)}</pre>
      {items.length === 0 && <p>No users found.</p>}
    </div>
  );
}
