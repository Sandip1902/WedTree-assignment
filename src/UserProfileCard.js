import React from 'react';

function UserProfileCard({ user }) {
  return (
    <div className="relative bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 p-8 rounded-2xl shadow-2xl max-w-2xl w-full flex items-center space-x-6 transform hover:scale-105 transition duration-500 ease-in-out border border-purple-500">
      {/* Glowing Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg opacity-50 -z-10 rounded-2xl"></div>

    
      <div className="flex-shrink-0">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Profile Details */}
      <div className="text-white">
        <h2 className="text-2xl font-extrabold tracking-wide">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-gray-200 italic text-lg mt-1">Gender🌟: {user.gender}</p>
        <div className="space-y-2 mt-4">
          <p>
            <span className="font-bold">📞 Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-bold">📧 Email:</span> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
