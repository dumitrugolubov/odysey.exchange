import React from 'react';
import { ArrowRight, Percent, Coins, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/odyssey-exchange-trade.webp"
            alt="Trading background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Il Primo Exchange di Memecoin
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Trading con commissioni 0% e leva fino a 777x
          </p>
          <Link 
            to="/exchange"
            aria-label="Inizia a fare trading ora"
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400"
          >
            Inizia Ora <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Percent className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">0% Commissioni Spot</h3>
              <p className="text-gray-400">Trading senza commissioni su tutte le coppie spot</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <TrendingUp className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Leva fino a 777x</h3>
              <p className="text-gray-400">Massimizza i tuoi profitti con la leva più alta del mercato</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Coins className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">50% Commissioni Partner</h3>
              <p className="text-gray-400">Guadagna fino al 50% delle commissioni come partner</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}