"use client";

import ProductPage from "@/components/ProductPage";
import useData from "@/services/hooks/contextHooks/useData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { getToken } = useData();
  const router = useRouter();

  useEffect(() => {
    if (getToken() === null || getToken() === undefined) {
      router.push("/login"); // If token is not present, navigate to "/login" page
    }
  }, [router, getToken]);

  return (
    <>
      <ProductPage />
    </>
  );
};

export default Page;
