// src/pages/services/BilanCorporel.jsx
import React from "react";

export default function BilanCorporel() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen bg-black text-white">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen lg:sticky lg:top-0">
        <img
          src="/bilan.png"
          alt="Bilan corporel avec technologie InBody"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-8 lg:py-12 space-y-4 lg:space-y-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
          Bilan Silhouette & Technologie InBody + Suivi Nutritionnel
        </h1>

        <div className="space-y-4 lg:space-y-5">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Au Complexe <span className="font-semibold text-white">Moov'Up</span>, 
            nous combinons technologie de pointe et expertise nutritionnelle pour vous aider 
            à atteindre vos objectifs santé et forme.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Grâce à l'analyseur <span className="text-white font-medium">InBody</span>, 
            bénéficiez d'un bilan précis de votre composition corporelle : masse musculaire, 
            masse graisseuse, hydratation, métabolisme de base, et plus encore.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Cette technologie professionnelle offre une vision complète de votre silhouette, 
            vous permettant de mesurer vos progrès réels et d'adapter votre programme en toute confiance.
          </p>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-4 mb-3">
              Notre accompagnement personnalisé
            </h2>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Après votre bilan, nos coachs et nutritionnistes établissent un plan alimentaire 
              sur mesure et un suivi régulier pour optimiser vos résultats. Ensemble, nous créons 
              une approche équilibrée entre alimentation, entraînement et bien-être.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-4 mb-3">
              Ce que comprend votre séance :
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg">
              <li>Analyse complète InBody (graisse, muscle, eau, métabolisme)</li>
              <li>Interprétation des résultats par un expert</li>
              <li>Élaboration d'un plan nutritionnel personnalisé</li>
              <li>Suivi évolutif pour ajuster votre programme selon vos progrès</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}