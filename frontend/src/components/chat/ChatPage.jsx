import { useState } from "react";

import ChatHeader from "./ChatHeader";
import SuggestedPrompts from "./SuggestedPrompts";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Welcome to Dream Event Planners. How can I help you today?",
    },
  ]);

  const handleSend = (message) => {
    const userMessage = {
      sender: "user",
      text: message,
    };

    let botReply = "";

    if (messages.length === 1) {
      botReply = "Great! Can I have your name?";
    } else if (messages.length === 3) {
      botReply = "What is your email address?";
    } else if (messages.length === 5) {
      botReply = "Please share your phone number.";
    } else if (messages.length === 7) {
      botReply = "Which event are you planning?";
    } else if (messages.length === 9) {
      botReply = "How many guests are expected?";
    } else if (messages.length === 11) {
      botReply = "What is your estimated budget?";
    } else if (messages.length === 13) {
      botReply =
        "Thank you! Our event consultant will contact you shortly.";
    }

    const botMessage = {
      sender: "bot",
      text: botReply,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);
  };

  return (
    <section className="py-10 px-4">
      <div
        className="
        max-w-4xl
        mx-auto
        bg-white
        rounded-xl
        shadow-xl
        overflow-hidden
        "
      >
        <ChatHeader />

        <div className="p-4">
          <SuggestedPrompts />
        </div>

        <ChatWindow messages={messages} />

        <ChatInput onSend={handleSend} />
      </div>
    </section>
  );
};

export default ChatPage;