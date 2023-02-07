import React from "react";

import { WelcomeModal } from "./WelcomeModal";
import { Chat } from "./Chat";

export const App = () => {
  const [isModalClosed, setIsModalClosed] = React.useState(false);

  return (
    <div>
      <WelcomeModal
        isModalClosed={isModalClosed}
        setIsModalClosed={setIsModalClosed}
      />
      {isModalClosed && <Chat />}
    </div>
  );
};
