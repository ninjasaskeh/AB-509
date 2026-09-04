import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { Sun, Moon, Wifi, Search, User } from "lucide-react";
import { useViteTheme } from "@space-man/react-theme-animation";
import { navIcons, navLinks, SITE_COPY, LETTER_DATA, LOCK_DATA } from "@constants";
import useWindowStore from "@store/window.js";
import useLockStore from "@store/lock.js";

const NAV_ICON_MAP = {
  wifi: { Icon: Wifi, size: 16 },
  search: { Icon: Search, size: 14 },
  user: { Icon: User, size: 15 },
};

const ModeToggle = () => {
  const { resolvedTheme, toggleTheme, ref } = useViteTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => toggleTheme()}
      aria-label="Toggle dark mode"
      className="nav-icon mode-toggle flex-center cursor-pointer"
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
};

const AppleMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { closeAllWindows } = useWindowStore();
  const { lock, restart, shutDown } = useLockStore();

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const runAction = (action) => () => {
    setOpen(false);
    closeAllWindows();
    action();
  };

  return (
    <div className="apple-menu" ref={menuRef}>
      <img
        src="/images/logo.svg"
        alt="logo"
        className="apple-logo cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <ul className="apple-menu-dropdown">
          <li onClick={runAction(lock)}>Lock Screen</li>
          <li onClick={runAction(restart)}>Restart...</li>
          <li onClick={runAction(shutDown)}>Shut Down...</li>
          <li className="divider" />
          <li onClick={runAction(lock)}>Log Out {LOCK_DATA.name}...</li>
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <AppleMenu />
        <p className="font-bold">{SITE_COPY.navbar.brand}</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() =>
                type === "letter"
                  ? openWindow("txtfile", LETTER_DATA)
                  : openWindow(type)
              }
            >
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <ul>
          {navIcons.map(({ id, icon }) => {
            if (icon === "mode") {
              return (
                <li key={id}>
                  <ModeToggle />
                </li>
              );
            }

            const { Icon, size } = NAV_ICON_MAP[icon];
            return (
              <li key={id}>
                <Icon size={size} className="nav-icon icon-hover" />
              </li>
            );
          })}
        </ul>
        <time>{dayjs().format("ddd D MMM  h:mm ")}</time>
      </div>
    </nav>
  );
};
export default Navbar;
