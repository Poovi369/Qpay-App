import React, { useState } from "react";

const TransactionItem = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const statusClasses = {
    pending: "text-orange-600 bg-orange-100",
    success: "text-green-600 bg-green-100",
    failed: "text-red-600 bg-red-100",
  };

  return (
    <div className="w-full overflow-x-auto p-2">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-sm md:text-base">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">User ID</th>
            <th className="px-4 py-2 text-left">Created Date</th>
            <th className="px-4 py-2 text-left">Service ID</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currentItems.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap">{item.user_id}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                {new Date(item.created_date).toLocaleString()}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">{item.service_ref_id}</td>
              <td className="px-4 py-2 whitespace-nowrap">₹{Number(item.amount).toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${statusClasses[item.status.toLowerCase()] || "text-gray-600 bg-gray-100"}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <button className="text-blue-600 hover:underline font-medium">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 text-sm md:text-base bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-2 py-1 text-sm md:text-base rounded ${currentPage === i + 1 ? "bg-green-600 text-white font-bold" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 text-sm md:text-base bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
