const LeadTable = ({
  leads,
  onDelete,
  onStatusChange,
  onView,
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Event</th>
            <th className="p-3 text-left">Guests</th>
            <th className="p-3 text-left">Budget</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t">
              <td className="p-3">{lead.name}</td>

              <td className="p-3">{lead.email}</td>

              <td className="p-3">{lead.phone}</td>

              <td className="p-3">
                {lead.eventType}
              </td>

              <td className="p-3">
                {lead.guests}
              </td>

              <td className="p-3">
                ₹{lead.budget}
              </td>

              <td className="p-3">
                <select
                  value={lead.status}
                  onChange={(e) =>
                    onStatusChange(
                      lead.id,
                      e.target.value
                    )
                  }
                  className="border rounded p-1"
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

              <td className="p-3 space-x-2">
                <button
                  onClick={() =>
                    onView(lead)
                  }
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  View
                </button>

                <button
                  onClick={() =>
                    onDelete(lead.id)
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

export default LeadTable;