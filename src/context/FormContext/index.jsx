import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formOrg, setFormOrg] = useState({});
  const [profile, setProfile] = useState("");

  return (
    <FormContext.Provider value={{ formOrg, setFormOrg, profile, setProfile }}>
      {children}
    </FormContext.Provider>
  );
};
