const HeroContent = () => {
  return (
    <div>
      <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
        AI Powered Event Planning ✨
      </span>

      <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
        Plan Your
        <span className="text-indigo-600">
          {" "}
          Dream Events
        </span>
        <br />
        With AI Assistance
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-xl leading-8">
        From weddings and birthdays to
        corporate events, our AI assistant
        helps you organize unforgettable
        experiences effortlessly.
      </p>

      <div className="flex flex-wrap gap-8 mt-10">
        <div>
          <h3 className="text-3xl font-bold text-indigo-600">
            500+
          </h3>

          <p className="text-gray-500">
            Events Planned
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-indigo-600">
            1000+
          </h3>

          <p className="text-gray-500">
            Happy Clients
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-indigo-600">
            24/7
          </h3>

          <p className="text-gray-500">
            AI Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;