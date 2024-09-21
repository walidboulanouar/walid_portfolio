import React from 'react';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200 flex items-center justify-center py-12 relative">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl mx-auto p-10">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8">
          AI Caller Assistant Demo
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          Welcome to the AI Caller Assistant Demo. This demo is not yet linked
          with any CRM or third-party systems. It&apos;s just to show you what we can
          achieve in a short time.
        </p>
        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
          <span className="font-bold text-indigo-600">Available time:</span> all <span className="text-green-500 font-bold">Sunday morning</span>. 
          You can ask the assistant to book a meeting, then you can see the result.
        </p>
      </div>

      {/* Floating Icon */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-600">
          Have a quick question?
        </span>
        <a
          href="#"
          className="bg-green-500 p-4 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-200 ease-in-out"
          aria-label="Talk to AI Assistant"
        >
          <ChatBubbleIcon width={24} height={24} />
        </a>
      </div>
    </main>
  );
}
