import React from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import { Dock, Home, Navbar, Welcome } from "@components";
import {
  Finder,
  Image,
  Resume,
  Safari,
  Terminal,
  Text,
  Contact,
  Photos,
} from "@windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
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
    </main>
  );
};
export default App;
