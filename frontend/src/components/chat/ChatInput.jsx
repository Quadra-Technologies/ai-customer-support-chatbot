import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div
      className="
      border-t
      p-4
      flex
      gap-3
      "
    >
      <input
        type="text"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Type your message..."
        className="
        flex-1
        border
        rounded-lg
        px-4
        py-3
        "
      />

      <button
        onClick={handleSubmit}
        className="
        bg-blue-600
        text-white
        px-5
        rounded-lg
        "
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;