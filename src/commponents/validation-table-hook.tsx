import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { useNavigate, useLocation } from "react-router-dom";
const initialFormValues = {
  name: "",
  email: "",
  attend: "",
  allergy: "",
  formSubmitted: false,
  success: false,
};
export const useFormControls = () => {
  const { registerForm }: any = useContext(Context);
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);
  const [success, setSuccess] = useState(initialFormValues.success);
  const navigate = useNavigate();
  const location = useLocation();
  const res = location.state?.data;

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Pole nesmie byť prázdne.";
    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "Pole nesmie byť prázdne.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Neplatný email.";
    }

    setErrors({
      ...temp,
    });
  };
  const handleInputValue: any = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };
  const handleFormSubmit = async () => {
    if (formIsValid()) {
      await registerForm(values);
      console.log(values);
    }
  };

  const formIsValid: any = (fieldValues = values) => {
    const isValid =
      fieldValues.name &&
      fieldValues.email &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };
  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  };
};
