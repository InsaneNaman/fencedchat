import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Footer from "./footer";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Chat from "../routes/chat";
import Messenger from "../routes/messenger";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <div class="full-height">
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Chat path="/chat/" user="me" />
            <Messenger path="/chat/:room" />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}
