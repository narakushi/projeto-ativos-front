import { FormInputs } from "../formInputs";

export const FormBase = ({ inputs, formData, setFormData, children }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form action="">
      <FormInputs
        inputs={inputs}
        formData={formData}
        handleChange={handleChange}
      />
      {children}
    </form>
  );
};
