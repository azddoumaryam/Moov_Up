import React from 'react';

const Planning = ({
  bgImagePath = '/planning.jpg',
  pdfs = [
    '/planning lady rentree.pdf',
    '/planning men rentree.pdf',
    '/planning kids rentree.pdf',
  ],
}) => {
  const openPdf = (url) => {
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section
      aria-label="Planning"
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center"
      style={{ backgroundImage: `url(${bgImagePath})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-6 py-20">
        {[
          {
            title: 'Planning Lady – Rentrée',
            desc: 'Une nouvelle saison pour reprendre le rythme, se recentrer et se sentir belle. Entre énergie, bien-être et élégance — la rentrée commence avec vous.',
            pdf: pdfs[0],
          },
          {
            title: 'Planning Men – Rentrée',
            desc: 'Nouvelle saison, nouveau départ. Remettez-vous en forme, retrouvez votre équilibre et démarrez la rentrée avec confiance et style.',
            pdf: pdfs[1],
          },
          {
            title: 'Planning Kids – Rentrée',
            desc: 'C’est la reprise ! Place à l’énergie, à la découverte et à la bonne humeur. Des activités ludiques et sportives pour bien commencer l’année et s’épanouir en s’amusant.',
            pdf: pdfs[2],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative bg-transparent border border-white/25 rounded-none p-8 text-center overflow-hidden cursor-pointer transition-all"
            onClick={() => openPdf(item.pdf)}
          >
            {/* Hover white background effect */}
            <div className="absolute inset-0 bg-white/90 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center z-0"></div>
            <div className="relative z-10 transition-colors duration-500 group-hover:text-black text-white">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-sm md:text-base mb-6 text-white/90 group-hover:text-gray-700 transition-colors duration-500">
                {item.desc}
              </p>
              <span className="font-semibold underline underline-offset-4 group-hover:text-black cursor-pointer">
                Discover PDF {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Infos Row - left/right align */}
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 mb-4 px-6 text-white text-sm gap-4 sm:gap-0">
  {/* Left */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
    <span className="ml-0 sm:ml-2">Nos marques :</span>
    <div className="flex space-x-2 sm:space-x-3">
      <img src="/logo-hammer5548.png" alt="Hammer Strength" className="h-10 sm:h-12" />
      <img src="/logo-hammer-strength.png" alt="Technogym" className="h-10 sm:h-12" />
      <img src="/logo-hammer8774.png" alt="Eleiko" className="h-10 sm:h-12" />
    </div>
  </div>

  {/* Right block */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
      <span className="inline-block h-3 w-3 rounded-full bg-white" />
      <span className="font-semibold">ÉQUIPEMENT HAUT DE GAMME</span>
      <span className="text-gray-400 text-xs sm:text-sm">Technogym & Hammer Strength</span>
    </div>
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
      <span className="inline-block h-3 w-3 rounded-full bg-white" />
      <span className="font-semibold">OUVERT 7J/7</span>
      <span className="text-gray-400 text-xs sm:text-sm">Vous gardez le contrôle</span>
    </div>
  </div>
</div>

    </section>
  );
};

export default Planning;
