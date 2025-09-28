import React, { useEffect, useRef, useState } from "react";
import { Activity, Heart, Users, Sparkles, Dumbbell } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Apropos() {
  // animation refs
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // services with colors
  const services = [
    {
      id: 1,
      title: "MOOV'UP FITNESS",
      desc: "Cardio & fitness pour rester en forme.",
      color: "#e86f2a", // moovup
    },
    {
      id: 2,
      title: "MOOV'UP POWER GYM",
      desc: "Musculation & force pour dépasser vos limites.",
      color: "#e30613", // power gym
    },
    {
      id: 3,
      title: "LADY MOOV'UP",
      desc: "Un espace 100% femmes, confort et sérénité.",
      color: "#bc235b", // lady
    },
    {
      id: 4,
      title: "EVOLVE HOMMES",
      desc: "Programme haut de gamme réservé aux hommes.",
      color: "#2a3d93", // evolve
    },
    {
      id: 5,
      title: "ANAIS SERVICE",
      desc: "Coaching, nutrition & bien-être personnalisés.",
      color: "#315686", // anais
    },
    
  ];

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-black via-gray-900 to-black py-16">
      {/* RIGHT: Contenu + Services */}
      <div className="flex items-start lg:items-center justify-center px-6 sm:px-12 lg:px-16 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl space-y-10"
        >
          {/* Titre */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            À propos de{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
              Moov'Up
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></span>
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
  <span className="font-semibold text-gray-200">Le Complexe Moov’Up Sports</span>{" "}
  regroupe plusieurs espaces spécialisés pour répondre aux besoins de chacun,
  que vous soyez <span className="font-medium text-white">débutant</span>,{" "}
  <span className="font-medium text-white">passionné de fitness</span>,{" "}
  <span className="font-medium text-white">amateur de musculation</span>,<br/>ou à
  la recherche de <span className="font-medium text-white">services personnalisés</span>.
</p>

<h3 className="mt-4 text-xl font-semibold text-white">
  <span className="relative">
    Nos Espaces
    <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></span>
  </span>
</h3>


          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <motion.div
                key={s.id}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative flex items-start gap-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-5 shadow-lg backdrop-blur-md hover:shadow-xl"
                style={{
                  transition: "all 0.3s ease",
                }}
              >
                

                {/* Texte */}
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-wide">
                    {s.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1 leading-snug">
                    {s.desc}
                  </p>
                </div>

                {/* Hover overlay color */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition"
                  style={{ backgroundColor: s.color }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LEFT : vidéo style image, full height */}
      <div className="relative w-full h-full">
        <video
          src="/videos/moovup.mov"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-none lg:rounded-l-xl"
        />
        {/* Overlay facultatif */}
        <div className="absolute inset-0 bg-black/40 lg:rounded-l-xl" />
      </div>
    </section>
  );
}
