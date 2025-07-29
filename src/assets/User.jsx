import React from "react";
import "./User.css"; // Import the CSS

const User = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p className="username">@{user.username}</p>
      <p className="email">{user.email}</p>

      <div className="section">
        <h4>Address:</h4>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        <p>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
      </div>

      <p className="phone">📞 {user.phone}</p>
      <p className="website">
        🌐 <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
      </p>

      <div className="section">
        <h4>Company:</h4>
        <p>{user.company.name}</p>
        <p className="italic">"{user.company.catchPhrase}"</p>
        <p>{user.company.bs}</p>
      </div>
    </div>
  );
};

export default User;
