import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Edit3,
  MessageSquare,
  Paperclip,
  Send,
} from "lucide-react";

const Carrier = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    cv: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const data = new FormData();
      for (let key in formData) {
        data.append(key, formData[key]);
      }

      const res = await fetch("https://159.69.81.212:4000/api/candidates", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Erreur serveur");
      }

      const result = await res.json();
      if (result.success) {
        alert("Candidature envoyée avec succès ✅");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          cv: null,
        });
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 py-16 bg-black">
      {/* Colonne gauche (Image + texte) */}
      <div className="relative flex items-center justify-center bg-black">
        <img
          src="/carrier.png"
          alt="Moov'Up Fitness"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />
        <div className="relative z-10 text-center px-8 md:px-16 py-12">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Rejoignez <span className="text-gray-400">Moov'Up</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
            Faites partie d’une équipe passionnée qui valorise l’énergie,
            l’innovation et la réussite collective.
          </p>
        </div>
      </div>

      {/* Colonne droite (Formulaire) */}
      <div className="flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-8 lg:p-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl space-y-6 animate-fadeIn"
        >
          {error && (
            <div className="mb-4 text-red-400 text-center font-medium bg-red-900/30 border border-red-700 rounded-lg py-2">
              {error}
            </div>
          )}

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "firstName", placeholder: "Prénom", icon: <User className="w-6 h-6 text-gray-400 mr-3" /> },
              { name: "lastName", placeholder: "Nom", icon: <User className="w-6 h-6 text-gray-400 mr-3" /> },
              { name: "email", placeholder: "Email", icon: <Mail className="w-6 h-6 text-gray-400 mr-3" /> },
              { name: "phone", placeholder: "Téléphone", icon: <Phone className="w-6 h-6 text-gray-400 mr-3" /> },
            ].map((field) => (
              <div key={field.name} className="flex items-center bg-gray-900/50 border border-gray-700 rounded-2xl px-5 py-4 transition focus-within:border-gray-400 hover:scale-[1.02] duration-200">
                {field.icon}
                <input
                  type={field.name === "email" ? "email" : field.name === "phone" ? "tel" : "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-white placeholder-gray-500 text-lg"
                  required={field.name !== "phone"}
                />
              </div>
            ))}
          </div>

          {/* Sujet */}
          <div className="flex items-center bg-gray-900/50 border border-gray-700 rounded-2xl px-5 py-4 transition focus-within:border-gray-400 hover:scale-[1.02] duration-200">
            <Edit3 className="w-6 h-6 text-gray-400 mr-3" />
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white placeholder-gray-500 text-lg"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start bg-gray-900/50 border border-gray-700 rounded-2xl px-5 py-4 transition focus-within:border-gray-400 hover:scale-[1.02] duration-200">
            <MessageSquare className="w-6 h-6 text-gray-400 mr-3 mt-1" />
            <textarea
              name="message"
              placeholder="Votre message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-transparent outline-none text-white placeholder-gray-500 text-lg resize-none"
              required
            />
          </div>

          {/* Fichier */}
          <div className="flex items-center bg-gray-900/50 border border-gray-700 rounded-2xl px-5 py-4 transition focus-within:border-gray-400 hover:scale-[1.02] duration-200">
            <Paperclip className="w-6 h-6 text-gray-400 mr-3" />
            <input
              type="file"
              name="cv"
              onChange={handleChange}
              className="w-full text-white file:bg-gray-700 file:text-white file:rounded-lg file:border-none file:px-4 file:py-2 file:cursor-pointer hover:file:bg-gray-600 transition"
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white py-4 rounded-2xl font-bold shadow-lg hover:from-gray-700 hover:to-gray-600 disabled:opacity-50 transition-all flex justify-center items-center gap-3 text-lg"
          >
            <Send className="w-6 h-6" />
            {isSubmitting ? "Envoi en cours..." : "Envoyer la candidature"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Carrier;
