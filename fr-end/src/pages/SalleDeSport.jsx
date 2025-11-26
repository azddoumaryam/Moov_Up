// src/pages/services/SalleDeSport.jsx
import React from "react";

export default function SalleDeSport() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen bg-black text-white">
      {/* === Image Section - Mobile First === */}
      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-screen lg:sticky lg:top-0">
        <img
          src="/Salle-de-sport.png"
          alt="Salle de sport Moov'Up - Équipements fitness et musculation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* === Content Section - Optimisé Mobile === */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12 space-y-4 sm:space-y-5">
        {/* Titre Principal */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
          Salle de Sport
        </h1>

        {/* Paragraphes */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Bienvenue dans l'univers forme, énergie et performance du Complexe{" "}
            <span className="text-white font-semibold">Moov'Up</span>.  
            Notre salle de sport moderne est équipée des dernières technologies 
            de fitness pour vous permettre de vous entraîner dans les meilleures conditions.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Que vous soyez débutant ou confirmé, nos coachs vous accompagnent 
            pour atteindre vos objectifs : prise de muscle, perte de poids, 
            endurance, tonification ou simple remise en forme.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Un espace conçu pour tous les styles d'entraînement : Cardio, 
            musculation, circuit training, stretching, ou encore cours collectifs — 
            tout est réuni pour vous aider à progresser à votre rythme, dans une 
            ambiance motivante et conviviale.
          </p>
        </div>

        {/* Liste des atouts */}
        <div className="mt-4 sm:mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
            Nos atouts :
          </h2>
          
          <ul className="list-disc list-inside text-gray-300 space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li className="leading-relaxed">Équipements haut de gamme dernière génération</li>
            <li className="leading-relaxed">Espace cardio & musculation complet</li>
            <li className="leading-relaxed">Coaching et programmes personnalisés</li>
            <li className="leading-relaxed">Cours collectifs variés et dynamiques</li>
            <li className="leading-relaxed">Ambiance motivante, esprit club et confort optimal</li>
          </ul>
        </div>

        {/* Call to Action Mobile - Optionnel */}
        <div className="lg:hidden mt-6 pt-4 border-t border-gray-700">
          <button className="w-full bg-red-600 text-white py-3 px-6 font-semibold text-lg hover:bg-red-700 transition-colors duration-300 rounded-lg">
            Voir les équipements
          </button>
          <p className="text-center text-gray-300 text-sm mt-2">
            Ouvert 7j/7 • Accès illimité
          </p>
        </div>
      </div>
    </section>
  );
}