// src/pages/services/Boutique.jsx
import React from "react";

export default function Boutique() {
  return (
    <section className="flex flex-col lg:flex-row-reverse w-full min-h-screen bg-black text-white">
      {/* === Image Section - Mobile First === */}
      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-screen lg:sticky lg:top-0">
        <img
          src="/boutique.png"
          alt="Boutique Moov'Up - Vêtements et équipements sportifs"
          className="w-full h-full object-cover"
        />
      </div>

      {/* === Content Section - Optimisé Mobile === */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12 space-y-4 sm:space-y-5">
        {/* Titre Principal */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
          Boutique & Équipements
        </h1>

        {/* Paragraphes */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Complétez votre expérience sportive avec la boutique{" "}
            <span className="font-semibold text-white">Moov'Up</span>, dédiée à la performance, 
            au confort et au style. Vous y trouverez une sélection d'articles sportifs de qualité, 
            choisis pour répondre aux besoins de tous les niveaux — du débutant au sportif confirmé.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Tenues de sport, accessoires, compléments et équipements : tout est réuni pour vous 
            permettre de vous entraîner dans les meilleures conditions et atteindre vos objectifs 
            avec efficacité.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Notre équipe est à votre écoute pour vous conseiller sur les produits les plus adaptés 
            à votre pratique et à votre morphologie.
          </p>
        </div>

        {/* Section Produits */}
        <div className="mt-4 sm:mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
            À découvrir dans notre boutique :
          </h2>
          
          <ul className="list-disc list-inside text-gray-300 space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li className="leading-relaxed">Vêtements et chaussures de sport</li>
            <li className="leading-relaxed">Accessoires fitness & musculation</li>
            <li className="leading-relaxed">Gants, serviettes, gourdes et sacs de sport</li>
            <li className="leading-relaxed">Compléments nutritionnels & barres protéinées</li>
            <li className="leading-relaxed">Produits exclusifs Moov'Up</li>
          </ul>
        </div>

        {/* Call to Action Mobile - Optionnel */}
        <div className="lg:hidden mt-6 pt-4 border-t border-gray-700">
          <button className="w-full bg-white text-black py-3 px-6 font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            Découvrir la boutique
          </button>
        </div>
      </div>
    </section>
  );
}