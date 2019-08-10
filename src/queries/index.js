import gql from "graphql-tag";

const ADD_CONTACT = gql`
  mutation AddContact($name: String!, $email: String!) {
    addContact(contact: { name: $name, email: $email }) {
      name
    }
  }
`;

const GET_CONTACTS = gql`
  {
    contacts {
      id
      name
      email
    }
  }
`;

const DELETE_CONTACT = gql`
  mutation DeleteContact($ID: ID) {
    deleteContact(id: $ID)
  }
`;

const GET_CONTACT = gql`
  query Contact($id: ID!) {
    contact(id: $id) {
      id
      name
      email
    }
  }
`;

const UPDATE_CONTACT = gql`
  mutation UpdateContact($id: ID!, $name: String!, $email: String!) {
    updateContact(contact: { id: $id, name: $name, email: $email }) {
      id
    }
  }
`;

export {
  GET_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT
};
