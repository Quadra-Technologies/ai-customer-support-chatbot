import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import LeadTable from "../../components/LeadTable/LeadTable";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import Pagination from "../../components/Pagination/Pagination";
import EmptyState from "../../components/EmptyState/EmptyState";

const Leads = () => {
  const [search, setSearch] = useState("");

  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Bhavani",
      email: "bhavani@gmail.com",
      phone: "9876543210",
      eventType: "Wedding",
      guests: 500,
      catering: "Premium",
      decor: "Royal",
      budget: 500000,
      status: "New",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9123456789",
      eventType: "Birthday",
      guests: 100,
      catering: "Standard",
      decor: "Modern",
      budget: 100000,
      status: "Contacted",
    },
    {
      id: 3,
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9988776655",
      eventType: "Corporate Event",
      guests: 300,
      catering: "Premium",
      decor: "Luxury",
      budget: 300000,
      status: "Qualified",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;

  const handleDelete = (id) => {
    setSelectedLead(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setLeads(
      leads.filter(
        (lead) => lead.id !== selectedLead
      )
    );
    setShowModal(false);
    setSelectedLead(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedLead(null);
  };

  const handleStatusChange = (
    id,
    newStatus
  ) => {
    setLeads(
      leads.map((lead) =>
        lead.id === id
          ? {
              ...lead,
              status: newStatus,
            }
          : lead
      )
    );
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const indexOfLastLead =
    currentPage * leadsPerPage;

  const indexOfFirstLead =
    indexOfLastLead - leadsPerPage;

  const currentLeads =
    filteredLeads.slice(
      indexOfFirstLead,
      indexOfLastLead
    );

  const totalPages = Math.ceil(
    filteredLeads.length / leadsPerPage
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Leads Management
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      {filteredLeads.length === 0 ? (
        <EmptyState message="No leads found." />
      ) : (
        <>
          <LeadTable
            leads={currentLeads}
            onDelete={handleDelete}
            onStatusChange={
              handleStatusChange
            }
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
        title="Delete Lead"
        message="Are you sure you want to delete this lead?"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default Leads;