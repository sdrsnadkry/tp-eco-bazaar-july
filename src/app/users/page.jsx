"use client";

import React, { useEffect, useState } from "react";

let Base_Url = "https://ca625b8bcc0b50eb8a02.free.beeceptor.com/api/users/";

const Users = () => {
  const [name, setName] = useState("");
  const [editId, setEditId] = useState("");

  const [users, setUsers] = useState([]);

  const fetUsers = async () => {
    const res = await fetch(Base_Url);
    const json = await res.json();
    setUsers(json ?? []);
  };

  const postUser = async () => {
    if (editId) {
      //update
      await fetch(Base_Url + editId, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
        }),
      });
    } else {
      await fetch(Base_Url, {
        method: "POST",
        body: JSON.stringify({
          name: name,
        }),
      });
    }
    fetUsers();
  };

  const deleteUser = async (id) => {
    await fetch(Base_Url + id, {
      method: "DELETE",
    });
    fetUsers()
  };

  useEffect(() => {
    fetUsers();
  }, []);

  return (
    <div className="my-10 px-20">
      <div>
        <label htmlFor="">Name</label>
        <input
          className="border-2 border-slate-600"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={postUser}>Submit</button>
      </div>

      <div className="my-10">
        <ul>
          {users.map((user) => (
            <li className="my-4 flex items-center">
              <div className="max-w-[200px] line-clamp-1">{user.name}</div>
              <button
                className="ml-10 bg-red-100 px-2 "
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete
              </button>{" "}
              <button
                className="bg-blue-100 px-2 "
                onClick={() => {
                  setEditId(user.id);
                  setName(user.name);
                }}
              >
                Edit
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
