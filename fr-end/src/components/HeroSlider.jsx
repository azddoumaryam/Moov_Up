import React, { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroSlider() {
  const slides = [
    {
      key: "application",
      title: "TELECHARGER L'APPLICATION",
      image: "/img-app.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
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
      title: "ANAIS BEAUTY",
      image: "/Aianis_service.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://anaisbeautyclinic.com",
    },
    {
      key: "application",
      title: "TELECHARGER L'APPLICATION",
      image: "/img-app.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
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
      title: "ANAIS BEAUTY",
      image: "/Aianis_service.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
      link: "https://anaisbeautyclinic.com",
    },
    {
      key: "application",
      title: "TELECHARGER L'APPLICATION",
      image: "/img-app.png",
      overlayFrom: "from-gray-900/80",
      headingFrom: "from-gray-200",
      theme: "gray",
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
      title: "ANAIS BEAUTY",
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

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 8000);
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
        sliderRef.current.scrollTo({ left: window.innerWidth, behavior: "auto" });
        setCurrent(1);
      }, 500);
    }
    if (current === 0) {
      setTimeout(() => {
        sliderRef.current.scrollTo({ left: slides.length * window.innerWidth, behavior: "auto" });
        setCurrent(slides.length);
      }, 500);
    }
  }, [current, extendedSlides.length, slides.length]);

  const sideIcons = [
    "/Capture.png455.png",
    "/Capture5488.png",
    "/Capture452776.png",
    "/Capture745555.png",
    "/Capture778455.png",
    "/Capture7419555.png",
    "/Capture7455965.png",
    "/Capture74112245.png",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex w-full h-screen snap-x snap-mandatory overflow-x-hidden"
      >
        {extendedSlides.map((slide, idx) => {
          const theme = themeClasses[slide.theme];

          // Slide "application" avec content à gauche + bloc orange en bas/center
          if (slide.key === "application") {
            return (
              <section
                key={idx + slide.key}
                className="relative w-full min-w-full h-screen flex flex-col md:flex-row snap-center bg-black"
              >
                {/* Content à gauche */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-24 py-10 md:py-20 z-30 text-white">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-crospor font-bold mb-4 sm:mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-4 text-gray-100">
                    Découvrez notre application mobile pensée pour vous offrir une expérience simple,
                    fluide et intuitive. Accédez à toutes vos fonctionnalités en un seul clic et restez
                    connecté où que vous soyez.
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4">
                    Installation rapide, mises à jour régulières et support client disponible 24h/24 et 7j/7
                    pour vous accompagner à chaque étape.
                  </p>

                  <div className="flex gap-2 sm:gap-4 mt-4 items-center">
                    <a href="https://apps.apple.com/app" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/playstore.png"
                        alt="App Store"
                        className="h-8 sm:h-10 md:h-12 hover:scale-105 transition-transform"
                      />
                    </a>
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/appstore.png"
                        alt="Google Play"
                        className="h-8 sm:h-10 md:h-12 hover:scale-105 transition-transform"
                      />
                    </a>
                  </div>
                </div>

                {/* Image à droite */}
                <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-full flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="object-cover w-full h-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${slide.overlayFrom} to-transparent`} />
                </div>
              </section>
            );
          }

          // Les autres slides
          return (
            <section
              key={idx + slide.key}
              className="relative w-full min-w-full h-screen flex items-center justify-center snap-center bg-gray-900"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${slide.overlayFrom} to-transparent`} />
              </div>

              <div className="relative z-30 text-center px-4 sm:px-8 md:px-12 py-12 md:py-20">
                <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-crospor font-bold tracking-tight">
                  {slide.title}
                </h1>
                {slide.link && (
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={stopAutoSlide}
                    onMouseLeave={startAutoSlide}
                    className={`${theme.btn} text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-lg
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
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 z-20">
        <button
          onClick={() => setCurrent((prev) => prev - 1)}
          className="text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors duration-200"
        >
          <ArrowLeft strokeWidth={1.5} />
        </button>
        <button
          onClick={() => setCurrent((prev) => prev + 1)}
          className="text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors duration-200"
        >
          <ArrowRight strokeWidth={1.5} />
        </button>
      </div>

      {/* Side icons */}
      {extendedSlides[current]?.key !== "application" && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 p-2 sm:p-4 rounded-xl shadow-xl z-30">
          {sideIcons.map((iconSrc, index) => (
            <div
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-black/5 backdrop-blur-md cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <img
                src={iconSrc}
                alt={`Icon ${index + 1}`}
                className="max-w-[80%] max-h-[80%] object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
