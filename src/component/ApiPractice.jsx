import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiPractice = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setLoading(true);
    setError('');

    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Unable to load posts. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '20px' }}>
      <h1>API Practice</h1>

      {loading && <div>Loading posts...</div>}

      {error && (
        <div style={{ color: 'red', marginBottom: '12px' }}>
          {error}
        </div>
      )}

      {!loading && !error && (
        <div>
          <h2>Posts Method</h2>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '20px',
            }}
          >
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Body</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    style={{ border: '1px solid #ddd', padding: '8px' }}
                  >
                    No posts available.
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                      {post.id}
                    </td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                      {post.title}
                    </td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                      {post.body}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApiPractice;