import React from "react";
import useWindowStore from "@store/window.js";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { WindowControls } from "@components";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2 className="text-sm font-semibold">{name}</h2>
      </div>

      <div className="bg-white h-full overflow-hidden flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4 bg-gray-50">
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-full object-contain shadow-lg rounded-sm"
          />
        </div>
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
