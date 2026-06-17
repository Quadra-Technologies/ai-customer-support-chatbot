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

  if (!open) return null;

  const [messages, setMessages] =
    useState([
      {
        sender: "bot",

        text:
          "Hi! Welcome to Dream Event Planners. How can I help you today?",
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

  const handleSend = async (
    message
  ) => {

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

    }

    else if (
      messages.length === 3
    ) {

      updatedLead.name =
        message;

      botReply =
        "What is your email address?";

    }

    else if (
      messages.length === 5
    ) {

      updatedLead.email =
        message;

      botReply =
        "Please share your phone number.";

    }

    else if (
      messages.length === 7
    ) {

      updatedLead.phone =
        message;

      botReply =
        "Which event are you planning?";

    }

    else if (
      messages.length === 9
    ) {

      updatedLead.event =
        message;

      botReply =
        "How many guests are expected?";

    }

    else if (
      messages.length === 11
    ) {

      updatedLead.guests =
        message;

      botReply =
        "What is your estimated budget?";

    }

    else if (
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

          requirement:

            `${updatedLead.event} Event | ${updatedLead.guests} Guests | Budget ₹${updatedLead.budget}`,

        });

        botReply =
          "Thank you! Our event consultant will contact you shortly.";

      }

      catch (error) {

        botReply =
          "Unable to save your request. Please try again.";

      }

      finally {

        setLoading(false);

      }

    }

    setLeadData(
      updatedLead
    );

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

      h-[650px]

      bg-white

      rounded-xl

      shadow-2xl

      overflow-hidden

      flex

      flex-col

      z-50

      "

    >

      <div

        className="

        flex

        justify-end

        p-2

        "

      >

        <button

          onClick={onClose}

          className="

          text-xl

          font-bold

          px-2

          "

        >

          ✕

        </button>

      </div>

      <ChatHeader />

      <div className="p-3">

        <SuggestedPrompts />

      </div>

      <ChatWindow
        messages={messages}
      />

      {

        loading && (

          <p className="text-center">

            Saving your request...

          </p>

        )

      }

      <ChatInput
        onSend={handleSend}
      />

    </div>

  );

};

export default ChatbotPopup;