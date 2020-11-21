import { h, Component } from "preact";
import style from "./style";

const Message = (props) => {
  if (props.isResponse) {
    return (
      <div class={`is-flex content ${style.response}`}>
        <span class="">{props.message}</span>
      </div>
    );
  }

  return (
    <div class={`is-flex content pl-1 ${style.reply}`}>
      <span>{props.message}</span>
    </div>
  );
};

export default Message;
