import ChatHeader from "./ChatHeader";
import SuggestedPrompts from "./SuggestedPrompts";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

const ChatPage = () => {
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

        <ChatWindow />

        <ChatInput />
      </div>
    </section>
  );
};

export default ChatPage;