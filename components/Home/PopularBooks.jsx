// components/PopularBooks.jsx
import Link from "next/link";

const PopularBooks = () => {
  const books = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$3/week",
      image: "/images/books1.png",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: "$2/week",
      image: "/images/books2.png",
    },
    {
      id: 3,
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: "$4/week",
      image: "/images/books3.png",
    },
    {
      id: 4,
      title: "The Seven Husbands",
      author: "Taylor Jenkins Reid",
      price: "$3/week",
      image: "/images/books1.png",
    },
    {
      id: 5,
      title: "Educated",
      author: "Tara Westover",
      price: "$2/week",
      image: "/images/books2.png",
    },
    {
      id: 6,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: "$3/week",
      image: "/images/books3.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Popular Books
          </h2>
          <p className="text-lg text-neutral/70">
            Discover what your neighbors are reading
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <figure className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${book.image})` }}
                ></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title font-heading text-neutral">
                  {book.title}
                </h3>
                <p className="text-sm text-neutral/60">{book.author}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="badge badge-primary text-white px-4 py-3">
                    {book.price}
                  </div>
                  <Link
                    href="/books"
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/books"
            className="btn btn-primary text-white px-8 py-3"
          >
            Browse All Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
