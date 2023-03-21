import React from "react";
import FormProfile from "../../components/user/editPortofolio/FormProfile";
import Banner from "../../components/user/share/Banner";

export default function EditPortofolio() {
  return (
    <div>
      <Banner content="Edit Your Profile" />
      <FormProfile />
    </div>
  );
}
