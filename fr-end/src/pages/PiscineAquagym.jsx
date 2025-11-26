// src/pages/services/PiscineAquagym.jsx
import React from "react";

export default function PiscineAquagym() {
  return (
    <section className="flex flex-col lg:flex-row-reverse w-full min-h-screen bg-black text-white">
      {/* === Image Section - Mobile First === */}
      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-screen lg:sticky lg:top-0">
        <img
          src="/piscine.png"
          alt="Piscine Moov'Up - Espace aquatique et aquagym"
          className="w-full h-full object-cover"
        />
      </div>

      {/* === Content Section - Optimisé Mobile === */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12 bg-[#0f172a] space-y-4 sm:space-y-5">
        {/* Titre Principal */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
          Piscine & Aquagym
        </h1>

        {/* Paragraphes */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Plongez dans un univers de bien-être, détente et tonus au cœur du{" "}
            <span className="font-semibold text-white">Complexe Moov'Up</span>. 
            Notre espace aquatique est conçu pour vous offrir une expérience 
            sportive complète, alliant plaisir de l'eau et entraînement efficace.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            L'<span className="font-semibold text-white">Aquagym</span>, c'est le sport 
            en douceur qui tonifie, affine et revitalise le corps sans impact sur les 
            articulations. Accessible à tous les niveaux, elle permet de brûler des 
            calories, stimuler la circulation et renforcer les muscles tout en profitant 
            d'une sensation de légèreté incomparable.
          </p>
        </div>

        {/* Liste des atouts */}
        <div className="mt-4 sm:mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
            Les atouts de notre espace aquatique :
          </h2>
          
          <ul className="list-disc list-inside text-gray-300 space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li className="leading-relaxed">Piscine chauffée et parfaitement entretenue</li>
            <li className="leading-relaxed">Séances d'aquagym encadrées par des coach spécialisés</li>
            <li className="leading-relaxed">Ambiance conviviale et dynamique</li>
            <li className="leading-relaxed">Activités adaptées à tous les âges et niveaux</li>
            <li className="leading-relaxed">
              Bienfaits garantis sur la forme, la détente et la récupération
            </li>
          </ul>
        </div>

        {/* Call to Action Mobile - Optionnel */}
        <div className="lg:hidden mt-6 pt-4 border-t border-gray-600">
          <button className="w-full bg-cyan-500 text-white py-3 px-6 font-semibold text-lg hover:bg-cyan-600 transition-colors duration-300 rounded-lg">
            Voir les horaires
          </button>
          <p className="text-center text-gray-300 text-sm mt-2">
            Piscine chauffée à 28°C toute l'année
          </p>
        </div>
      </div>
    </section>
  );
}