const UserTable = ({
  users,
  onDelete,
  onBlock,
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Email
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t"
            >
              <td className="p-4">
                {user.name}
              </td>

              <td className="p-4">
                {user.email}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    user.status === "Active"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              <td className="p-4 space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  View
                </button>

                <button
                  onClick={() =>
                    onBlock(user.id)
                  }
                  className={`text-white px-3 py-1 rounded ${
                    user.status === "Active"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {user.status === "Active"
                    ? "Block"
                    : "Unblock"}
                </button>

                <button
                  onClick={() =>
                    onDelete(user.id)
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

export default UserTable;