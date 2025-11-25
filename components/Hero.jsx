"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Discover Books from Your Neighborhood",
      subtitle: "Rent, buy, or borrow",
      cta: "Explore Books",
      ctaLink: "/books",
      gradient: "linear-gradient(135deg, #2d5d4f 0%, #3a8c7c 100%)",
      backgroundImage: "/images/books1.png",
    },
    {
      id: 2,
      title: "Turn Your Bookshelf Into Income",
      subtitle: "Share what you love",
      cta: "Start Sharing",
      ctaLink: "/add-book",
      gradient: "linear-gradient(135deg, #2d5d4f 0%, #3a8c7c 100%)",
      backgroundImage: "/images/books2.png",
    },
    {
      id: 3,
      title: "Connect With Fellow Readers",
      subtitle: "Build your community",
      cta: "Join Now",
      ctaLink: "/community",
      gradient: "linear-gradient(135deg, #2d5d4f 0%, #3a8c7c 100%)",
      backgroundImage: "/images/books3.png",
    },
  ];

  if (!mounted) {
    return (
      <div className="h-[600px] bg-gradient-to-br from-[#2d5d4f] to-[#3a8c7c] flex items-center">
        <div className="hero-slide-content text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover Books from Your Neighborhood
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full flex items-center relative overflow-hidden"
              style={{ background: slide.gradient }}
            >
              {/* Background image with reduced opacity */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              ></div>

              {/* Backdrop blur overlay for depth */}
              <div className="absolute inset-0 backdrop-blur-[1px]"></div>

              {/* Content - Left aligned */}
              <div className="hero-slide-content relative z-10 text-white">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="max-w-3xl"
                >
                  <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-80 font-medium">
                    {slide.subtitle}
                  </p>
                  
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
                    {slide.title}
                  </h1>

                  <Link
                    href={slide.ctaLink}
                    className="hero-cta inline-block border-2 border-white text-white px-10 py-4 text-lg font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 relative z-10"
                  >
                    {slide.cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
