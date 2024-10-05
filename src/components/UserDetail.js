import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = ({ users }) => {
  const { id } = useParams();

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="user-detail">
      <h2>{user.name}'s Details</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </p>
    </div>
  );
};

export default UserDetail;
