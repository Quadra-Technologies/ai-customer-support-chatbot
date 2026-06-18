import { useState } from "react";
import { Send } from "lucide-react";

const ChatInput = ({
  onSend,
}) => {
  const [message, setMessage] =
    useState("");

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
      bg-white
      "
    >
      <input
        type="text"
        value={message}
        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        placeholder="Ask about events..."
        className="
        flex-1
        border
        border-gray-300
        rounded-xl
        px-4
        py-3
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-500
        "
      />

      <button
        onClick={handleSubmit}
        className="
        bg-indigo-600
        hover:bg-indigo-700
        text-white
        p-3
        rounded-xl
        transition
        shadow
        "
      >
        <Send size={18} />
      </button>
    </div>
  );
};

export default ChatInput;