import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

import SearchBar from "../../components/SearchBar/SearchBar";
import LeadTable from "../../components/LeadTable/LeadTable";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import Pagination from "../../components/Pagination/Pagination";
import EmptyState from "../../components/EmptyState/EmptyState";
import LeadDetailsModal from "../../components/LeadDetailsModal/LeadDetailsModal";
import Loader from "../../components/Loader/Loader";

import {
  getLeads,
  updateLeadStatus,
  deleteLead,
} from "../../../services/leadApi";

const Leads = () => {
  const [search, setSearch] = useState("");
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedLeadId, setSelectedLeadId] =
    useState(null);

  const [selectedLead, setSelectedLead] =
    useState(null);
  const [showDetails, setShowDetails] =
    useState(false);

  const [currentPage, setCurrentPage] =
    useState(1);

  const leadsPerPage = 5;

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const data = await getLeads();

      // Supports both:
      // { success: true, data: [...] }
      // [...]
      setLeads(data.data || data);
    } catch (error) {
      console.error(
        "Error fetching leads:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Reset pagination on search
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const handleDelete = (id) => {
    setSelectedLeadId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteLead(selectedLeadId);

      await fetchLeads();

      setShowModal(false);
      setSelectedLeadId(null);
    } catch (error) {
      console.error(
        "Delete failed:",
        error
      );
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedLeadId(null);
  };

  const handleStatusChange = async (
    id,
    newStatus
  ) => {
    try {
      await updateLeadStatus(
        id,
        newStatus
      );

      await fetchLeads();
    } catch (error) {
      console.error(
        "Status update failed:",
        error
      );
    }
  };

  const handleView = (lead) => {
    setSelectedLead(lead);
    setShowDetails(true);
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.email
        ?.toLowerCase()
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">
          Leads Management
        </h1>

        <div className="flex flex-col md:flex-row gap-3">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <CSVLink
            data={leads}
            filename="event-leads.csv"
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Export CSV
          </CSVLink>
        </div>
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
            onView={handleView}
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

      <ConfirmModal
        isOpen={showModal}
        title="Delete Lead"
        message="Are you sure you want to delete this lead?"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />

      <LeadDetailsModal
        isOpen={showDetails}
        lead={selectedLead}
        onClose={() =>
          setShowDetails(false)
        }
      />
    </div>
  );
};

export default Leads;