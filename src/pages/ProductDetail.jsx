
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import model1 from '../assets/model1.png';
import model2 from '../assets/model2.png';
import model3 from '../assets/model3.png';
import { useState } from 'react';

// Sample reviewer data
const sampleReviewers = [
  { id: 1, name: 'Alice', image: model1, rating: 5, text: 'Excellent product!' },
  { id: 2, name: 'Bob', image: model2, rating: 4, text: 'Very good, but could be improved.' },
  { id: 3, name: 'Charlie', image: model3, rating: 3, text: 'It’s okay, but not great.' }
];

const productDetailsData = {
    title: "Stylish Men's Jacket",
    price: 99.99,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Red", hexCode: "#ff0000" },
      { name: "Blue", hexCode: "#0000ff" },
      { name: "Green", hexCode: "#008000" },
      { name: "Black", hexCode: "#000000" }
    ],
    overview: {
      description: "This stylish men's jacket is perfect for casual and outdoor wear. Made with premium materials to ensure durability and comfort.",
      features: [
        "Material: 100% Cotton",
        "Water-resistant",
        "Comfortable and lightweight",
        "Perfect for all seasons"
      ]
    },
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500/ff7f7f",
      "https://via.placeholder.com/500/7f7fff"
    ]
  };
  

export const ProductDetail = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState(sampleReviewers);
  const [selectedImage, ] = useState(model1);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  // Handle color selection
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  // Handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // const productImages = [
  //   model1,
  //   model2,
  //   model3
  // ];

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() && rating) {
      setReviews([...reviews, { id: Date.now(), name: 'Anonymous', image: 'https://via.placeholder.com/40', rating, text: reviewText }]);
      setReviewText('');
      setRating(0);
    }
  };


  return (
    <div className="max-w-2xl mx-auto max-h-full  p-6">
      {/* Product Details */}
      <div className="w-full overflow-hidden p-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
            {/* Product Info Section */}
            <div className="order-2 mt-4 max-w-4/12 lg:order-1 flex flex-col justify-between">
            <h1 className="text-xl xl:text-[2rem] font-extrabold mb-1">{productDetailsData.title}</h1>
            
            <span className="text-xl xl:text-[1.5rem] xl:mt-2 font-semibold text-gray-900 mb-3">${productDetailsData.price}</span>

            {/* Color Options */}
            <div className="mb-2">
                <h3 className="text-[1rem] font-semibold mb-1">Colors</h3>
                <div className="flex space-x-2">
                {productDetailsData.colors.map((color, index) => (
                    <div
                    key={index}
                    onClick={() => handleColorClick(color)}
                    className={`w-6 h-6  rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center ${
                        selectedColor === color.name
                        ? 'border-4 border-black text-white'
                        : 'border-2 border-gray-300'
                    }`} style={{ backgroundColor: color.hexCode }}
                    >
                    {/* Optionally Display the first letter of the color */}
                    </div>
                ))}
                </div>
            </div>

            {/* Size Options */}
            <div className="mb-2">
                <h3 className="text-[1rem] font-semibold mb-1">Sizes</h3>
                <div className="flex space-x-2">
                {productDetailsData.sizes.map((size, index) => (
                    <div
                    key={index}
                    onClick={() => handleSizeClick(size)}
                    className={`w-6 h-6 rounded-full text-[.8rem] cursor-pointer border border-gray-300 transition-all duration-300 flex items-center justify-center ${
                        selectedSize === size
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-black'
                    }`}
                    >
                    {size}
                    </div>
                ))}
                </div>
            </div>

            {/* Overview */}
            <div className=" my-4">
                <div className="cursor-pointer font-semibold">Product Overview</div>
                <p className="mt-2 text-gray-700 w-3/4">{productDetailsData.overview.description}</p>
                <ul className="list-disc list-inside mt-2">
                    {productDetailsData.overview.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

            {/* Add to Cart and Add to Favorites */}
            <div className="flex items-center mb-4">
                <button className=" flex items-center text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 sm:px-6 sm:py-3 ">
                <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
            </div>

            </div>
            
            {/* image section */}
            <div className="order-1 max-w-8/12 lg:order-2 grid grid-cols-1 md:grid-rows-2 md:grid-cols-2">
                {/* <!-- First Image spanning two rows --> */}
                <div className="row-span-2 border  bg-gray-300 col-span-1 w-[28rem] h-[31rem] lg:w-[21rem] xl:w-[28rem] ">
                    <img src={selectedImage} alt="First Image" className="w-full h-full object-cover rounded-lg" />
                </div>
                

                {/* <!-- Second Image (in second column, first row) --> */}
                <div className="hidden md:block ml-28 border  bg-gray-300 row-span-1 w-[14rem] h-[15rem] lg:h-[15.5rem] xl:h-[16rem] lg:ml-18 xl:ml-28 col-span-1">
                    <img src={selectedImage} alt="Second Image" className="w-full h-full object-contain rounded-lg" />
                </div>
                
                {/* <!-- Third Image (in second column, second row) --> */}
                <div className="hidden md:block border bg-gray-300 row-span-1 w-[14rem] h-[15rem] ml-28 lg:ml-18 xl:ml-28 col-span-1">
                    <img src={selectedImage} alt="Third Image" className="w-full h-full object-contain rounded-lg" />
                </div>
            </div>

        </div>
      </div>



      {/* User Reviews */}
      <div className=" mt-6 p-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">User Reviews</h2>
        <div className="space-y-2">
          {reviews.map((review) => (
            <div key={review.id} className="border-t rounded-lg px-2 py-4 bg-white shadow-md max-w-[32rem] pt-4 flex items-start space-x-4">
              <img src={review.image} alt={review.name} className="w-12 h-12 object-cover rounded-full border border-gray-300" />
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 font-semibold">{review.name}</p>
                <p className="text-gray-700">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Add Review Form */}
        <form onSubmit={handleReviewSubmit} className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Write a Review</h3>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                onClick={() => handleRatingChange(index + 1)}
              />
            ))}
          </div>
          <div className='flex flex-col '>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-[50%] border border-gray-300 rounded-lg p-2 mb-4"
            rows="4"
            placeholder="Write your review here..."
          />
          <button
            type="submit"
            className="text-white w-48 bg-green-600 hover:bg-green-700 px-4 py-2"
          >
            Submit Review
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

