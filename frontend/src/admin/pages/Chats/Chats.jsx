import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChatTable from "../../components/ChatTable/ChatTable";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import Pagination from "../../components/Pagination/Pagination";
import EmptyState from "../../components/EmptyState/EmptyState";

const Chats = () => {
  const [search, setSearch] = useState("");

  const [chats, setChats] = useState([
    {
      id: 1,
      customer: "Bhavani",
      messages: 15,
      leadGenerated: true,
      date: "12-06-2026",
    },
    {
      id: 2,
      customer: "Rahul",
      messages: 8,
      leadGenerated: false,
      date: "11-06-2026",
    },
    {
      id: 3,
      customer: "Priya",
      messages: 22,
      leadGenerated: true,
      date: "10-06-2026",
    },
  ]);

  const [showModal, setShowModal] =
    useState(false);

  const [selectedChat, setSelectedChat] =
    useState(null);

  const [currentPage, setCurrentPage] =
    useState(1);

  const chatsPerPage = 5;

  const handleDelete = (id) => {
    setSelectedChat(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setChats(
      chats.filter(
        (chat) => chat.id !== selectedChat
      )
    );

    setShowModal(false);
    setSelectedChat(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedChat(null);
  };

  const filteredChats = chats.filter(
    (chat) =>
      chat.customer
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const indexOfLastChat =
    currentPage * chatsPerPage;

  const indexOfFirstChat =
    indexOfLastChat - chatsPerPage;

  const currentChats =
    filteredChats.slice(
      indexOfFirstChat,
      indexOfLastChat
    );

  const totalPages = Math.ceil(
    filteredChats.length / chatsPerPage
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Chat Monitoring
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      {filteredChats.length === 0 ? (
        <EmptyState message="No chats found." />
      ) : (
        <>
          <ChatTable
            chats={currentChats}
            onDelete={handleDelete}
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
        title="Delete Chat"
        message="Are you sure you want to delete this chat?"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default Chats;