import React from "react";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { socials, SITE_COPY } from "@constants/index.js";
import { WindowControls } from "@components/index.js";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contacts</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src={SITE_COPY.contact.avatar}
          alt="Abraham"
          className="w-20 rounded-full object-cover"
        />

        <h3>{SITE_COPY.contact.heading}</h3>
        <p className="dark:text-gray-300">{SITE_COPY.contact.bio}</p>
        <p className="dark:text-gray-300">{SITE_COPY.contact.signoff}</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
