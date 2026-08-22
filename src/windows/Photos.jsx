import React, { useState } from "react";
import clsx from "clsx";
import { WindowControls } from "@components/index.js";
import { Mail, Search } from "lucide-react";
import useWindowStore from "@store/window.js";
import { photosLinks } from "@constants/index.js";
import WindowWrapper from "@hoc/WindowWrapper.jsx";

// Each section gets its own bento pattern (different photo counts, zero
// gaps on a 4-col grid, ~270px tall) — the window itself stays a fixed
// size (`.gallery`'s h-[420px]) regardless of which pattern is showing, so
// switching categories never resizes the window, only the composition.
const BENTO_LAYOUTS = {
  // Library (5 photos): one hero tile + four squares.
  hero: [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ],
  // Favorite Moments (6 photos): two tall pillars flanking four squares.
  towers: [
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ],
  // This Year (4 photos): four equal tall columns, no hero at all.
  quad: [
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
  ],
  // With Tessa (6 photos): a row of four squares over two wide banners.
  banners: [
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
  ],
  // Starred (5 photos): four squares over one full-width strip.
  strip: [
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-4 row-span-1",
  ],
};

const Photos = () => {
  const { openWindow } = useWindowStore();
  const [activeId, setActiveId] = useState(photosLinks[0].id);
  const [loadedIds, setLoadedIds] = useState(() => new Set());
  const activeLink =
    photosLinks.find((link) => link.id === activeId) ?? photosLinks[0];
  const spans = BENTO_LAYOUTS[activeLink.layout] ?? BENTO_LAYOUTS.hero;

  const markLoaded = (id) =>
    setLoadedIds((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));

  const openPhoto = (id, img) =>
    openWindow("imgfile", {
      id,
      name: `${activeLink.title} photo`,
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: img,
    });

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                className={clsx(id === activeLink.id ? "active" : "not-active")}
                onClick={() => setActiveId(id)}
              >
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery gallery-bento">
          <ul>
            {activeLink.photos.map(({ id, img }, index) => {
              const isLoaded = loadedIds.has(id);
              return (
                <li
                  key={id}
                  className={spans[index]}
                  onClick={() => openPhoto(id, img)}
                >
                  <div className="photo-tile">
                    {!isLoaded && <div className="skeleton" />}
                    <img
                      src={img}
                      alt={`${activeLink.title} photo ${id}`}
                      loading="lazy"
                      onLoad={() => markLoaded(id)}
                      className={clsx(isLoaded ? "opacity-100" : "opacity-0")}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
