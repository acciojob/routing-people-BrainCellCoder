import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const App = () => {
  // Updated user data with additional fields
  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "johnny",
      email: "john@example.com",
      phone: "555-555-5555",
      website: "johndoe.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "jane_smith",
      email: "jane@example.com",
      phone: "555-555-1234",
      website: "janesmith.com",
    },
    {
      id: 3,
      name: "Alice Johnson",
      username: "alice_j",
      email: "alice@example.com",
      phone: "555-555-7890",
      website: "alicejohnson.com",
    },
  ];

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Route for the list of users */}
          <Route path="/" element={<UserList users={users} />} />

          {/* Dynamic route for user details */}
          <Route path="/users/:id" element={<UserDetail users={users} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
