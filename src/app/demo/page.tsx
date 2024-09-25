import React from 'react';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default function Page() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 relative">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl mx-auto p-10">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8">
          Démo de l&apos;Assistant Vocal IA
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          Bienvenue à la démo de l&apos;assistant vocal IA. Cette démo montre comment l&apos;agent IA 
          est connecté à Excel, simulant l&apos;intégration des données CRM. De plus, 
          il se connecte facilement à Google Agenda pour planifier des réunions.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          Lorsque l&apos;assistant confirme l&apos;heure de la réunion, elle sera automatiquement planifiée 
          dans Google Agenda et enregistrée dans la base de données.
        </p>
        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
          <span className="font-bold text-indigo-600">Temps disponible :</span> 
          Vous pouvez réserver <span className="text-green-500 font-bold">tous les créneaux horaires</span>. 
          Demandez à l&apos;assistant de réserver une réunion et vous verrez la confirmation.
        </p>
      </div>

      {/* Floating Icon */}
    
    </main>
  );
}
