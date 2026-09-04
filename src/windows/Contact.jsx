import React from "react";
import {
  Phone,
  Video,
  MoreVertical,
  CheckCheck,
  Send,
  MessageCircle,
  Users,
  Settings,
  Search,
  Plus,
  Smile,
} from "lucide-react";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { socials, waContacts, SITE_COPY, LOCK_DATA } from "@constants/index.js";
import { WindowControls } from "@components/index.js";

const initials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Contact = () => {
  const whatsapp = socials.find((social) => social.text === "WhatsApp");

  return (
    <>
      <div id="window-header" className="wa-header">
        <WindowControls target="contact" />
      </div>

      <div className="wa-body">
        <nav className="wa-rail">
          <MessageCircle className="active" />
          <Phone />
          <Users />
          <span className="wa-rail-spacer" />
          <Settings />
        </nav>

        <aside className="wa-sidebar">
          <div className="wa-sidebar-top">
            <h2>Chats</h2>
          </div>

          <div className="wa-search">
            <Search />
            <input type="text" placeholder="Search" readOnly />
          </div>

          <div className="wa-filters">
            <span className="active">All</span>
            <span>Unread</span>
            <span>Favorites</span>
          </div>

          <ul className="wa-list">
            {waContacts.map(({ id, name, active, color }) => (
              <li key={id} className={active ? "active" : ""}>
                {active ? (
                  <img
                    src={SITE_COPY.contact.avatar}
                    alt={name}
                    className="wa-list-avatar"
                  />
                ) : (
                  <span
                    className="wa-list-avatar wa-list-initials"
                    style={{ backgroundColor: color }}
                  >
                    {initials(name)}
                  </span>
                )}
                <span className="wa-list-name">{name}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="wa-panel">
          <div className="wa-chat-header">
            <img
              src={SITE_COPY.contact.avatar}
              alt={LOCK_DATA.name}
              className="wa-avatar"
            />
            <div className="min-w-0">
              <h3>{LOCK_DATA.name}</h3>
              <p className="wa-status">online</p>
            </div>

            <div className="wa-icons">
              <Video />
              <Phone />
              <MoreVertical />
            </div>
          </div>

          <div className="wa-chat">
            <span className="wa-date-pill">Today</span>

            <div className="wa-bubble">
              <p>{SITE_COPY.contact.bio}</p>
              <span className="wa-meta">
                9:41 AM <CheckCheck />
              </span>
            </div>

            <div className="wa-bubble">
              <p>{SITE_COPY.contact.signoff}</p>
              <span className="wa-meta">
                9:41 AM <CheckCheck />
              </span>
            </div>
          </div>

          <a
            href={whatsapp?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-composer"
          >
            <Plus className="wa-composer-icon" />
            <span className="wa-composer-input">Continue on WhatsApp</span>
            <Smile className="wa-composer-icon" />
            <span className="wa-composer-send">
              <Send className="wa-composer-send-icon" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
