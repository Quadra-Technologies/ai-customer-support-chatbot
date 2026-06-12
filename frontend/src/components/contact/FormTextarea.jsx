const FormTextarea = ({
  label,
  placeholder,
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <textarea
        rows="5"
        placeholder={placeholder}
        className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        "
      />
    </div>
  );
};

export default FormTextarea;