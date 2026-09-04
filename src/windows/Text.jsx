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

      <div className="bg-white dark:bg-neutral-900 max-h-[70vh] overflow-y-auto p-8 transition-colors">
        <div className={image ? "flex gap-8" : "max-w-2xl mx-auto space-y-6"}>
          {image && (
            <img
              src={image}
              alt={name}
              className="w-2/5 shrink-0 self-stretch object-cover rounded-lg shadow-sm"
            />
          )}

          <div className="space-y-6">
            {subtitle && (
              <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">{subtitle}</p>
            )}

            <div className="space-y-4">
              {description?.map((para, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
