/* eslint-disable no-unused-vars */

import Table from "../ui/TableHeader";

/* eslint-disable react/prop-types */
function PropertyTableRow({ cabin }) {
  const { name, email, income, incoming } = cabin;
  return (
    <Table.Row>
      <div>{name}</div>
      <div>{email}</div>
      <div>{income}</div>
      <div>{incoming}</div>
      <div>icon</div>
    </Table.Row>
  );
}

export default PropertyTableRow;
