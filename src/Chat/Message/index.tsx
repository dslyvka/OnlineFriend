import styles from "./Message.module.scss";

interface IMessage {
  message: string;
  //   index: number;
}

export const RightMessage = ({ message }: IMessage) => {
  return (
    <li className={styles.liRight}>
      <p className={styles.messageRight}>
        {message}
        <span
          style={{ display: "block", marginTop: "3px", textAlign: "right" }}
        >
          {new Date().toLocaleTimeString().slice(0, 5)}
        </span>
      </p>
    </li>
  );
};

export const LeftMessage = ({ message }: IMessage) => {
  return (
    <li className={styles.liLeft}>
      <p className={styles.messageLeft}>
        {message}
        <span
          style={{ display: "block", marginTop: "3px", textAlign: "right" }}
        >
          {new Date().toLocaleTimeString().slice(0, 5)}
        </span>
      </p>
    </li>
  );
};
