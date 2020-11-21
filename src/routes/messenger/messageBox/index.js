import { h, Component } from "preact";
import style from "./style";

import { STORE } from "../../../lib/store";
import { useRef } from "preact/hooks";

const sendMessage = (socketRef, data) => {
  socketRef.current.emit("broadcastMsgToRoom", data);
  data = {
    ...data,
    isResponse: false,
  };
  STORE.update((s) => {
    s.messages = [...s["messages"], data];
  });
};

const MessageBox = (props) => {
  const { socketRef, room } = props;

  const inputRef = useRef();
  return (
    <div class={`is-flex ${style.component}`}>
      <div>
        <button class={`button is-primary is-rounded ${style.btn}`}>😄</button>
      </div>
      <div class={`${style.textarea}`}>
        <textarea
          type="text"
          class="textarea"
          placeholder="Enter Your Message"
          rows="1"
          ref={inputRef}
        />
      </div>
      <div>
        <button
          class={`button is-primary is-rounded ${style.btn}`}
          onClick={() => {
            sendMessage(socketRef, {
              roomId: room,
              message: inputRef.current.value,
            });
            inputRef.current.value = "";
          }}
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
