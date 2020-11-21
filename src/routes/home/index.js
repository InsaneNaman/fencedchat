import { h } from "preact";
import style from "./style.scss";
import Lottie from "react-lottie";
import chatLottie from "../../assets/chat-lottie.json";

//helpers
import { fireUserNameModal } from "./helpers";

const Home = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: chatLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section class={`section has-background-primary ${style.main}`}>
        <div class={`container`}>
          <div class={`columns is-vcentered ${style.columns}`}>
            <div class={`column ${style.border}`}>
              <p class="title has-text-white is-spaced is-2">Fenced Chat</p>
              <p class="subtitle has-text-white nunito-font">
                Chat Anonymously Without Storing Your Messages In Cloud
              </p>

              <button
                class="button is-primary is-inverted is-rounded is-medium mt-6"
                onClick={() => fireUserNameModal()}
              >
                Chat Now
              </button>
            </div>
            <div class="column is-invisible-touch is-three-fifths">
              <div class="tile is-10 is-pulled-right">
                <Lottie options={lottieOptions} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container has-text-centered">
          <p class="title is-spaced">What is Fenced Chat?</p>
          <p class="subtitle nunito-font">
            Fenced chat is secured platform which allows you to chat with anyone
            without signing up. It maintains users anonymity by not storing any
            message on the
            <span class="has-text-weight-semibold"> Server </span>. Not to
            mention, its an{" "}
            <span class="has-text-weight-semibold">Open Source Project</span> so
            feel free to check out and contribute to it.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
