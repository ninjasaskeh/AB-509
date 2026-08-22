import dayjs from "dayjs";
import { Sun, Moon, Wifi, Search, User } from "lucide-react";
import { useViteTheme } from "@space-man/react-theme-animation";
import { navIcons, navLinks, SITE_COPY, LETTER_DATA } from "@constants";
import useWindowStore from "@store/window.js";

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

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" className="apple-logo" />
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
