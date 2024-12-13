import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user', { withCredentials: true });
        if (response.data.user) {
            console.log(response.data);
          setUser(response.data.user);
          setError(null);
        } else {
          setError('No user data found.');
        }
      } catch (error) {
        setError(error.response ? error.response.data.error : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => (window.location.href = '/login')}>
          Login with GitHub
        </button>
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <div>
          <h2>User Information</h2>
          <p>Username: {user.username}</p>
          <p>Display Name: {user.displayName}</p>
          <p>GitHub Profile: <a href={user.profileUrl} target="_blank" rel="noopener noreferrer">{user.profileUrl}</a></p>
          <p>Email: {user.emails && user.emails[0].value}</p>
          <button onClick={() => (window.location.href = '/logout')} style={{ cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>User is not authenticated.</p>
          <button onClick={() => (window.location.href = '/login')} style={{ cursor: 'pointer' }}>
            Login with GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;