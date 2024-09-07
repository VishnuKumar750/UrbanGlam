
// Data arrays for team members, vision, and other sections

import { teamMembers, visionPoints } from "../utils/Data";
import model6 from '../assets/model7.jpg'


// About Us Page Component
const AboutUs = () => {
  return (
    <div className="max-w-2xl mx-auto font-sans bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center bg-cover  bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${model6})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        <div className="relative z-10 text-center text-white py-24">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-md animate-fadeIn">
            About Urban Glam
          </h1>
          <p className="text-xl mb-6 max-w-lg mx-auto opacity-90">
            We believe in the power of style and beauty to transform your
            confidence. Discover our story and vision for a more glamorous you.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="text-gray-900">
              <h2 className="text-4xl font-bold mb-6">
                Our Mission: Redefining Glamour
              </h2>
              <p className="text-lg mb-4">
                At Urban Glam, our mission is to empower every individual to
                embrace their beauty and style. We bring world-class expertise
                in personal styling, makeup, and beauty services to redefine how
                you see yourself.
              </p>
              <p className="text-lg mb-4">
                With a team of highly skilled professionals and a commitment to
                excellence, we offer a luxurious experience that is accessible
                to all.
              </p>
            </div>
            <div className="max-w-[18rem] max-h-[22rem]">
              <img
                src={model6}
                alt="Our Mission"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Our Vision for the Future
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-700">
            We envision a world where everyone has the confidence to shine.
            Whether it’s through personalized fashion or flawless beauty
            services, we aim to make a positive impact on how you see and feel
            about yourself.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Meet Our Glam Squad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 mx-auto rounded-full mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-700 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Discover the Urban Glam Experience
        </h2>
        <p className="text-xl mb-8 max-w-md mx-auto">
          Join us in redefining beauty and style. Book an appointment today and
          start your transformation.
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

export default AboutUs;
