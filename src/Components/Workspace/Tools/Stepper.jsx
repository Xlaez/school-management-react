import * as React from "react";
import Box from "@material-ui/core/Box";
import SpeedDial from "@material-ui/core/";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BsFileCheckFill } from "react-icons/bs";
import { HiPrinter, HiSaveAs, HiShare } from "react-icons/hi";
// import PrintIcon from "@mui/icons-material/Print";
// import ShareIcon from "@mui/icons-material/Share";

const actions = [
  { icon: <BsFileCheckFill />, name: "Copy" },
  { icon: <HiSaveAs />, name: "Save" },
  { icon: <HiPrinter />, name: "Print" },
  { icon: <HiShare />, name: "Share" },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
