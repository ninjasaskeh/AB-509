import React from "react";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { techStack, SITE_COPY } from "@constants/index.js";
import { WindowControls } from "@components";
import {
  TerminalSequence,
  TypingAnimation,
  AnimatedSpan,
  TerminalProgressBar,
} from "@components/ui/terminal.jsx";

const INSTALL_LOG = [
  "npm WARN resolving heart-dependencies@latest",
  "+ affection@∞.0.0",
  "+ patience@2.4.0",
  "+ inside-jokes@1.0.0",
];

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>{SITE_COPY.terminal.header}</h2>
      </div>

      <TerminalSequence className="techstack">
        <TypingAnimation as="p" className="prompt-line">
          {`${SITE_COPY.terminal.prompt}${SITE_COPY.terminal.installCommand}`}
        </TypingAnimation>

        {INSTALL_LOG.map((line) => (
          <AnimatedSpan key={line} className="install-line">
            {line}
          </AnimatedSpan>
        ))}

        <TerminalProgressBar
          label="Downloading love for Abraham"
          duration={1800}
          className="progress-line"
        />

        <AnimatedSpan className="install-success">
          added 3 reasons, 9 details, and 1 heart in 1.8s ♥︎
        </AnimatedSpan>
        <AnimatedSpan className="install-success">
          found 0 bugs, 0 vulnerabilities — just you ♡
        </AnimatedSpan>

        <TypingAnimation as="p" className="prompt-line">
          {`${SITE_COPY.terminal.prompt}${SITE_COPY.terminal.command}`}
        </TypingAnimation>

        {techStack.map(({ category, items }) => (
          <AnimatedSpan key={category} className="reason-block">
            <p className="category">{`# ${category}`}</p>
            {items.map((item) => (
              <p key={item}>{`- ${item}`}</p>
            ))}
          </AnimatedSpan>
        ))}

        <AnimatedSpan className="footnote-line">
          {`✓ ${techStack.length} of ${techStack.length} loaded successfully (100%) ♥︎`}
        </AnimatedSpan>
        <AnimatedSpan className="signoff-line">
          Made with ♡ by Tessa
        </AnimatedSpan>
      </TerminalSequence>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
