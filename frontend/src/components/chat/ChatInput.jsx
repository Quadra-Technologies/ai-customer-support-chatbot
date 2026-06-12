const ChatInput = () => {
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