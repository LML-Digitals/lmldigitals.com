"use client";
import { useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface ChatInterfaceProps {
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={chatRef}
      className="fixed md:bottom-20 md:right-20 bottom-14 right-14 w-5/6 md:w-[600px] min-h-72 max-h-96 bg-red-100 shadow-xl z-50 flex flex-col rounded-md"
    >
      {/* Header */}
      <div className="primary-bg text-black p-4 flex justify-between items-center rounded-t-md">
        <h2 className="text-lg">AI Support</h2>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Example of Chat Message */}
        <div className="mb-2 flex justify-start">
          <h1 className="p-2 max-w-xs text-sm bg-white shadow-lg rounded-lg rounded-bl-none text-black">
            Hi there! Feel free to ask me about anything related to LML
            Digitals.
          </h1>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-gray-100 gap-2 flex items-center rounded-b-lg">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 rounded-lg border border-red-500"
        />
        <FaPaperPlane size={20} className="cursor-pointer text-red-500" />
      </div>
    </div>
  );
};

export default ChatInterface;
