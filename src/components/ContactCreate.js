import React, { useState } from "react";
import useLoading from "./../hooks/useLoading";
import { ADD_CONTACT, GET_CONTACTS } from "../queries";
import { useMutation } from "@apollo/react-hooks";

const ContactCreate = props => {
  const [setLoadingButton, setLoadingState] = useLoading({
    classList: ["is-loading", "no-border"]
  });
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [addContact] = useMutation(ADD_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
    variables: { name: contactName, email } 
  });

  return (
 
        <div className="contact_form">
          <h4 className="contact_form__title">Add Contact</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
              setLoadingState(true);
              addContact({ variables: { name: contactName, email } });
              setContactName("");
              setEmail("");
            }}
          >
            <div className="field">
              <div className="control">
                Contact Name
                <input
                  autoCorrect="false"
                  autoCapitalize="false"
                  className="input"
                  type="text"
                  onChange={e => setContactName(e.target.value)}
                />
              </div>
              <div className="control">
                Contact Email
                <input
                  autoCorrect="false"
                  autoCapitalize="false"
                  className="input"
                  type="text"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button
              className="button is-light"
              type="submit"
              ref={setLoadingButton}
            >
              Create contact
            </button>
          </form>
        </div>
      
  );
};

export default ContactCreate;
