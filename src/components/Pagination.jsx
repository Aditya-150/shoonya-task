/* eslint-disable react/prop-types */
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-4">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-2 bg-gray-300 rounded-l"
    >
      Previous
    </button>
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => onPageChange(index + 1)}
        className={`p-2 ${
          currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        {index + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="p-2 bg-gray-300 rounded-r"
    >
      Next
    </button>
  </div>
);

export default Pagination;
