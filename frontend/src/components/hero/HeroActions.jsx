const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button
        className="
          w-full sm:w-auto
          bg-blue-600 text-white
          px-6 py-3 rounded-lg
        "
      >
        Start Chat
      </button>

      <button
        className="
          w-full sm:w-auto
          border border-blue-600 text-blue-600
          px-6 py-3 rounded-lg
        "
      >
        Book Demo
      </button>
    </div>
  );
};

export default HeroActions;