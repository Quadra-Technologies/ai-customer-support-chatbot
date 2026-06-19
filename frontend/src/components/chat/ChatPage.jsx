import { useState } from "react";

import ChatHeader from "./ChatHeader";
import SuggestedPrompts from "./SuggestedPrompts";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

import { createLead } from "../../services/leadApi";

const ChatPage = () => {

  const [messages, setMessages] = useState([
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

    else if (messages.length === 3) {

      updatedLead.name = message;

      botReply =
        "What is your email address?";

    }

    else if (messages.length === 5) {

      updatedLead.email = message;

      botReply =
        "Please share your phone number.";

    }

    else if (messages.length === 7) {

      updatedLead.phone = message;

      botReply =
        "Which event are you planning?";

    }

    else if (messages.length === 9) {

      updatedLead.event = message;

      botReply =
        "How many guests are expected?";

    }

    else if (messages.length === 11) {

      updatedLead.guests = message;

      botReply =
        "What is your estimated budget?";

    }

    else if (messages.length === 13) {

      updatedLead.budget = message;

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

      `${updatedLead.event}
      Event | ${updatedLead.guests}
      Guests | Budget ₹${updatedLead.budget}`,

  });

  botReply =
    "Thank you! Our event consultant will contact you shortly.";

}

catch (error) {

  botReply =
    "Unable to save your request. Please try again.";

  console.log(error);

}

finally {

  setLoading(false);

}
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

        <ChatWindow
  messages={messages}
/>

{
loading && (

<p className="p-4 text-center">

Saving your request...

</p>

)
}

      <ChatInput
      onSend={handleSend}
      />

      </div>

    </section>

  );

};

export default ChatPage;