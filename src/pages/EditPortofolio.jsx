import React from "react";
import Banner from "../components/Banner";
import FormProfile from "../components/User/EditPortofolio/FormProfile";

export default function EditPortofolio() {
  return (
    <div>
      <Banner content="Edit Your Profile" />
      <FormProfile />
    </div>
  );
}
