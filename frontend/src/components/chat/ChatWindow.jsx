import MessageBubble from "./MessageBubble";

const ChatWindow = ({ messages }) => {
  return (
    <div
      className="
      flex
      flex-col
      gap-4
      h-[60vh]
      overflow-y-auto
      p-4
      "
    >
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          sender={message.sender}
          message={message.text}
        />
      ))}
    </div>
  );
};

export default ChatWindow;