import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Chatbot setup
    window.embeddedChatbotConfig = {
      chatbotId: "09AAbDZZueesfemr_J-HQ",
      domain: "www.chatbase.co",
    };

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "09AAbDZZueesfemr_J-HQ");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    // Wait for the chatbot to load and then hide the footer
    script.onload = () => {
      const hideFooter = () => {
        // Find the footer element in the iframe and hide it
        const chatbotIframe = document.querySelector("iframe[src*='chatbase']");
        if (chatbotIframe) {
          const iframeDocument = chatbotIframe.contentDocument || chatbotIframe.contentWindow.document;
          const footer = iframeDocument.querySelector("footer");
          if (footer) {
            footer.style.display = "none";
          }
        }
      };

      // Use an interval to check periodically for the footer element
      const interval = setInterval(hideFooter, 500);

      // Stop checking after a short time to avoid unnecessary resource usage
      setTimeout(() => clearInterval(interval), 5000);
    };

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 relative">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl mx-auto p-10">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8">
          Démo du Service de Taxi Wisab Transfer
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          Bienvenue dans la démo du chatbot de Wisab Transfer ! Cette démonstration montre comment notre 
          chatbot peut vous aider à réserver un taxi privé, obtenir des devis, connaître nos zones de 
          service et répondre à toutes vos questions sur les transferts en Belgique et en Europe.
        </p>
      </div>
    </main>
  );
}
