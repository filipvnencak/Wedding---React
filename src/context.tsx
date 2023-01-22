import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext({});

export const Axios = axios.create({
  baseURL: "http://radkafilip.sk/server",
});

export const ContextProvider = ({ children }: any) => {
  const [wait, setWait] = useState(false);

  const registerForm = async ({
    name,
    email,
    attend,
    bus,
    allergy,
    kids,
    kids_details,
    partner: partner_name,
    partner_allergy,
    message,
  }: {
    name: string;
    email: string;
    attend: string;
    allergy: string;
    bus: string;
    kids: string;
    kids_details: string;
    partner: string;
    partner_allergy: string;
    message: string;
  }) => {
    setWait(true);
    try {
      const { data } = await Axios.post("register.php", {
        name,
        email,
        attend,
        bus,
        allergy,
        kids,
        kids_details,
        partner: partner_name,
        partner_allergy,
        message,
      });
      setWait(false);
      return data;
    } catch (err) {
      setWait(false);
      return { success: 0, message: "Server Error!" };
    }
  };

  return (
    <Context.Provider
      value={{
        registerForm,
        wait,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
