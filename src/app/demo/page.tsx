import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full mx-auto p-10 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-8">
          AI-Powered Voice Assistant Demo for Bahild.com
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          Welcome to the demo of our AI-powered voice assistant. This demo
          highlights how the AI agent is seamlessly integrated with Make and
          other tools, simulating CRM data integration with Excel and automatic
          scheduling with Google Calendar.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/1ai.jpeg" alt="Outbound Calls" className="w-full h-auto" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Outbound Calls
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/2ai.jpeg" alt="Inbound Calls" className="w-full h-auto" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Inbound Calls
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Floating Icon */}
      <div className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
        <ChatBubbleIcon className="w-6 h-6" />
      </div>
    </main>
  );
}
