
import { blogPosts } from "../utils/Data";

const Blog = () => {
  
    return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          UrbanGlam Blog
        </h1>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-300 hover:shadow-2xl"
            >
              {/* Blog Post Image */}
              <div className="md:w-1/2 max-h-[22rem]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Blog Post Content */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between max-h-[22rem]">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2 lg:max-h-24 overflow-hidden">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                  <p className="text-gray-700 text-base mb-4 md:mb-0 max-h-32 lg:max-h-24 overflow-hidden">
                    {post.description}
                  </p>
                </div>

                {/* Read More Button */}
                <div className="mt-auto">
                  <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
