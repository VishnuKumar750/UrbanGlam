import bannerbg from '../assets/bannerbg.png';
import { Productcard } from "../components/Productcard";
import { productsData } from "../utils/Data";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { ProductFilter } from './../components/ProductFilter';
import { Testimonial } from "../components/Testimonial";
import BrandsSection from "../components/Brands";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Home = () => {
    const [products] = useState(productsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State for filter drawer
    const productPerPage = 8;
    const totalPages = Math.ceil(products.length / productPerPage);

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen); // Toggle drawer
    };

    return (
        <div>
            {/* Banner Section */}
            <div className="max-w-2xl mx-auto relative bg-cover bg-center bg-no-repeat h-[240px] md:h-[280px] lg:h-[320px] xl:h-[400px]" style={{ backgroundImage: `url(${bannerbg})` }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="text-center text-white px-6">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Discover Your Perfect Look</h1>
                        <p className="text-1xl mb-6 font-semibold">Shop our latest collection and find your new favorite outfits.</p>
                        <button className="bg-pink-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-pink-800">Discover Style</button>
                    </div>
                </div>
            </div>

            {/* Responsive Filter Toggle Button for small screens */}
            <div className="block lg:hidden my-4 px-4">
                <button onClick={toggleFilter} className="flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-200">
                    {isFilterOpen ? <IoIosArrowBack className="mr-2" /> : <IoIosArrowForward className="mr-2" />}
                    {isFilterOpen ? 'Close Filter' : 'Show Filter'}
                </button>
            </div>

            <div className="max-w-2xl mx-auto lg:grid lg:grid-cols-12">
                {/* Sidebar for large screens, and Drawer for small screens */}
                <div className={`lg:col-span-3 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
                    <ProductFilter />
                </div>

                {/* Product Grid */}
                <div className="lg:col-span-9 w-full flex flex-col justify-between items-center">
                    <div className="grid gap-4 xl:gap-x-18 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
                        {currentProducts.map((product, index) => (
                            <Productcard key={index} product={product} />
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="mt-6">
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </div>
                </div>
            </div>

            <BrandsSection />
            <Testimonial />
        </div>
    );
};

export default Home;
