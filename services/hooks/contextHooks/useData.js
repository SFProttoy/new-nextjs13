"use client";

import { DataContext } from "@/services/contexts/DataProvider";
import { useContext } from "react";

const useData = () => {
  const data = useContext(DataContext);
  return data;
};

export default useData;
