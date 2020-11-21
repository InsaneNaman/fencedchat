import { h } from "preact";
import style from "./style";

const Header = () => (
  <header class={style.header}>
    <nav
      class="navbar is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://fenced.chat">
          <img src="../../assets/brand.svg" />
          <span
            class={`is-size-4 has-text-weight-semibold ml-2 ${style.brandname}`}
          >
            Fenced Chat
          </span>
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
