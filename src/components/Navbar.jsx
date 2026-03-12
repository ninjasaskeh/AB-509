import dayjs from "dayjs";
import { navIcons, navLinks } from "@constants";
import useWindowStore from "@store/window.js";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Arief Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd D MMM  h:mm ")}</time>
      </div>
    </nav>
  );
};
export default Navbar;
