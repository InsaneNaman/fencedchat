import { h, Component } from "preact";

import style from "./style";

//utils
import { hasWidthLesserThan } from "../../lib/utils/css";

//components
import CreateChatRoom from "./createChatRoom";
import ChatAnimation from "./animation";

const getChatUI = () => {
  if (hasWidthLesserThan(1024)) {
    return <CreateChatRoom />;
  }
  return (
    <>
      <ChatAnimation />
      <CreateChatRoom />
    </>
  );
};

const Chat = () => {
  return (
    <div
      class={`container is-flex ${style.container} ${style.containerHeight}`}
    >
      {getChatUI()}
    </div>
  );
};

export default Chat;
