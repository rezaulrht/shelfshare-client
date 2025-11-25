// components/HowItWorks.jsx
import { FaSearch, FaBook, FaStar } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaSearch className="text-6xl text-primary" />,
      title: "Browse Books",
      description: "Explore thousands of books from your neighborhood. Filter by genre, author, or distance.",
    },
    {
      id: 2,
      icon: <FaBook className="text-6xl text-primary" />,
      title: "Rent, Buy, or Borrow",
      description: "Choose how you want to read. Rent for a week, buy to keep, or borrow for free from neighbors.",
    },
    {
      id: 3,
      icon: <FaStar className="text-6xl text-primary" />,
      title: "Enjoy Reading",
      description: "Pick up your book and start reading. Return when done or keep it in your collection forever.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            Start your reading journey in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="text-center p-8 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">{step.icon}</div>
              <div className="inline-block bg-primary/10 text-primary font-bold text-sm px-3 py-1 rounded-full mb-4">
                Step {step.id}
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral mb-3">
                {step.title}
              </h3>
              <p className="text-neutral/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

