import React from 'react';
import { Link } from 'react-router-dom';
import { Coins, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900/50 backdrop-blur-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold">Odyssey Exchange</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-yellow-500">Home</Link>
            <Link to="/features" className="hover:text-yellow-500">Caratteristiche</Link>
            <Link to="/partners" className="hover:text-yellow-500">Partner</Link>
            <Link to="/about" className="hover:text-yellow-500">Chi Siamo</Link>
            <Link 
              to="/exchange"
              aria-label="Inizia a fare trading"
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-400"
            >
              Inizia a Trading
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:text-yellow-500">Home</Link>
            <Link to="/features" className="block px-3 py-2 hover:text-yellow-500">Caratteristiche</Link>
            <Link to="/partners" className="block px-3 py-2 hover:text-yellow-500">Partner</Link>
            <Link to="/about" className="block px-3 py-2 hover:text-yellow-500">Chi Siamo</Link>
            <Link 
              to="/exchange"
              aria-label="Inizia a fare trading"
              className="block px-3 py-2 text-yellow-500"
            >
              Inizia a Trading
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}