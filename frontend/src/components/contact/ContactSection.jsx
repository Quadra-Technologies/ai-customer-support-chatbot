import LeadForm from "./LeadForm";

const ContactSection = () => {
  return (
    <section
      className="
      py-20
      bg-gray-50
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        "
      >
        <div className="text-center mb-12">
          <h2
            className="
            text-4xl
            font-bold
            "
          >
            Get Started Today
          </h2>

          <p
            className="
            mt-4
            text-gray-600
            "
          >
            Share your requirements and our team
            will get back to you.
          </p>
        </div>

        <div
          className="
          bg-white
          rounded-xl
          shadow-lg
          p-8
          "
        >
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;