import React from "react";

const Abonnements = () => {
  const abonnements = [
    {
      title: "Silver CDD",
      details: [
        { label: "1 Journée", price: "200 Dhs" },
        { label: "1 Semaine", price: "600 Dhs" },
        { label: "1 Mois", price: "1 200 Dhs" },
        { label: "2 Mois", price: "1 800 Dhs" },
        { label: "Trimestre", price: "2 700 Dhs" },
        { label: "Semestre", price: "3 500 Dhs" },
        { label: "Année", price: "6 000 Dhs" },
      ],
      image: "/Silver-gold.png",
      topVente: true,
    },
    {
      title: "Premium",
      details: [
        { label: "Droits d’entrée", price: "3000 Dhs" },
        { label: "Assurance", price: "600 Dhs" },
        { label: "Mensualité", price: "500 Dhs" },
      ],
      image: "/premium.png",
    },
    {
      title: "Kids",
      details: [{ label: "Abonnement Annuel", price: "6000 Dhs" }],
      image: "/kids.png",
      topVente: true,
    },
    {
      title: "Reprise",
      details: [{ label: "P1", price: "1500 Dhs" }],
      image: "/Reprise.png",
    },
    {
      title: "Pack Entreprise",
      details: [{ label: "Abonnement Annuel", price: "6 000 Dhs" }],
      image: "/pack-entreprise.png",
    },
    {
      title: "Pack Famille",
      details: [
        { label: "Couple + 1 enfant", price: "16 000 Dhs" },
        { label: "Couple + 2 enfants", price: "22 000 Dhs" },
        { label: "Couple + 3 enfants", price: "25 000 Dhs" },
      ],
      image: "/pack-family.png",
      topVente: true,
    },
    {
      title: "Pack Etudiant",
      details: [{ label: "Abonnement Annuel", price: "6 000 Dhs" }],
      image: "/pack-etudiant.png",
    },
    {
      title: "Pack Santé",
      details: [
        { label: "Coaching", price: "" },
        { label: "05 séances", price: "1250 dhs" },
        { label: "10 séances", price: "2000 dhs" },
        { label: "20 séances", price: "3500 dhs" },
        { label: "40 séances", price: "6500 dhs" },
        { label: "60 séances", price: "9000 dhs" },
        { label: "Nutrition", price: "" },
        { label: "01 séance", price: "300 dhs" },
        { label: "05 séances", price: "1300 dhs" },
        { label: "20 séances", price: "3500 dhs" },
        { label: "30 séances", price: "5000 dhs" },
        { label: "* Bilan Impedancemetre gratuite", price: "" },
      ],
      image: "/pack-santé.png",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-black pt-16 text-white px-4">
      {/* SECTION ABONNEMENTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {abonnements.map((plan, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-auto object-contain transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
            />
            <h2
              className="absolute top-2 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl uppercase tracking-wide z-20 pointer-events-none"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: "bold",
              }}
            >
              {plan.title}
            </h2>
            {/* TOP VENTE badge only for specific plans */}
            {plan.topVente && (
              <span className="absolute top-24 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold tracking-wide px-3 py-1 text-sm rounded-md select-none shadow-lg border border-yellow-500">
  TOP VENTE
</span>

            )}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 z-30 max-h-[50%] sm:max-h-[65%] overflow-auto">
              <ul className="space-y-1 text-sm sm:text-base">
                {plan.details.map((item, i) =>
                  item.price ? (
                    <li
                      key={i}
                      className="flex justify-between border-b border-gray-500 pb-1"
                    >
                      <span>{item.label}</span>
                      <span>{item.price}</span>
                    </li>
                  ) : (
                    <li key={i} className="pt-2 font-semibold">
                      {item.label}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="h-16 bg-black"></div>
    </div>
  );
};

export default Abonnements;
