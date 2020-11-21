import { h, Component } from "preact";
import style from "./style";
import Message from "./message";

import { STORE } from "../../../lib/store";

const getMessages = (messagesArr) => {
  return messagesArr.map((data) => (
    <Message isResponse={data.isResponse} message={data.message} />
  ));
};

const ConversationMessages = (props) => {
  const messages = STORE.useState((s) => s.messages);
  return (
    <div class={`card ${style.card}`}>
      <header class="card-header">
        <div class={`is-flex pl-2 ${style.cardHeader}`}>
          <figure class="image is-32x32">
            <img
              class="is-rounded"
              src={`https://avatars.dicebear.com/api/bottts/${props.friendName}.svg`}
            />
          </figure>
          <p class="card-header-title">{props.friendName}</p>
        </div>
      </header>
      <div class="card-content">{getMessages(messages)}</div>
    </div>
  );
};

export default ConversationMessages;
