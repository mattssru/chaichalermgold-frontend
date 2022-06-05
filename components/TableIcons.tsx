import React, { forwardRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Icons } from "material-table";

const TableIcons: Icons = {
  Delete: forwardRef((props, ref) => (
    <DeleteIcon {...props} ref={ref} style={{ backgroundColor: "red" }} />
  )),
};

export default TableIcons;
