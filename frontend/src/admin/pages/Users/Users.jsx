import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserTable from "../../components/UserTable/UserTable";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import EmptyState from "../../components/EmptyState/EmptyState";

const Users = () => {
  const [search, setSearch] = useState("");
  const [loading] = useState(false);

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
    {
      id: 4,
      name: "Rahul",
      email: "rahul@gmail.com",
      status: "Active",
    },
    {
      id: 5,
      name: "Priya",
      email: "priya@gmail.com",
      status: "Blocked",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [currentPage, setCurrentPage] =
    useState(1);

  const usersPerPage = 3;

  const handleDeleteClick = (userId) => {
    setSelectedUser(userId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setUsers(
      users.filter(
        (user) => user.id !== selectedUser
      )
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

  const indexOfLastUser =
    currentPage * usersPerPage;

  const indexOfFirstUser =
    indexOfLastUser - usersPerPage;

  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(
    filteredUsers.length / usersPerPage
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

      {loading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <EmptyState message="No users found." />
      ) : (
        <>
          <UserTable
            users={currentUsers}
            onDelete={handleDeleteClick}
            onBlock={handleBlockToggle}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

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