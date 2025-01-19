"use client";
import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import ChatInterface from "./ChatInterface";

function ChatbotIcon() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleIconClick = () => {
    setIsChatOpen(!isChatOpen);
  };
  console.log(isChatOpen);
  return (
    <>
      <div
        className={`fixed md:bottom-8 md:right-12 bottom-4 right-6 bg-red-500 text-white  border border-red-500 rounded-full shadow-2xl cursor-pointer z-50 flex items-center justify-center transition-transform duration-300 ${
          isChatOpen ? "rotate-180 p-2" : "p-3"
        }`}
        onClick={handleIconClick}
      >
        {isChatOpen ? <FaTimes size={36} /> : <FaCommentDots size={32} />}
      </div>

      {isChatOpen && <ChatInterface onClose={handleIconClick} />}
    </>
  );
}

export default ChatbotIcon;
