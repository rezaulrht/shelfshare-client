// app/page.js
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <Hero />


      {/* RECENT BOOKS SECTION (Static Placeholder) */}
      <div className="px-10 py-20 bg-base-200">
        <h2 className="text-3xl font-heading text-primary mb-10 text-center">Fresh on the Shelf</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
            <figure className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
               Book Cover
            </figure>
            <div className="card-body">
              <h2 className="card-title font-heading">The Great Gatsby</h2>
              <p>F. Scott Fitzgerald</p>
              <div className="card-actions justify-end">
                <div className="badge badge-accent text-white">Rent $2</div>
              </div>
            </div>
          </div>
           {/* Add more cards if you want */}
        </div>
      </div>
    </div>
  );
}