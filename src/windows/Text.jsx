import React from "react";
import useWindowStore from "@store/window.js";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { WindowControls } from "@components";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, subtitle, image, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-white h-full overflow-y-auto p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full  object-cover rounded-lg shadow-sm"
            />
          )}

          {subtitle && (
            <p className="text-xl text-gray-500 font-medium">{subtitle}</p>
          )}

          <div className="space-y-4">
            {description?.map((para, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
