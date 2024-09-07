import { testimonials } from '../utils/Data';

export const Testimonial = () => {
    return (
        <section className="max-w-2xl mx-auto bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
                <div className="flex flex-wrap justify-center gap-8">
                {/* <!-- Testimonial 1 --> */}
                {testimonials.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
                        <div className="flex items-center mb-4">
                        <img className="w-12 h-12 rounded-full object-cover" src={review.image} alt="User 1" />
                        <div className="ml-4">
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-gray-500">{review.role}</p>
                        </div>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                    </div>
                ))}
                
                </div>
            </div>
        </section>

    )
}