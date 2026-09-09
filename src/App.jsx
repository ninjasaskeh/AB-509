import React from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import {
  Dock,
  Home,
  LockScreen,
  Navbar,
  PowerScreen,
  Welcome,
  GiftReveal,
  MiniPlayer,
} from "@components";
import {
  Finder,
  Image,
  Video,
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
      <Video />
      <Finder />
      <Contact />
      <Photos />
      <Spotify />

      <GiftReveal />
      <MiniPlayer />
    </main>
  );
};
export default App;
