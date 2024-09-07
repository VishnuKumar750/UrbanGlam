import { FaArrowRight } from "react-icons/fa";
import model6 from '../assets/model6.jpg';

// Mock data for services and testimonials
const servicesData = [
  {
    title: "Personal Styling",
    description:
      "Elevate your everyday look or get red-carpet ready with our personalized styling services. Tailored just for you, each session brings out your best.",
    features: [
      "Wardrobe Revamp",
      "Occasion Styling",
      "Exclusive Shopping Assistance",
    ],
    image: "/images/styling.jpg",
  },
  {
    title: "Makeup & Beauty",
    description:
      "From natural beauty to full-glam, our professional makeup services will have you looking flawless for any occasion.",
    features: [
      "Everyday Glam",
      "Special Events",
      "Skincare Consultations",
    ],
    image: "/images/makeup.jpg",
  },
  {
    title: "Hair Styling",
    description:
      "Transform your look with our expert hairstyling. Whether you want volume, sleek styles, or a new color, we create magic with your hair.",
    features: [
      "Haircuts & Styling",
      "Color & Highlights",
      "Hair Extensions",
    ],
    image: "/images/hairstyle.jpg",
  },
];

const testimonialsData = [
  {
    text: "Urban Glam's styling team completely transformed my wardrobe and confidence. I feel like a new person!",
    name: "Sophia M.",
  },
  {
    text: "Their makeup services are exceptional. I felt absolutely stunning at my event. Would recommend to anyone!",
    name: "Lily P.",
  },
  {
    text: "I love my new haircut! It's exactly what I wanted. The service is top-notch and super luxurious.",
    name: "Emma K.",
  },
];

const Services = () => {
  return (
    <div className="max-w-2xl mx-auto font-sans">
      {/* Hero Section */}
      <section
        className="p-28 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${model6})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative z-10 text-white text-center px-8 py-4">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md animate-fadeIn">
            Welcome to Urban Glam
          </h1>
          <p className="text-xl mb-6 opacity-90 max-w-md mx-auto">
            Your ultimate destination for style, beauty, and glam. We redefine luxury to make you look and feel flawless.
          </p>
          <a
            href="#services"
            className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 inline-flex items-center animate-bounce"
          >
            Discover Our Services <FaArrowRight className="ml-3" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Glamorous Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="list-disc list-inside mb-4 text-gray-600">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="text-pink-600 font-bold hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Why Choose Urban Glam?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Our team of experts brings you a personalized experience with
            cutting-edge fashion and beauty trends. We are committed to
            elevating your style and making every moment glamorous.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-pink-600">
                Expert Stylists
              </h3>
              <p>Our experienced professionals are leaders in the beauty and fashion industry.</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-pink-600">
                Tailored Experience
              </h3>
              <p>We offer personalized styling services that match your unique needs and personality.</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-pink-600">
                Premium Products
              </h3>
              <p>We only use high-end products to give you a luxurious, long-lasting result.</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-pink-600">
                On-Trend Services
              </h3>
              <p>Stay ahead of the curve with the latest trends in fashion and beauty.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <p className="text-gray-700 italic mb-4">
                  {testimonial.text}
                </p>
                <p className="font-semibold text-pink-600">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-700 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Elevate Your Style?
        </h2>
        <p className="text-xl mb-8">
          Book your personalized styling, makeup, or beauty session now.
        </p>
        <a
          href="#"
          className="bg-white text-pink-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Book Now
        </a>
      </section>

    </div>
  );
};

export default Services;
