import MessageBubble from "./MessageBubble";

const ChatWindow = ({
  messages,
}) => {

  return (

    <div

      className="
      flex-1
      flex
      flex-col
      gap-4
      overflow-y-auto
      p-4
      "

    >

      {

        messages.map(

          (message, index) => (

            <MessageBubble

              key={index}

              sender={message.sender}

              message={message.text}

            />

          )

        )

      }

    </div>

  );

};

export default ChatWindow;