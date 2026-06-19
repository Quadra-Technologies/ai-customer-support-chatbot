import { useState } from "react";

import ChatHeader from "../chat/ChatHeader";
import SuggestedPrompts from "../chat/SuggestedPrompts";
import ChatWindow from "../chat/ChatWindow";
import ChatInput from "../chat/ChatInput";

import { createLead } from "../../services/leadApi";

const ChatbotPopup = ({
  open,
  onClose,
}) => {
  const [messages, setMessages] =
    useState([
      {
        sender: "bot",
        text:
          "Hi! 👋 Welcome to Dream Event Planners. How can I help you today?",
      },
    ]);

  const [loading, setLoading] =
    useState(false);

  const [leadData, setLeadData] =
    useState({
      name: "",
      email: "",
      phone: "",
      event: "",
      guests: "",
      budget: "",
    });

  // Hooks should come before return
  if (!open) return null;

  const handleSend = async (
    message
  ) => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    let botReply = "";

    let updatedLead = {
      ...leadData,
    };

    if (messages.length === 1) {
      botReply =
        "Great! Can I have your name?";
    } else if (
      messages.length === 3
    ) {
      updatedLead.name = message;

      botReply =
        "What is your email address?";
    } else if (
      messages.length === 5
    ) {
      updatedLead.email = message;

      botReply =
        "Please share your phone number.";
    } else if (
      messages.length === 7
    ) {
      updatedLead.phone = message;

      botReply =
        "Which event are you planning?";
    } else if (
      messages.length === 9
    ) {
      updatedLead.event = message;

      botReply =
        "How many guests are expected?";
    } else if (
      messages.length === 11
    ) {
      updatedLead.guests = message;

      botReply =
        "What is your estimated budget?";
    } else if (
      messages.length === 13
    ) {
      updatedLead.budget =
        message;

      try {
        setLoading(true);

        await createLead({
          name:
            updatedLead.name,
          email:
            updatedLead.email,
          phone:
            updatedLead.phone,
          requirement: `${updatedLead.event} Event | ${updatedLead.guests} Guests | Budget ₹${updatedLead.budget}`,
        });

        botReply =
          "🎉 Thank you! Our event consultant will contact you shortly.";
      } catch (error) {
        console.error(error);

        botReply =
          "❌ Unable to save your request. Please try again.";
      } finally {
        setLoading(false);
      }
    } else {
      botReply =
        "Please continue sharing your event details.";
    }

    setLeadData(updatedLead);

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
    <div
      className="
      fixed
      bottom-24
      right-6
      w-[420px]
      h-[700px]
      bg-white
      rounded-3xl
      shadow-2xl
      border
      border-gray-200
      overflow-hidden
      flex
      flex-col
      z-50
      "
    >
      {/* Close Button */}
      <div className="flex justify-end p-3">
        <button
          onClick={onClose}
          className="
          w-8
          h-8
          rounded-full
          hover:bg-gray-100
          transition
          font-bold
          "
        >
          ✕
        </button>
      </div>

      <ChatHeader />

      <div className="px-3 pb-2">
        <SuggestedPrompts />
      </div>

      <ChatWindow
        messages={messages}
      />

      {loading && (
        <p className="text-center text-sm text-gray-500 py-2">
          AI is processing your request...
        </p>
      )}

      <div className="border-t">
        <ChatInput
          onSend={handleSend}
        />
      </div>
    </div>
  );
};

export default ChatbotPopup;