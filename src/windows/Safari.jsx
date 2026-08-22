import React from "react";
import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
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
              value="en.wikipedia.org/wiki/Abraham_(2026)"
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
            <h1>Abraham</h1>
            <p className="wiki-subtitle">From Wikipedia, the free encyclopedia</p>

            <div className="wiki-toc">
              <p className="toc-title">Contents</p>
              <ol>
                <li>Early life</li>
                <li>Personal life</li>
                <li>In popular culture</li>
                <li>References</li>
              </ol>
            </div>

            <p>
              <strong>Abraham</strong> (born September 5) is best known for his
              effortless charm, a talent for terrible jokes delivered with
              suspicious confidence, and an uncanny ability to make an
              ordinary Tuesday feel like an occasion.<sup>[1]</sup> As of
              2026, he is widely regarded — by a sample size of one very
              biased source — as easy to be around and difficult to stay mad
              at.<sup>[2]</sup>
            </p>

            <h2>Early life</h2>
            <p>
              Details of Abraham's early years remain largely
              uneventful, which historians agree is a good sign. He is
              believed to have developed his sense of humor at a young age,
              though the exact date of his first bad pun has been lost to
              time.<sup>[3]</sup>
            </p>

            <h2>Personal life</h2>
            <p>
              Abraham is currently in a relationship with{" "}
              <a href="#">Tessa</a> (2025–present), described by sources
              close to the subject as "still new, but already easy."<sup>[4]</sup>{" "}
              The relationship is, as of this writing, in its early and
              generally well-received chapters.
            </p>

            <h2>In popular culture</h2>
            <p>
              Abraham has been informally cited as the reason behind several
              spontaneous smiles and at least one unprompted "happy
              birthday" web application.<sup>[5]</sup> He remains the
              subject of an ongoing, unscientific survey titled{" "}
              <em>Best Laugh in the Room</em>, which he has led since its
              inception.
            </p>

            <h2>References</h2>
            <ol className="wiki-refs">
              <li>Tessa (2026). Personal observations. Unpublished.</li>
              <li>Ibid.</li>
              <li>"Sources close to the subject," various dates.</li>
              <li>Tessa (2026), private correspondence.</li>
              <li>This website. See: everything else in it.</li>
            </ol>
          </article>

          <aside className="wiki-infobox">
            <p className="infobox-title">Abraham</p>
            <img src="/images/gallery/memory-06.webp" alt="Abraham" />
            <table>
              <tbody>
                <tr>
                  <th>Born</th>
                  <td>September 5</td>
                </tr>
                <tr>
                  <th>Nationality</th>
                  <td>Indonesian</td>
                </tr>
                <tr>
                  <th>Known for</th>
                  <td>Bad jokes, great timing</td>
                </tr>
                <tr>
                  <th>Partner</th>
                  <td>Tessa (2025–present)</td>
                </tr>
                <tr>
                  <th>Notable work</th>
                  <td>Making Tessa laugh at inconvenient times</td>
                </tr>
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
