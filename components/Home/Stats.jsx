// components/Stats.jsx
import { FaBook, FaSmile, FaCity, FaHandshake } from "react-icons/fa";

const Stats = () => {
  const stats = [
    { id: 1, number: "10,000+", label: "Books Available", icon: <FaBook /> },
    { id: 2, number: "5,000+", label: "Happy Readers", icon: <FaSmile /> },
    { id: 3, number: "50+", label: "Cities", icon: <FaCity /> },
    { id: 4, number: "3,200+", label: "Active Lenders", icon: <FaHandshake /> },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            ShelfShare by the Numbers
          </h2>
          <p className="text-lg text-white/80">
            Join thousands of readers and book lovers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-5xl mb-3 text-white flex justify-center">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

