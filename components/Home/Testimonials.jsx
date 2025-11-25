// components/Testimonials.jsx
import { FaStar, FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Book Lover",
      quote: "ShelfShare has completely changed how I discover new books. I've met amazing neighbors and found hidden gems!",
      avatar: <FaUserCircle className="text-5xl text-primary" />,
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Avid Reader",
      quote: "I love being able to rent books from people nearby. It's sustainable, affordable, and supports the community.",
      avatar: <FaUserCircle className="text-5xl text-primary" />,
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Book Collector",
      quote: "Finally, a way to share my extensive collection with others! I've earned extra income while spreading the joy of reading.",
      avatar: <FaUserCircle className="text-5xl text-primary" />,
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-neutral/70">
            Real stories from real readers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-base-100 p-8 rounded-2xl shadow-lg border border-base-300"
            >
              <div className="flex items-center mb-4 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-xl" />
                ))}
              </div>
              <p className="text-neutral/80 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div>{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-neutral">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

