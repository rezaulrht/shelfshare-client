import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "ShelfShare",
  description: "Your Neighborhood Library, Unlimited.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-body antialiased min-h-screen flex flex-col"
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
