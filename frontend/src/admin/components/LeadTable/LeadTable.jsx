const LeadTable = ({
  leads,
  onDelete,
  onStatusChange,
  onView,
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
      <table className="w-full">
        <thead className="bg-slate-50 text-slate-700">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Requirement</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Source</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead._id}
              className="border-t hover:bg-slate-50 transition"
            >
              <td className="p-3">
                {lead.name}
              </td>

              <td className="p-3">
                {lead.email}
              </td>

              <td className="p-3">
                {lead.phone}
              </td>

              <td className="p-3">
                {lead.requirement}
              </td>

              <td className="p-3">
                <select
                  value={lead.status}
                  onChange={(e) =>
                    onStatusChange(
                      lead._id,
                      e.target.value
                    )
                  }
                  className="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Qualified</option>
                  <option>
                    Proposal Sent
                  </option>
                  <option>Booked</option>
                  <option>Rejected</option>
                </select>
              </td>

              <td className="p-3">
                {lead.source}
              </td>

              <td className="p-3 space-x-2">
                <button
                  onClick={() =>
                    onView(lead)
                  }
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg transition shadow"
                >
                  View
                </button>

                <button
                  onClick={() =>
                    onDelete(lead._id)
                  }
                  className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded-lg transition shadow"
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

export default LeadTable;