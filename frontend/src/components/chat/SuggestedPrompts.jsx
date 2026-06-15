const SuggestedPrompts = () => {
  const prompts = [
    "What events do you organize?",
    "Wedding packages",
    "Birthday party pricing",
    "Talk to an event planner",
  ];

  return (
    <div
      className="
      flex
      flex-wrap
      gap-2
      mb-4
      "
    >
      {prompts.map((prompt) => (
        <button
          key={prompt}
          className="
          bg-gray-100
          px-3
          py-2
          rounded-full
          text-sm
          hover:bg-gray-200
          "
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestedPrompts;