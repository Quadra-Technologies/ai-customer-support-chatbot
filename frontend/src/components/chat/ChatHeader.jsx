const ChatHeader = () => {
  return (
    <div
      className="
      bg-gradient-to-r
      from-indigo-600
      to-blue-600
      text-white
      p-5
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
          w-10
          h-10
          rounded-full
          bg-white
          text-indigo-600
          flex
          items-center
          justify-center
          font-bold
          "
        >
          AI
        </div>

        <div>
          <h2 className="text-lg font-bold">
            Dream Events AI
          </h2>

          <p className="text-sm opacity-90">
            Usually replies instantly
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;