import React from "react";
import { Play, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Salle de sport",
      description:
        "Accédez à une salle équipée avec les meilleures machines pour tous vos entraînements.",
      image: "/moovup-salle.png",
      path: "/services/salle-de-sport",
    },
    {
      title: "Piscine & Aquagym",
      description: "Cours collectifs, relaxation, natation libre.",
      image: "/Piscine-&-Aquagym.png",
      path: "/services/piscine-aquagym",
    },
    {
      title: "Bilan corporel",
      description:
        "BILAN SILHOUETTE TECHNOLOGIE INBODY + suivi nutritionnel.",
      image: "/bilan-corporel.png",
      path: "/services/bilan-corporel",
    },
    {
      title: "Coaching personnalisé",
      description: "Nos coachs experts vous accompagnent selon vos objectifs.",
      image: "/Coaching-personnalisé.png",
      path: "/services/coaching",
    },
    {
      title: "Cafétéria & Bar protéiné",
      description: "Boissons protéinées, snacks healthy, repas sportifs…",
      image: "/Cafétéria-&-Bar-protéine.png",
      path: "/services/cafeteria",
    },
    {
      title: "Boutique & Équipements",
      description: "Produits et accessoires fitness.",
      image: "/Boutique-&-équipements.png",
      path: "/services/boutique",
    },
  ];

  return (
    <section className="w-full bg-black text-white font-sans">
      {/* === Video Section === */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[70vh] overflow-hidden">
        <video
          src="/videos/moovup.mov"
          controls
          className="w-full h-full object-cover"
        />
        {/* Bouton play animé */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full bg-gray-900/70 flex items-center justify-center shadow-2xl animate-pulse opacity-90">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow" />
          </div>
        </div>
      </div>

      {/* === Services Grid === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <article
            key={idx}
            className="relative group h-[380px] sm:h-[420px] overflow-hidden"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500"></div>

            {/* Texte et bouton */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-center sm:text-left z-10">
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide drop-shadow-md mb-2">
                {service.title}
              </h2>

              <p className="text-sm sm:text-base opacity-90 mb-3">
                {service.description}
              </p>

              <button
                onClick={() => navigate(service.path)}
                className="flex items-center justify-center sm:justify-start gap-1 text-white bg-white/20 backdrop-blur-md px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/30 mt-4"
              >
                Découvrir <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="h-12 sm:h-16 bg-black"></div>
    </section>
  );
}
