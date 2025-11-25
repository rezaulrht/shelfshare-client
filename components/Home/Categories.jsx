// components/Categories.jsx
import Link from "next/link";
import { FaBook, FaBookOpen, FaSearch, FaHeart, FaRocket, FaUser } from "react-icons/fa";

const Categories = () => {
  const categories = [
    { id: 1, name: "Fiction", icon: <FaBook />, count: "2,450 books" },
    { id: 2, name: "Non-Fiction", icon: <FaBookOpen />, count: "1,820 books" },
    { id: 3, name: "Mystery", icon: <FaSearch />, count: "980 books" },
    { id: 4, name: "Romance", icon: <FaHeart />, count: "1,340 books" },
    { id: 5, name: "Sci-Fi", icon: <FaRocket />, count: "760 books" },
    { id: 6, name: "Biography", icon: <FaUser />, count: "650 books" },
  ];

  return (
    <section className="py-20 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-neutral/70">
            Find your next favorite book
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/books?category=${category.name.toLowerCase()}`}
              className="group p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary hover:to-primary/80 border border-primary/20 hover:border-primary transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-3 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral group-hover:text-white mb-1 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-neutral/60 group-hover:text-white/80 transition-colors">
                {category.count}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

