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
              Customer
            </th>

            <th className="p-3 text-left">
              Messages
            </th>

            <th className="p-3 text-left">
              Lead Generated
            </th>

            <th className="p-3 text-left">
              Date
            </th>

            <th className="p-3 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {chats.map((chat) => (
            <tr
              key={chat.id}
              className="border-t"
            >
              <td className="p-3">
                {chat.customer}
              </td>

              <td className="p-3">
                {chat.messages}
              </td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    chat.leadGenerated
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {chat.leadGenerated
                    ? "Yes"
                    : "No"}
                </span>
              </td>

              <td className="p-3">
                {chat.date}
              </td>

              <td className="p-3 space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  View
                </button>

                <button
                  onClick={() =>
                    onDelete(chat.id)
                  }
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