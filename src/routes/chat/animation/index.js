import { h, Component } from "preact";
import style from "./style";
import Lottie from "react-lottie";
import chatLottie from "../../../assets/paper_plane_lottie.json";

const ChatAnimation = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: chatLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div class={`${style.chatrooms}`}>
      <Lottie options={lottieOptions} />
    </div>
  );
};

export default ChatAnimation;
