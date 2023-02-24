import React from "react";

import { SwipeableDrawer } from "@material-ui/core";

import CustomForm from "./Form";

const Swipeable = ({ handleClose, handleOpen, open }) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <CustomForm />
    </SwipeableDrawer>
  );
};

export default Swipeable;
