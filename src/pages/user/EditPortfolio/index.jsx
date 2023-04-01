import React from "react";
import Banner from "../../layouts/Banner";
import FormProfile from "./FormProfile";

export default function EditPortfolio() {
  return (
    <div>
      <Banner content="Edit Your Profile" />
      <FormProfile />
    </div>
  );
}
