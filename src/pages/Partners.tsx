import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Programma Partner</h1>
          <p className="text-xl text-gray-400">
            Unisciti al programma partner più remunerativo del mercato crypto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Vantaggi Partner</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Commissioni fino al 50% sul trading dei referral
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Pagamenti istantanei e automatici
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Dashboard dedicata per il monitoraggio
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Supporto marketing personalizzato
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Come Funziona</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">1.</span>
                Registrati come partner Odyssey Exchange
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">2.</span>
                Ricevi il tuo link di referral personalizzato
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">3.</span>
                Condividi il link con la tua community
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">4.</span>
                Guadagna commissioni su ogni trade
              </li>
            </ol>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/exchange"
            aria-label="Diventa partner di Odyssey Exchange"
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400"
          >
            Diventa Partner <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}