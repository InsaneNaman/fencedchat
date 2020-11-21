import { h } from "preact";
import { useState, useRef } from "preact/hooks";
import style from "./style";

import { STORE } from "../../../lib/store";
import { updateValueInSTORE } from "../../../lib/store/helpers";

//helpers
import {
  copyUserURL,
  getChatRoomLabel,
  createChatRoomOnSocket,
  joinRoom,
} from "./helpers";

const CreateChatRoom = (props) => {
  console.log(props);
  const chatRoomURL = getChatRoomLabel();
  const chatRoomId = STORE.useState((s) => s.chatRoom);
  const passwordRef = useRef("");
  const chatroomIDRef = useRef("");

  return (
    <div class={`${style.card} ${style.cardWidth}`}>
      <div class={`field`}>
        <label class="label has-text-white">Room ID </label>
        <div class="control has-icons-left">
          <span class="icon is-small is-left">
            <i class="gg-ghost-character"></i>
          </span>
          <input
            class="input is-rounded"
            type="text"
            placeholder="*****-****-*****"
            ref={chatroomIDRef}
          />
        </div>
      </div>
      <div class={`field`}>
        <label class="label has-text-white">Password</label>
        <div class="control has-icons-left">
          <span class="icon is-small is-left">
            <i class="gg-lock"></i>
          </span>
          <input
            class="input is-rounded"
            type="password"
            placeholder="Leave Empty for default"
            ref={passwordRef}
          />
        </div>
      </div>
      <div class={`field has-text-centered ${style.field}`}>
        <button
          class="button is-primary is-inverted is-rounded"
          onClick={() =>
            joinRoom(chatroomIDRef?.current.value, passwordRef?.current.value)
          }
        >
          Start Chat ✌️
        </button>
      </div>
      <div class={`has-text-white has-text-centered ${style.field}`}>
        <p class={`${style.or}`}>
          <span>or</span>
        </p>
      </div>
      <div class={`${style.field}`}>
        <p class="has-text-white has-text-centered">
          Copy and Share this URL 👇
        </p>
        <div class="columns mt-5">
          <div class="column is-four-fifths">
            <p class="has-text-white">{chatRoomURL}</p>
          </div>
          <div class="column has-text-centered">
            <button class="button" onClick={() => copyUserURL(chatRoomId)}>
              <span class="icon is-small">
                <i class="gg-clipboard"></i>
              </span>
              <span class="is-small">Copy</span>
            </button>
            <button
              class="button mt-2 is-inverted"
              onClick={() => createChatRoomOnSocket(chatRoomId)}
            >
              <span class="is-small">🚀 Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChatRoom;
