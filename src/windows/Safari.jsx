import React from "react";
import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { WIKI_DATA } from "@constants";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const renderParts = (parts) =>
  parts.map((part, i) => {
    if (part.sup) return <sup key={i}>[{part.sup}]</sup>;
    if (part.link)
      return (
        <a key={i} href={part.link.href}>
          {part.link.text}
        </a>
      );
    if (part.em) return <em key={i}>{part.em}</em>;
    if (part.bold) return <strong key={i}>{part.text}</strong>;
    return part.text;
  });

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              readOnly
              value={WIKI_DATA.url}
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="wiki">
        <div className="wiki-topbar">
          <span className="wiki-logo">Wikipedia</span>
          <span className="wiki-tagline">The Free Encyclopedia</span>
        </div>

        <div className="wiki-body">
          <article className="wiki-article">
            <h1>{WIKI_DATA.title}</h1>
            <p className="wiki-subtitle">{WIKI_DATA.subtitle}</p>

            <div className="wiki-toc">
              <p className="toc-title">Contents</p>
              <ol>
                {WIKI_DATA.toc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>

            {WIKI_DATA.sections.map((section) => (
              <React.Fragment key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{renderParts(paragraph)}</p>
                ))}
              </React.Fragment>
            ))}

            <h2>References</h2>
            <ol className="wiki-refs">
              {WIKI_DATA.references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ol>
          </article>

          <aside className="wiki-infobox">
            <p className="infobox-title">{WIKI_DATA.infobox.title}</p>
            <img src={WIKI_DATA.infobox.image} alt={WIKI_DATA.infobox.title} />
            <table>
              <tbody>
                {WIKI_DATA.infobox.rows.map((row) => (
                  <tr key={row.label}>
                    <th>{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </aside>
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
