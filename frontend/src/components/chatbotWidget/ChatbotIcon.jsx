const ChatbotIcon = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
      fixed
      bottom-8
      right-8
      w-16
      h-16
      rounded-full
      bg-gradient-to-r
      from-indigo-600
      to-blue-600
      text-white
      text-3xl
      shadow-2xl
      z-50
      hover:scale-110
      transition-all
      duration-300
      animate-pulse
      "
    >
      💬
    </button>
  );
};

export default ChatbotIcon;