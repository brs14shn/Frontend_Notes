import React from "react";
import fs from "../assets/fs.png";

const Users = ({ users }) => {
  console.log("Users Componets Rendering");
  return (
    <div className="users">
      <button className="add-button" onClick={null}>
        Add Users
      </button>
      {users?.map((user) => {
        const { name, username, email, id } = user;

        return (
          <div className="useritem" key={id}>
            <img src={fs} style={{ width: "100px" }} alt="" />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
