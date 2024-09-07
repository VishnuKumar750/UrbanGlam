import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };
    const [currentIndex] = useState(1);

    let MinPages = Math.max(1, totalPages > 4 ? 4 : totalPages);
    

    return (
        <div className="flex justify-center my-4 md:mt-12 lg:mt-8">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-2 mx-1 rounded-full text-black ${currentPage === 1 ? ' cursor-not-allowed' : ' hover:bg-pink-400'}`}
            >
                <FaArrowLeft />
            </button>
            
            {Array.from({ length: MinPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 mx-1 rounded-full text-black font-bold ${currentPage === currentIndex ? 'bg-pink-600' : ""}`}
                >
                    {currentIndex}
                </button>
            ))}
            
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-2 mx-1 rounded-full text-black ${currentPage === totalPages ? 'cursor-not-allowed' : ' hover:bg-pink-400'}`}
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
