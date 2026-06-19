const LeadDetailsModal = ({
  isOpen,
  lead,
  onClose,
}) => {
  if (!isOpen || !lead) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[500px]">
        <h2 className="text-2xl font-bold mb-4">
          Lead Details
        </h2>

        <div className="space-y-2">
          <p><b>Name:</b> {lead.name}</p>
          <p><b>Email:</b> {lead.email}</p>
          <p><b>Phone:</b> {lead.phone}</p>
          <p><b>Event:</b> {lead.eventType}</p>
          <p><b>Guests:</b> {lead.guests}</p>
          <p><b>Catering:</b> {lead.catering}</p>
          <p><b>Decor:</b> {lead.decor}</p>
          <p><b>Budget:</b> ₹{lead.budget}</p>
          <p><b>Status:</b> {lead.status}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LeadDetailsModal;