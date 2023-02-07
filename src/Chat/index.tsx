import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { RightMessage, LeftMessage } from "./Message";

import styles from "./Chat.module.scss";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export const Chat = () => {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [messages, setMessages] = React.useState<string[]>([]);

  const sendMessage = async (message: string) => {
    return await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `You: ${message}.
        Friend:`,
        temperature: 0.5,
        max_tokens: 2000,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
      })
      .then((res: any) => {
        const {
          data: {
            choices: [message],
          },
        } = res;
        console.log(message.text);
        return message.text;
      });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const message = form.get("message") as string;

    if (!message.trim()) return;

    setMessages([...messages, message]);

    setIsDisabled(!isDisabled);
    sendMessage(message).then((message: string) => {
      setMessages((messages) => [...messages, message]);
      setIsDisabled((prev) => !prev);
    });

    e.currentTarget.reset();
  };

  return (
    <div className={styles.box}>
      <ul className={styles.chat}>
        {!!messages.length &&
          messages.map((message, index) => {
            if ((index + 1) % 2)
              return <RightMessage key={index} message={message} />;
            else return <LeftMessage key={index} message={message} />;
          })}
      </ul>
      <div>
        <form onSubmit={onSubmit} className={styles.sendContainer}>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            maxRows={1}
            sx={{ width: "80%" }}
            name="message"
          />
          <Button
            disabled={isDisabled}
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};
