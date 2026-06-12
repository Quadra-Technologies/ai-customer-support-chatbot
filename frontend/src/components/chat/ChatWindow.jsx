import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const ChatWindow = () => {
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
      <MessageBubble
        sender="user"
        message="Do you organize weddings?"
      />

      <MessageBubble
        sender="bot"
        message="Yes, we provide complete wedding planning, venue booking, decoration, catering, photography and entertainment services."
      />

      <TypingIndicator />
    </div>
  );
};

export default ChatWindow;