import React, { useState } from "react";
import useFormInput from "../hooks/useFormInput";
import { UPDATE_CONTACT, GET_CONTACTS } from "../queries";
import { useMutation } from "@apollo/react-hooks";

const ContactUpdateForm = ({ contact }) => {
  const [profile] = useState(contact);
  const email = useFormInput(profile.email);
  const fullName = useFormInput(profile && profile.name);

  const [updateContact] = useMutation(UPDATE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
    variables: { name: fullName.value, email: email.value, id: contact.id }
  });

  return (
    <div style={{ margin: "1.6rem" }} className="App">
      <div className="inputContainer">
        <label htmlFor="fullname">Name</label>
        <input {...fullName} name="fullname" />
      </div>
      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input {...email} name="email" />
      </div>
      <button className="button" onClick={() => updateContact()}>
        Update Profile
      </button>
    </div>
  );
};

export default ContactUpdateForm;
