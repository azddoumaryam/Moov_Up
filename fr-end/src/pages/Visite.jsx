import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  User,
  Mail,
  Phone,
  Type,
  MessageSquare,
  Send,
  MapPin,
} from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Visite = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("https://159.69.81.212:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorText = await res.text(); // Jib l-risposta kima text
        throw new Error(errorText || "Erreur lors de l'envoi !");
      }

      const data = await res.json();
      if (data.success) {
        alert("Message envoyé et sauvegardé ✅");
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          telephone: "",
          sujet: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Erreur inconnue");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const position = [30.4289548, -9.5645803];
  const googleMapsLink = `https://maps.app.goo.gl/E7p7sGTGPdW2jKvM6`;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Bloc image + form */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 py-16 bg-black">
        {/* Colonne gauche (Image + Overlay) */}
        <div className="relative flex items-center justify-center bg-black h-full">
          <img
            src="/visite.png"
            alt="Moov'Up Fitness"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />
          <div className="relative z-10 text-center px-8 md:px-16 py-12">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
              Complexe <span className="text-gray-400"> Moov'Up </span>fitness
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
              Réservez une visite et rejoignez notre salle de sport Moov-Up !
            </p>
          </div>
        </div>

        {/* Colonne droite (Formulaire) */}
        <div className="flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-10 lg:p-20 h-full">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl space-y-8 animate-fadeIn"
          >
            {error && (
              <div className="mb-6 text-red-400 text-center font-medium bg-red-900/30 border border-red-700 rounded-lg py-3">
                {error}
              </div>
            )}

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["prenom", "nom", "email", "telephone"].map((field) => (
                <div
                  key={field}
                  className="flex items-center bg-gray-900/50 border border-gray-700 rounded-2xl px-6 py-5 transition focus-within:border-gray-400 hover:scale-[1.02] duration-200"
                >
                  {{
                    prenom: <User className="w-6 h-6 text-gray-400 mr-3" />,
                    nom: <User className="w-6 h-6 text-gray-400 mr-3" />,
                    email: <Mail className="w-6 h-6 text-gray-400 mr-3" />,
                    telephone: <Phone className="w-6 h-6 text-gray-400 mr-3" />,
                  }[field]}
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "telephone"
                        ? "tel"
                        : "text"
                    }
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-white placeholder-gray-500 text-lg"
                    required={field !== "telephone"}
                  />
                </div>
              ))}
            </div>

            {/* Sujet */}
            <div className="flex items-center bg-gray-900/50 border border-gray-700 rounded-2xl px-6 py-5 transition focus-within:border-gray-400 hover:scale-[1.02] duration-200">
              <Type className="w-6 h-6 text-gray-400 mr-3" />
              <input
                type="text"
                name="sujet"
                placeholder="Sujet"
                value={formData.sujet}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder-gray-500 text-lg"
                required
              />
            </div>

            {/* Message */}
            <div className="flex items-start bg-gray-900/50 border border-gray-700 rounded-2xl px-6 py-5 transition focus-within:border-gray-400 hover:scale-[1.02] duration-200">
              <MessageSquare className="w-6 h-6 text-gray-400 mr-3 mt-1" />
              <textarea
                name="message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-transparent outline-none text-white placeholder-gray-500 text-lg resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white py-5 rounded-2xl font-bold shadow-lg hover:from-gray-700 hover:to-gray-600 disabled:opacity-50 transition-all flex justify-center items-center gap-3 text-xl"
            >
              <Send className="w-6 h-6" />
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="w-full mt-12 mb-16">
        <div className="flex justify-center mb-4">
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-lg text-white hover:bg-white/30 transition"
          >
            <MapPin className="w-5 h-5" />
            Voir sur Google Maps
          </a>
        </div>

        <MapContainer
          center={position}
          zoom={17}
          style={{ height: "40vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap"
          />
          <Marker position={position}>
            <Popup>
              📍 <b>Moov Up Power Gym</b>
              <br />
              Weekdays: 06:00 - 22:00
              <br />
              Saturday: 08:00 - 20:00
              <br />
              Sunday: 10:00 - 14:00
            </Popup>
          </Marker>
        </MapContainer>

        <div className="mt-8 text-center space-y-3">
          <div className="flex justify-center gap-6 text-lg text-gray-300 mt-3">
            <p>
              Email :{" "}
              <a
                href="mailto:clubmoovup@gmail.com"
                className="text-white font-sans hover:underline"
              >
                clubmoovup@gmail.com
              </a>
            </p>
            <p>
              Téléphone :{" "}
              <a
                href="tel:0528230011"
                className="text-white font-sans hover:underline"
              >
                05282-30011
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visite;