import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Users from "./components/Users";

const UseMemo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default UseMemo;
