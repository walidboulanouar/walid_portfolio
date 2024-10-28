"use client";


import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Set up the Chatbase chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "09AAbDZZueesfemr_J-HQ",
      domain: "www.chatbase.co",
    };

    // Create and insert the script tag for Chatbase
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "09AAbDZZueesfemr_J-HQ");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 relative">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl mx-auto p-10">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8">
          Wisab Transfer Taxi Service Demo
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          Welcome to the demo of Wisab Transfer's chatbot! This demo showcases how our chatbot can 
          assist you with booking private taxis, getting quotes, learning about our service areas, 
          and answering any questions you may have about transfers to locations in Belgium and Europe.
        </p>
      </div>
    </main>
  );
}
