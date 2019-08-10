import React from "react";
import ContactItem from "./ContactItem";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { GET_CONTACTS } from "../queries";

const ContactList = props => {
  const { data} = useQuery(GET_CONTACTS);
  const { contacts } = data;
    return (
      <React.Fragment>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts &&
                contacts.map(contact => (
                  <ContactItem
                    key={contact.id}
                    {...contact}
                    onUpdate={id => {
                      props.history.push(`/contact/${id}`);
                    }}
                  />
                ))}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
};

export default ContactList;
