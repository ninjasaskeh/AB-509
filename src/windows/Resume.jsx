import { lazy, Suspense, useState } from "react";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { WindowControls } from "@components";
import { Download } from "lucide-react";
import useWindowStore from "@store/window.js";

const ResumeViewer = lazy(() => import("@windows/ResumeViewer.jsx"));

const Resume = () => {
  const isOpen = useWindowStore((s) => s.windows.resume.isOpen);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const [hasOpened, setHasOpened] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) setHasOpened(true);
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      {hasOpened && (
        <Suspense fallback={<div className="p-8 text-sm text-gray-400">Loading…</div>}>
          <ResumeViewer />
        </Suspense>
      )}
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
