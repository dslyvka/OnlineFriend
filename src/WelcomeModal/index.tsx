import * as React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { RightMessage, LeftMessage } from "Chat/Message";

interface IWelcomeModal {
  isModalClosed: boolean;

  setIsModalClosed: (value: boolean) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 450,
  outline: "none",
  borderRadius: "5px",
  bgcolor: "#78A1BB",
  boxShadow: 24,
  p: 4,
};

export const WelcomeModal = ({
  isModalClosed,
  setIsModalClosed,
}: IWelcomeModal) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#EBF5EE", textAlign: "center" }}
            >
              Welcome to the Online Friend app!
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                mt: 1,
                mb: 1,
                p: 1,
                outline: "2px solid #007FFF;",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Here you can chat with an online friend. You can chat with him, he
              will behave like a real person and at the same time answer any of
              your questions.
            </Typography>

            <RightMessage message="Hello! How are you?" />
            <LeftMessage message="Hi! I'm doing great, how about you?" />
            <RightMessage message="The difference between java and javascript" />
            <LeftMessage
              message="Java is a programming language used for creating
              applications and programs, while JavaScript is a scripting
              language used to add interactivity to webpages. Java is compiled
              into bytecode, while JavaScript is interpreted. Java runs on the
              Java Virtual Machine (JVM), while JavaScript runs on the web
              browser."
            />

            <Box textAlign="center">
              <Button
                onClick={() => {
                  handleClose();
                  setIsModalClosed(!isModalClosed);
                }}
                variant="contained"
                sx={{ mt: 1 }}
              >
                Okey
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
