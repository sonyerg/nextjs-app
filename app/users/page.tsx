import React from "react";

interface User {
  id: number;
  name: string;
  company: { name: string };
}

export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await response.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td> {user.name} </td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
