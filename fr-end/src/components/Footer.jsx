import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white/20 backdrop-blur-lg text-white flex flex-col items-center justify-center px-4 py-4 md:py-3 z-50 space-y-3 md:space-y-0 md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm font-light text-gray-200 opacity-70">
            ©2025 Moov'Up. Tous droits réservés.
          </p>
          <div className="flex gap-2">
            {/* Instagram */}
            <a href="https://www.instagram.com/moovupsports?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 fill-gray-200 opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.667 4.771-4.919 4.919-1.266.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.205.012-3.584.069-4.849.148-3.227 1.667-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.333.014 7.052.072 2.695.272.273 2.695.072 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.357 2.623 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.357-.2 6.78-2.623 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.2-4.357-2.623-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://web.facebook.com/clubmoovupfitness" target="_blank" rel="noopener noreferrer">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 fill-gray-200 opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm text-center md:text-left font-light text-gray-200 opacity-70">
          Téléchargez notre application mobile dès maintenant !
        </p>
        <div className="flex gap-2">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/playstore.png"
              alt="Playstore"
              className="h-7 sm:h-8 hover:opacity-80 transition-opacity duration-200"
            />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src="/appstore.png"
              alt="Appstore"
              className="h-7 sm:h-8 hover:opacity-80 transition-opacity duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;