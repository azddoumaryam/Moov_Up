// src/pages/services/CoachingPerso.jsx
import React from "react";

export default function Coaching() {
  return (
    <section className="flex flex-col lg:flex-row-reverse w-full min-h-screen bg-black text-white">
      {/* === Image Section - Mobile First === */}
      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-screen lg:sticky lg:top-0">
        <img
          src="/Coaching-personnalisé-255.png"
          alt="Coaching personnalisé Moov'Up - Accompagnement sportif sur mesure"
          className="w-full h-full object-cover"
        />
      </div>

      {/* === Content Section - Optimisé Mobile === */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12 space-y-4 sm:space-y-5">
        {/* Titre Principal */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
          Coaching Personnalisé
        </h1>

        {/* Paragraphes */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Atteignez vos objectifs avec un accompagnement sur mesure au{" "}
            <span className="font-semibold text-white">Complexe Moov'Up</span>.
            Nos coachs professionnels vous guident pas à pas pour transformer votre corps, 
            booster votre énergie et adopter un mode de vie sain et durable.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Chaque séance est conçue en fonction de votre niveau, de vos besoins et de vos 
            objectifs personnels : perte de poids, prise de masse, tonification, préparation 
            physique ou remise en forme.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Notre mission : vous motiver, vous encadrer et vous aider à dépasser vos limites, 
            dans une ambiance positive et stimulante.
          </p>
        </div>

        {/* Liste des avantages */}
        <div className="mt-4 sm:mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
            Notre accompagnement comprend :
          </h2>
          
          <ul className="list-disc list-inside text-gray-300 space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li className="leading-relaxed">Bilan initial complet & définition d'objectifs clairs</li>
            <li className="leading-relaxed">Plan d'entraînement 100 % personnalisé</li>
            <li className="leading-relaxed">Suivi régulier et ajustements selon vos progrès</li>
            <li className="leading-relaxed">Conseils en nutrition, récupération et bien-être</li>
            <li className="leading-relaxed">Coaching individuel ou en petit groupe</li>
          </ul>
        </div>

        {/* Call to Action Mobile - Optionnel */}
        <div className="lg:hidden mt-6 pt-4 border-t border-gray-700">
          <button className="w-full bg-white text-black py-3 px-6 font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            Réserver un coaching
          </button>
        </div>
      </div>
    </section>
  );
}