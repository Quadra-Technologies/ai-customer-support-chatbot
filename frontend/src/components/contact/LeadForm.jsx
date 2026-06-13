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

      <FormInput
        label="Event Type"
        type="text"
        placeholder="Wedding, Birthday, Corporate Event..."
      />

      <FormTextarea
        label="Event Requirement"
        placeholder="Tell us about your event, expected guests, catering and decoration requirements"
      />

      <SubmitButton />

    </form>
  );
};

export default LeadForm;