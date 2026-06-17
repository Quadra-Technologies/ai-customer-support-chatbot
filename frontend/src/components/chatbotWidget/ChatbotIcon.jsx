const ChatbotIcon = ({
  onClick,
}) => {

  return (

    <button

      onClick={onClick}

      className="
      fixed
      bottom-6
      right-6
      w-16
      h-16
      rounded-full
      bg-blue-600
      text-white
      text-3xl
      shadow-xl
      z-50
      hover:scale-110
      transition
      "

    >

      💬

    </button>

  );

};

export default ChatbotIcon;