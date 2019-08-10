import React from "react";
import { useMutation } from "@apollo/react-hooks";

import { DELETE_CONTACT, GET_CONTACTS } from "./../queries";
const DeleteContactBtn = ({ id }) => {
  const [DeleteContact] = useMutation(DELETE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
    variables: { ID: id }
  });
  return (
    <span
      className="delete"
      onClick={e => {
        e.target.classList.add("button", "is-loading", "no-border");
        DeleteContact({ variables: { ID: id } });
      }}
    >
      delete
    </span>
  );
};

export default DeleteContactBtn;
