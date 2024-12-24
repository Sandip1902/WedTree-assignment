import React, { useEffect, useState } from 'react';
import UserProfileCard from './UserProfileCard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black relative">
      {/* Magical Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-3xl"></div>
      {user ? <UserProfileCard user={user} /> : <p className="text-white text-xl">Loading your magical profile...</p>}
    </div>
  );
}

export default App;
