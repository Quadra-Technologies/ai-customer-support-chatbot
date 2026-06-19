import { useState, useEffect } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import ChatTable from "../../components/ChatTable/ChatTable";
import Pagination from "../../components/Pagination/Pagination";
import EmptyState from "../../components/EmptyState/EmptyState";
import Loader from "../../components/Loader/Loader";

import {
  getConversations,
} from "../../../services/conversationApi";

const Chats = () => {
  const [search, setSearch] = useState("");

  const [chats, setChats] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [currentPage, setCurrentPage] =
    useState(1);

  const chatsPerPage = 5;

  const fetchChats = async () => {
    try {
      setLoading(true);

      const data =
        await getConversations();

      setChats(data);
    } catch (error) {
      console.error(
        "Error fetching chats:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const handleDelete = () => {
    alert(
      "Delete Conversation API is not implemented yet."
    );
  };

  const filteredChats =
    chats.filter(
      (chat) =>
        chat.userMessage
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        chat.aiResponse
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
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
    filteredChats.length /
      chatsPerPage
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">
          Chat Monitoring
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      {filteredChats.length ===
      0 ? (
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
            setCurrentPage={
              setCurrentPage
            }
          />
        </>
      )}
    </div>
  );
};

export default Chats;