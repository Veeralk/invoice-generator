import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const initialInvoiceData = {
  title:"New Invoice",
  billing:{name :"", phone:"", address:""},
  shipping:{name :"", phone:"", address:""},
  invoice:{number :"", date:"", duedate:""},
  account:{name :"", number:"", ifsccode:""},
  company:{name :"", number:"", address:""},
  tax: 0,
  notes:"",
  items:[
    {name:"", qty:"", amount:"", description:"", total: 0},
  ],
  logo:""
}

export const AppContextProvider = ({ children }) => {
  const [invoiceTitle, setInvoiceTitle] = useState("New Invoice");

  const[invoiceData, setInvoiceData] = useState(initialInvoiceData);
  const[selectedTemplate, setSelectedTemplate] = useState("template1");

  const contextValue = {
    invoiceTitle,
    setInvoiceTitle,
    invoiceData,
    setInvoiceData,
    selectedTemplate,
    setSelectedTemplate,
    initialInvoiceData
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
