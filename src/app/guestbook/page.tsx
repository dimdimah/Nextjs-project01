import React from "react";
import Dropdown from "@/components/dropdown";

const page = () => {
  return (
    <>
      <Dropdown text="Senin" value="Java" items="10.00" />
      <Dropdown text="Selasa" value="Java" items="10.00" />
    </>
  );
};

export default page;
