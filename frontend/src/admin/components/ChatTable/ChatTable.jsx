const ChatTable = ({
  chats,
  onDelete,
  onView,
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
      <table className="w-full">
        <thead className="bg-slate-50 text-slate-700">
          <tr>
            <th className="p-4 text-left font-semibold">
              Customer
            </th>

            <th className="p-4 text-left font-semibold">
              User Message
            </th>

            <th className="p-4 text-left font-semibold">
              Timestamp
            </th>

            <th className="p-4 text-left font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {chats.map((chat) => (
            <tr
              key={chat._id}
              className="border-t hover:bg-slate-50 transition"
            >
              <td className="p-4">
                <div className="font-medium text-slate-800">
                  Visitor
                </div>

                <div className="text-sm text-gray-500">
                  AI Chat User
                </div>
              </td>

              <td className="p-4 max-w-sm">
                <div className="truncate">
                  {chat.userMessage}
                </div>
              </td>

              <td className="p-4 text-gray-600">
                {new Date(
                  chat.timestamp
                ).toLocaleString()}
              </td>

              <td className="p-4 space-x-2">
                <button
                  onClick={() =>
                    onView &&
                    onView(chat)
                  }
                  className="
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  px-3
                  py-1
                  rounded-lg
                  transition
                  shadow
                  "
                >
                  View
                </button>

                <button
                  onClick={() =>
                    onDelete(chat._id)
                  }
                  className="
                  bg-rose-500
                  hover:bg-rose-600
                  text-white
                  px-3
                  py-1
                  rounded-lg
                  transition
                  shadow
                  "
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