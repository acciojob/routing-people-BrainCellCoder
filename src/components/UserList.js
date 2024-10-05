import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Link to the dynamic route for each user */}
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
