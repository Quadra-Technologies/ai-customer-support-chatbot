import {
  useRef,
  useEffect,
} from "react";

import MessageBubble from "./MessageBubble";

const ChatWindow = ({
  messages,
}) => {
  const bottomRef =
    useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  }, [messages]);

  return (
    <div
      className="
      flex-1
      overflow-y-auto
      p-4
      space-y-4
      bg-slate-50
      "
    >
      {messages.map(
        (message, index) => (
          <MessageBubble
            key={index}
            sender={message.sender}
            message={message.text}
          />
        )
      )}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;