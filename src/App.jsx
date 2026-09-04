import React from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import { Dock, Home, LockScreen, Navbar, PowerScreen, Welcome } from "@components";
import {
  Finder,
  Image,
  Resume,
  Safari,
  Terminal,
  Text,
  Contact,
  Photos,
  Spotify,
} from "@windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <PowerScreen />
      <LockScreen />

      <Navbar />
      <Welcome />
      <Dock />

      <Home />
      <Terminal />
      <Safari />
      <Resume />
      <Text />
      <Image />
      <Finder />
      <Contact />
      <Photos />
      <Spotify />
    </main>
  );
};
export default App;
