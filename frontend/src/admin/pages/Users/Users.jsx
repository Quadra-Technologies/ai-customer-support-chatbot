import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserTable from "../../components/UserTable/UserTable";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

const Users = () => {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([
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
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteClick = (userId) => {
    setSelectedUser(userId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setUsers(
      users.filter((user) => user.id !== selectedUser)
    );

    setShowModal(false);
    setSelectedUser(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleBlockToggle = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : user
      )
    );
  };

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

      <UserTable
        users={filteredUsers}
        onDelete={handleDeleteClick}
        onBlock={handleBlockToggle}
      />

      <ConfirmModal
        isOpen={showModal}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default Users;