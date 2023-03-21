import React from "react";
import FormProfile from "../../components/user/createPortofolio/FormProfile";
import Banner from "../../components/user/share/Banner";

export default function CreatePortofolio() {
  return (
    <div>
      <Banner content="Create Your Profile" />
      <FormProfile />
    </div>
  );
}
