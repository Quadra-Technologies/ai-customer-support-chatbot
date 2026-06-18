const MessageBubble = ({
  message,
  sender,
}) => {
  const isUser =
    sender === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
        max-w-[80%]
        px-4
        py-3
        rounded-2xl
        shadow-sm
        ${
          isUser
            ? "bg-indigo-600 text-white rounded-br-md"
            : "bg-gray-100 text-gray-800 rounded-bl-md"
        }
        `}
      >
        <p className="text-sm leading-6">
          {message}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;