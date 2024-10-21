import React from 'react';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default function Page() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 relative">
       <div className="bg-white shadow-xl rounded-2xl max-w-2xl mx-auto p-10">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8">
          AI-Powered Voice Assistant Demo
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          Welcome to the demo of our AI-powered voice assistant. This demo highlights how the AI agent 
          is seamlessly integrated with **Make** and other tools, simulating CRM data integration with 
          Excel and automatic scheduling with Google Calendar.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          When the assistant confirms a meeting time, it will automatically be scheduled in Google Calendar 
          and recorded in the project database. This streamlines the entire scheduling process for clients.
        </p>
        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
          <span className="font-bold text-indigo-600">Available Times:</span> 
          You can book <span className="text-green-500 font-bold">any available time slots</span> seamlessly. 
          Ask the assistant to book a meeting, and watch how the system provides confirmation instantly.
        </p>
      </div>

      {/* Floating Icon */}
    
    </main>
  );
}
