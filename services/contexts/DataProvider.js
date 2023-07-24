"use client";

import { createContext } from "react";
import useDataProvider from "../hooks/contextHooks/useDataProvider";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const allContexts = useDataProvider();
  return (
    <DataContext.Provider value={allContexts}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
