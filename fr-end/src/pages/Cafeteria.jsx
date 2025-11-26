// src/pages/services/Cafeteria.jsx
import React from "react";

export default function Cafeteria() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen bg-black text-white">
      {/* === Image Section - Mobile First === */}
      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-screen lg:sticky lg:top-0">
        <img
          src="/Cafétéria-&-Bar-protéiné.png"
          alt="Cafétéria Moov'Up - Espace détente et bar protéiné"
          className="w-full h-full object-cover"
        />
      </div>

      {/* === Content Section - Optimisé Mobile === */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12 space-y-4 sm:space-y-5">
        {/* Titre Principal */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
          Cafétéria & Bar Protéiné
        </h1>

        {/* Paragraphes */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Après l'effort, place au confort et à la récupération dans notre espace{" "}
            <span className="font-semibold text-white">Cafétéria & Bar Protéiné</span>. 
            Un lieu convivial pensé pour vous détendre, recharger vos batteries et savourer 
            des boissons saines et gourmandes adaptées à votre mode de vie actif.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Découvrez notre sélection de shakes protéinés, smoothies énergétiques, 
            snacks équilibrés et repas légers préparés avec des ingrédients frais et 
            de qualité. Idéal pour optimiser votre récupération, favoriser la performance 
            et prendre soin de votre corps tout en vous faisant plaisir.
          </p>
        </div>

        {/* Liste des services */}
        <div className="mt-4 sm:mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
            Nos services :
          </h2>
          
          <ul className="list-disc list-inside text-gray-300 space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li className="leading-relaxed">Shakes et smoothies protéinés sur mesure</li>
            <li className="leading-relaxed">Collations healthy & repas équilibrés</li>
            <li className="leading-relaxed">Cafés, thés et jus naturels</li>
            <li className="leading-relaxed">Ambiance détente et espace lounge</li>
            <li className="leading-relaxed">Conseils nutritionnels de nos coachs</li>
          </ul>
        </div>

        {/* Call to Action Mobile - Optionnel */}
        <div className="lg:hidden mt-6 pt-4 border-t border-gray-700">
          <button className="w-full bg-white text-black py-3 px-6 font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            Découvrir le menu
          </button>
        </div>
      </div>
    </section>
  );
}