
import { brands } from '../utils/Data';

const BrandsSection = () => {
  return (
    <section className="max-w-2xl mx-auto bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Trusted Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex justify-center items-center">
              <div className="w-full h-24 md:h-32 lg:h-40 flex items-center justify-center">
                <img src={brand.logo} alt={brand.name} className="object-contain w-full h-full " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
