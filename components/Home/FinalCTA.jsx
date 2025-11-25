// components/FinalCTA.jsx
import Link from "next/link";
import { FaBook, FaArrowRight } from "react-icons/fa";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
          <p className="text-white/90 font-medium">Join Our Growing Community</p>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
          Start Your Reading<br />Journey Today
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover thousands of books in your neighborhood. Share your collection and earn extra income while building connections.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/books"
            className="group bg-white text-primary px-10 py-5 text-lg font-bold rounded-full shadow-2xl hover:shadow-white/20 transition-all hover:scale-105 flex items-center gap-3"
          >
            <FaBook className="text-xl" />
            Explore Books
            <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/add-book"
            className="group border-3 border-white text-white px-10 py-5 text-lg font-bold rounded-full hover:bg-white hover:text-primary transition-all flex items-center gap-3"
          >
            Start Sharing Books
            <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <p className="text-white/70 mt-10 text-sm">
          No credit card required • Free to join • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;

