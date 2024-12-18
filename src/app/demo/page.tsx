"use client";

import { ChatBubbleIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Page() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setEnlargedImage(imageSrc);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full mx-auto p-10 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-8">
          AI-Powered Voice Assistant Demo for Bahild.com
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          Welcome to the demo of our AI-powered voice assistant. This demo
          showcases how the AI agent is seamlessly integrated with
          <span className="font-bold">
            {" "}
            Make, HubSpot CRM, Smartsheets, CallRail, ElevenLabs, Google
            Calendar,{" "}
          </span>
          and external lead sources like{" "}
          <span className="font-bold">
            Angie’s List, Google Local Services, and Yelp.
          </span>
          It demonstrates CRM data integration, appointment scheduling, and
          real-time voice generation.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          The AI assistant collects client information, validates service areas,
          and automatically syncs data with HubSpot and Smartsheets. It also
          tracks all calls using CallRail and leverages ElevenLabs for natural
          voice interactions. Additionally, meetings are automatically scheduled
          via Google Calendar based on the assistant’s interactions with
          clients.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/2ai.jpeg"
            alt="Outbound Calls"
            className="w-full h-auto cursor-pointer"
            onClick={() => handleImageClick("/2ai.jpeg")}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Outbound Calls
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Lead collection from platforms like Angie’s List, Google Local
                Services, and Yelp
              </li>
              <li>Automated outbound call to follow up on client inquiries</li>
              <li>Integration with ElevenLabs for natural voice generation</li>
              <li>Lead data sync with HubSpot CRM</li>
              <li>Appointment scheduling and booking based on availability</li>
              <li>Automatic follow-up emails and SMS for confirmation</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/1ai.jpeg"
            alt="Inbound Calls"
            className="w-full h-auto cursor-pointer"
            onClick={() => handleImageClick("/1ai.jpeg")}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Inbound Calls
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Client calls are answered by the AI-powered assistant</li>
              <li>Information collection: Name, address, and service type</li>
              <li>
                Real-time address validation to check service availability
              </li>
              <li>Integration with HubSpot CRM for storing client details</li>
              <li>Appointment scheduling based on team availability</li>
              <li>
                CallRail integration for call tracking and performance logging
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Floating Icon */}
      <div className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
        <ChatBubbleIcon className="w-6 h-6" />
      </div>

      {/* Enlarged Image Overlay */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeEnlargedImage}
        >
          <div
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={enlargedImage}
              alt="Enlarged"
              className="w-full h-full object-contain"
            />
            <button
              onClick={closeEnlargedImage}
              className="absolute top-4 right-4 text-white bg-indigo-600 rounded-full p-2 z-10"
            >
              <Cross2Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
