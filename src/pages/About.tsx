import React from 'react';

export default function About() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Chi Siamo</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">
            Odyssey Exchange è nato con una missione chiara: rivoluzionare il trading di memecoin offrendo le migliori condizioni del mercato.
          </p>
          <p className="mb-6">
            Siamo il primo exchange specializzato in memecoin che offre commissioni spot 0%, permettendo ai trader di massimizzare i loro profitti senza costi nascosti.
          </p>
          <p className="mb-6">
            La nostra piattaforma è stata progettata per offrire:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Trading spot senza commissioni</li>
            <li>Leva fino a 777x per massimizzare le opportunità</li>
            <li>10% di ritorno dalle liquidazioni</li>
            <li>Programma partner con commissioni fino al 50%</li>
          </ul>
          <p>
            Il nostro team di esperti lavora costantemente per garantire la massima sicurezza e affidabilità della piattaforma, permettendo ai nostri utenti di concentrarsi esclusivamente sul trading.
          </p>
        </div>
      </div>
    </div>
  );
}