import React from "react";
import FormProfile from "./FormProfile";
import Banner from "../../layouts/Banner";

export default function CreatePortfolio() {
  return (
    <div>
      <Banner content="Create Your Profile" />
      <FormProfile />
    </div>
  );
}
