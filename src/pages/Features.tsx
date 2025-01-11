import React from 'react';
import { Percent, TrendingUp, Coins, Shield, Zap, Users } from 'lucide-react';

export default function Features() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Caratteristiche</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <Percent className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">0% Commissioni Spot</h3>
            <p className="text-gray-400">
              Fai trading senza commissioni su tutte le coppie spot. Massimizza i tuoi profitti senza costi nascosti.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <TrendingUp className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Leva fino a 777x</h3>
            <p className="text-gray-400">
              Amplifica le tue posizioni con la leva più alta del mercato. Opportunità uniche per i trader esperti.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <Coins className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">10% dalle Liquidazioni</h3>
            <p className="text-gray-400">
              Ricevi il 10% del valore delle liquidazioni. Un'opportunità unica nel mercato crypto.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <Shield className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Sicurezza Avanzata</h3>
            <p className="text-gray-400">
              Protezione dei fondi con sistemi di sicurezza all'avanguardia e monitoraggio 24/7.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <Zap className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Esecuzione Istantanea</h3>
            <p className="text-gray-400">
              Trading veloce e affidabile con esecuzione degli ordini in millisecondi.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <Users className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Programma Partner</h3>
            <p className="text-gray-400">
              Guadagna fino al 50% delle commissioni invitando altri trader sulla piattaforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}