import { Alert, AlertIcon } from "@chakra-ui/react";
import React, { useState } from "react";

const AlertMsg = ({ status, msg }) => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 3000);

  return (
    <>
      {show && (
        <Alert status={status}>
          <AlertIcon />
          {msg}
        </Alert>
      )}
    </>
  );
};

export default AlertMsg;
