import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserTable from "../../components/UserTable/UserTable";

const Users = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "Bhavani",
      email: "bhavani@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Shruthi",
      email: "shruthi@gmail.com",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Admin",
      email: "admin@gmail.com",
      status: "Active",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Users Management
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <UserTable users={filteredUsers} />
    </div>
  );
};

export default Users;