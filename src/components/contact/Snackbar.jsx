import React, { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
const MySnackbar = ({ message, severity, alertTitle, autoHideDuration }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={() => setOpen(false)}
    >
      <Alert
        severity={severity}
        onClose={() => {
          setOpen(false);
        }}
      >
        <AlertTitle>{alertTitle}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MySnackbar;
