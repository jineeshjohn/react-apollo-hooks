import React from "react";
import { Typography, Toolbar } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { GET_CONTACT } from "../queries";
import ContactUpdateForm from "./ContactUpdateForm";

const ContactUpdate = ({ contactItem }) => {
  const {
    loading,
    data: { contact }
  } = useQuery(GET_CONTACT, { variables: { id: contactItem.id } });

  return (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap>
          <div className="title">Personal Details</div>
        </Typography>
      </Toolbar>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ContactUpdateForm contact={contact} />
      )}
    </div>
  );
};

export default ContactUpdate;
