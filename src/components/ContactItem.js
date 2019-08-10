import React from "react";
import { TableRow, TableCell, ButtonGroup, Button } from "@material-ui/core";

import ContactDelete from "./ContactDelete";

const ContactItem = ({ id, name, email, onUpdate }) => (
  <TableRow key={id}>
    <TableCell component="th" scope="row">
      {name}
    </TableCell>
    <TableCell>{email}</TableCell>
    <TableCell>
      <ButtonGroup size="small" aria-label="Small outlined button group">
        <Button
          onClick={e => {
            e.preventDefault();
            onUpdate(id);
          }}
        >
          Edit
        </Button>
        <Button>
          <ContactDelete {...{ id }} />
        </Button>
      </ButtonGroup>
    </TableCell>
  </TableRow>
);

export default ContactItem;
