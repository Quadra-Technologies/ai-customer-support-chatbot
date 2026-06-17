const ChatTable = ({
  chats,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">
              User Message
            </th>

            <th className="p-3 text-left">
              AI Response
            </th>

            <th className="p-3 text-left">
              Timestamp
            </th>

            <th className="p-3 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {chats.map((chat) => (
            <tr
              key={chat._id}
              className="border-t"
            >
              <td className="p-3 max-w-xs">
                <div className="truncate">
                  {chat.userMessage}
                </div>
              </td>

              <td className="p-3 max-w-sm">
                <div className="truncate">
                  {chat.aiResponse}
                </div>
              </td>

              <td className="p-3">
                {new Date(
                  chat.timestamp
                ).toLocaleString()}
              </td>

              <td className="p-3">
                <button
                  onClick={() =>
                    onDelete(chat._id)
                  }
                  className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
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