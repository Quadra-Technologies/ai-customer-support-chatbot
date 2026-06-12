const HeroPreview = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto">
      <div className="mb-4">
        <p className="font-semibold">
          User
        </p>

        <div className="bg-gray-100 p-3 rounded-lg mt-2">
          Do you organize weddings?
        </div>
      </div>

      <div>
        <p className="font-semibold">
          AI Assistant
        </p>

        <div className="bg-blue-100 p-3 rounded-lg mt-2">
          Yes, we provide complete wedding planning,
          venue booking, decoration, catering,
          photography and entertainment services.
        </div>
      </div>
    </div>
  );
};

export default HeroPreview;