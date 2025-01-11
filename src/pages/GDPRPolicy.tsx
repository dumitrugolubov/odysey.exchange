import React from 'react';

export default function GDPRPolicy() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Politica sulla Privacy</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Informazioni Generali</h2>
            <p>
              La presente Politica sulla Privacy descrive come Odyssey Exchange raccoglie, utilizza e protegge i dati personali degli utenti in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dati Raccolti</h2>
            <p>Raccogliamo i seguenti tipi di dati:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Informazioni di registrazione (email, username)</li>
              <li>Dati di identificazione per KYC</li>
              <li>Informazioni sulle transazioni</li>
              <li>Dati di utilizzo del sito</li>
              <li>Cookie tecnici e di analisi</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Utilizzo dei Dati</h2>
            <p>Utilizziamo i dati raccolti per:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornire i servizi di trading</li>
              <li>Verificare l'identità degli utenti</li>
              <li>Prevenire frodi e attività illecite</li>
              <li>Migliorare i nostri servizi</li>
              <li>Comunicare aggiornamenti importanti</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Diritti degli Utenti</h2>
            <p>Gli utenti hanno il diritto di:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica dei dati</li>
              <li>Richiedere la cancellazione dei dati</li>
              <li>Opporsi al trattamento dei dati</li>
              <li>Richiedere la portabilità dei dati</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookie</h2>
            <p>
              Utilizziamo cookie tecnici essenziali per il funzionamento del sito e cookie analitici per migliorare i nostri servizi. Gli utenti possono gestire le preferenze sui cookie attraverso le impostazioni del browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contatti</h2>
            <p>
              Per qualsiasi domanda sulla nostra Politica sulla Privacy, contattare il nostro Responsabile della Protezione dei Dati all'indirizzo privacy@odysseys.trade
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}