import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-300 mb-4 md:mb-0">
          Utilizziamo i cookie per migliorare la tua esperienza. Continuando a utilizzare questo sito, accetti la nostra{' '}
          <Link to="/gdpr" className="text-yellow-500 hover:underline">
            Politica sulla Privacy
          </Link>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="bg-yellow-500 text-black px-4 py-2 rounded font-medium hover:bg-yellow-400"
        >
          Accetta
        </button>
      </div>
    </div>
  );
}