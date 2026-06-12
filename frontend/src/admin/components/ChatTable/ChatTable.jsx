const ChatTable = ({ chats, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">User</th>
            <th className="p-4 text-left">Message</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {chats.map((chat) => (
            <tr
              key={chat.id}
              className="border-t"
            >
              <td className="p-4">{chat.user}</td>

              <td className="p-4 max-w-sm truncate">
                {chat.message}
              </td>

              <td className="p-4">{chat.date}</td>

              <td className="p-4">
                <button
                  onClick={() => onDelete(chat.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChatTable;