import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import SubmitButton from "./SubmitButton";

const LeadForm = () => {
  return (
    <form className="space-y-6">

      <FormInput
        label="Full Name"
        type="text"
        placeholder="Enter your name"
      />

      <FormInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
      />

      <FormInput
        label="Phone Number"
        type="tel"
        placeholder="Enter your phone number"
      />

      <FormTextarea
        label="Business Requirement"
        placeholder="Tell us about your project"
      />

      <SubmitButton />

    </form>
  );
};

export default LeadForm;