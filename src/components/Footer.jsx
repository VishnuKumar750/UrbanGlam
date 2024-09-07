import footerbg from '../assets/footerbg.jpg';
import grayblur from "../assets/grayblur.jpg"

const Footer = () => {
  return (
    <footer className="max-w-2xl mx-auto relative w-full h-[520px] md:h-[580px] bg-yellow-500 text-white py-12 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${footerbg})` }}>
      {/* Background Image with Overlay */}
      <div className="absolute w-full h-full z-1 top-0 bg-black bg-opacity-70"></div>

      <div className="relative text-white z-10 flex flex-col items-center container w-11/12 md:w-2/3 mx-auto">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Explore UrbanGlam</h1>
        <p className="text-center mt-4 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
          Join our vibrant community and never miss out on the latest trends, exclusive offers, and style tips! 
          At UrbanGlam, fashion meets you.
        </p>
      </div>
      
      <div className="relative container w-11/12 md:w-4/5 h-auto mx-auto mt-10 rounded-lg">
        <div className="absolute w-full h-full bg-white bg-opacity-20 rounded-lg"></div>
        
        {/* Adjust grid layout for different screen sizes */}
        <div className="w-11/12 md:w-5/6 mx-auto mt-6 md:mt-10  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
            {/* General section - about us, blog, how it works */}
            {["Generals", "Products", "Service", "Social Media"].map((section, idx) => (
              <div key={idx} className="mt-2 md:mt-10 ">
                <h3 className="text-md sm:text-md font-semibold mb-2 text-white">{section}</h3>
                <ul className="space-y-1">
                  <li><p className="text-white text-xs sm:text-sm">About Us</p></li>
                  <li><p className="text-white text-xs sm:text-sm">Products</p></li>
                  <li><p className="text-white text-xs sm:text-sm">Services</p></li>
                  <li><p className="text-white text-xs sm:text-sm">Contact</p></li>
                </ul>
              </div>
            ))}
        </div>

        {/* Text with Image Background inside it */}
        <div className="relative flex justify-center items-center w-fit mx-auto mt-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-center bg-cover" style={{ backgroundImage: `url(${grayblur})`}}>
                UrbanGlam
            </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
