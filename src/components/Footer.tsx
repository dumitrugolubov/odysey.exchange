import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-full bg-yellow-500 py-8 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/exchange"
            aria-label="Inizia a fare trading su Odyssey Exchange"
            className="w-full bg-black text-white py-6 px-8 rounded-lg flex items-center justify-center space-x-4 hover:bg-gray-900 transition-colors text-xl md:text-2xl font-bold"
          >
            <span>Inizia a fare trading su Odyssey Exchange</span>
            <ArrowRight className="h-8 w-8" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Odyssey Exchange</h3>
            <p className="text-sm">Il primo exchange di memecoin con 0% commissioni spot e leva fino a 777x.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link to="/features" className="hover:text-yellow-500">Caratteristiche</Link></li>
              <li><Link to="/partners" className="hover:text-yellow-500">Partner</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500">Chi Siamo</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legale</h4>
            <ul className="space-y-2">
              <li><Link to="/gdpr" className="hover:text-yellow-500">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-500">Termini di Servizio</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/t_dmi3" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-yellow-500" aria-label="Seguici su X (Twitter)">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://t.me/t_dmi3" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-yellow-500" aria-label="Unisciti al nostro canale Telegram">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Odyssey Exchange. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}