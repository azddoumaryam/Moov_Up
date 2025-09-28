import React, { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroSlider() {
  const slides = [
    {
      key: "application",
      title: "TELECHARGER L'APPLICATION",
      image: "/herotele.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
    },
    {
      key: "fitness",
      title: "MOOV'UP FITNESS",
      image: "/moovup_fitness.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://moovuppowergym.com",
    },
    {
      key: "power gym",
      title: "MOOV'UP POWER GYM",
      image: "/power_gym.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://moovuppowergym.com",
    },
    {
      key: "lady",
      title: "LADY MOOV'UP",
      image: "/lady-moovup.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://anaisbeautyclinic.com",
    },
    {
      key: "evolve",
      title: "EVOLVE HOMMES",
      image: "/evolve-moovup.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://evolvehomme.com/",
    },
    {
      key: "anais",
      title: "ANAIS SERVICE",
      image: "/Aianis_service.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://anaisbeautyclinic.com",
    },
    {
      key: "application",
      title: "TELECHARGER L'APPLICATION",
      image: "/herotele.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
    },
    {
      key: "fitness",
      title: "MOOV'UP FITNESS",
      image: "/moovup_fitness.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://moovuppowergym.com",
    },
    {
      key: "power gym",
      title: "MOOV'UP POWER GYM",
      image: "/power_gym.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://moovuppowergym.com",
    },
    {
      key: "lady",
      title: "LADY MOOV'UP",
      image: "/lady-moovup.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://anaisbeautyclinic.com",
    },
    {
      key: "evolve",
      title: "EVOLVE HOMMES",
      image: "/evolve-moovup.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://evolvehomme.com/",
    },
    {
      key: "anais",
      title: "ANAIS SERVICE",
      image: "/Aianis_service.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://anaisbeautyclinic.com",
    },
    {
      key: "application",
      title: "TELECHARGER L'APPLICATION",
      image: "/herotele.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
    },
    {
      key: "fitness",
      title: "MOOV'UP FITNESS",
      image: "/moovup_fitness.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://moovuppowergym.com",
    },
    {
      key: "power gym",
      title: "MOOV'UP POWER GYM",
      image: "/power_gym.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://moovuppowergym.com",
    },
    {
      key: "lady",
      title: "LADY MOOV'UP",
      image: "/lady-moovup.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://anaisbeautyclinic.com",
    },
    {
      key: "evolve",
      title: "EVOLVE HOMMES",
      image: "/evolve-moovup.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://evolvehomme.com/",
    },
    {
      key: "anais",
      title: "ANAIS SERVICE",
      image: "/Aianis_service.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://anaisbeautyclinic.com",
    },
    
  ];

  const themeClasses = {
    gray: {
      btn: "bg-gray-600 hover:backdrop-blur-md hover:brightness-110",
      arrow: "hover:blur-sm",
    },
  };

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const [current, setCurrent] = useState(1);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // auto slide
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);
  };
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: current * window.innerWidth,
        behavior: "smooth",
      });
    }
  }, [current]);

  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        sliderRef.current.scrollTo({
          left: window.innerWidth,
          behavior: "auto",
        });
        setCurrent(1);
      }, 500);
    }
    if (current === 0) {
      setTimeout(() => {
        sliderRef.current.scrollTo({
          left: slides.length * window.innerWidth,
          behavior: "auto",
        });
        setCurrent(slides.length);
      }, 500);
    }
  }, [current, extendedSlides.length, slides.length]);

  // === Bandeau promotionnel une à une ===
  const promoImages = ["/promo 1.png", "/promo 2.png","/banner.png"];
  const promoLinks = ["https://anaisbeautyclinic.com", "https://moovuppowergym.com/evolve/"];
  const [currentPromo, setCurrentPromo] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const promoInterval = setInterval(() => {
      setAnimate(false); // Reset animation
      setTimeout(() => {
        setCurrentPromo((prev) => (prev + 1) % promoImages.length);
        setAnimate(true); // Trigger animation
      }, 100);
    }, 4000);
    return () => clearInterval(promoInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex w-full h-screen snap-x snap-mandatory overflow-x-hidden"
      >
        {extendedSlides.map((slide, idx) => {
          const theme = themeClasses[slide.theme];

          return (
            <section
              key={idx + slide.key}
              className="relative w-full min-w-full h-full flex items-center justify-center snap-center bg-gray-900"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${slide.overlayFrom} to-transparent`}
                />
              </div>

              {/* Content */}
              <div className="relative z-30 text-center px-6 py-12 md:px-12">
                <h1
                  className="text-white text-4xl md:text-6xl lg:text-7xl font-crospor font-bold tracking-tight "
                >
                  {slide.title}
                </h1>

                {slide.key === "application" ? (
                  <div className="flex flex-col items-center mt-4">
                    {/* Paragraph */}
                    <p className="text-white text-lg md:text-xl font-medium mb-10">
                      Téléchargez notre application mobile dès maintenant !
                    </p>

                    {/* Store buttons */}
                    <div className="flex justify-center gap-6">
                      <a
                        href="https://apps.apple.com/app"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={stopAutoSlide}
                        onMouseLeave={startAutoSlide}
                      >
                        <img
                          src="/appstore.png"
                          alt="App Store"
                          className="h-12 md:h-14 hover:scale-105 transition-transform"
                        />
                      </a>
                      <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={stopAutoSlide}
                        onMouseLeave={startAutoSlide}
                      >
                        <img
                          src="/playstore.png"
                          alt="Google Play"
                          className="h-12 md:h-14 hover:scale-105 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                ) : (
                  <a
                    href={slide.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      className={`${theme.btn} text-white px-8 py-2 rounded-full text-lg 
        font-crospor font-semibold shadow-lg hover:shadow-xl
        transition-all duration-300 transform hover:scale-105
        inline-block relative z-50 bg-white/20 backdrop-blur-md mt-6`}
                  >
                    DISCOVER
                  </a>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-6 z-20">
        <button
          onClick={() => setCurrent((prev) => prev - 1)}
          className="text-white text-2xl hover:text-gray-300 transition-colors duration-200"
        >
          <ArrowLeft strokeWidth={1.5} />
        </button>
        <button
          onClick={() => setCurrent((prev) => prev + 1)}
          className="text-white text-2xl hover:text-gray-300 transition-colors duration-200"
        >
          <ArrowRight strokeWidth={1.5} />
        </button>
      </div>

      {/* Bandeau Promotionnel */}
      <a
        href={promoLinks[currentPromo]}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-20 left-4 flex flex-col gap-4 sm:bottom-24 md:bottom-28"
      >
        <div className="relative">
        <img
  src={promoImages[currentPromo]}
  alt="Promotion"
  loading="lazy"
  className={`h-32 sm:h-40 md:h-52 lg:h-52 w-auto rounded-2xl shadow-2xl hover:scale-110 transition-all duration-1000 ease-in-out promo-hover promo-border cursor-pointer ${animate ? "animate-slideUp" : ""
    }`}
/>

        </div>
      </a>
    </div>
  );
}
