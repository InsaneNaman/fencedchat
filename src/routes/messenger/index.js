import { h, Component } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import style from "./style";

//components
import MessageBox from "./messageBox";
import ConversationMessages from "./conversationMessages";

import socketIOClient from "socket.io-client";

import { STORE } from "../../lib/store";
import { fireToast } from "../../lib/utils/sweetalert";
import { TOAST_EVENT_TYPE } from "../../lib/constants";

const ENDPOINT = "https://fencedchat.herokuapp.com";

const updateMessageHistory = (message) => {
  STORE.update((s) => {
    s.messages = [...s["messages"], message];
  });
};

const Messenger = (props) => {
  const roomId = props.room;
  const password = STORE.useState((s) => s.password);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(ENDPOINT);
    socketRef.current.emit("join_room", { roomId, password });
    socketRef.current.on("new_client", (data) => {
      fireToast(TOAST_EVENT_TYPE.SUCCESS, data, 1000);
    });
    socketRef.current.on("new_message", (data) => {
      updateMessageHistory({
        message: data,
        isResponse: true,
      });
    });
  }, []);
  return (
    <>
      <div
        class={`container is-flex ${style.border} ${style.container} ${style.containerHeight}`}
      >
        <div class={`${style.messages}`}>
          <ConversationMessages friendName="Anonymous" />
        </div>
        <div class={`${style.messageBox}`}>
          <MessageBox socketRef={socketRef} room={roomId} />
        </div>
      </div>
    </>
  );
};

export default Messenger;
