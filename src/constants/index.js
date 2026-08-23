const navLinks = [
  {
    id: 1,
    name: "Memories",
    type: "finder",
  },
  {
    id: 3,
    name: "For You",
    type: "contact",
  },
  {
    id: 4,
    name: "Letter",
    type: "letter",
  },
];

const navIcons = [
  {
    id: 1,
    icon: "wifi",
  },
  {
    id: 2,
    icon: "search",
  },
  {
    id: 3,
    icon: "user",
  },
  {
    id: 4,
    icon: "mode",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Finder",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Safari",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Photos",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "WhatsApp",
    icon: "whatsapp.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Trash",
    icon: "trash.png",
    canOpen: false,
  },
];

// "Reasons" — Terminal window content
const techStack = [
  {
    category: "Your Vibe",
    items: ["That laugh", "Terrible jokes, great delivery", "Calm in chaos"],
  },
  {
    category: "Favorite Moments",
    items: ["Our first conversation", "Every random call", "This year, so far"],
  },
  {
    category: "Reasons I'm Here",
    items: ["You listen", "You show up", "You, just being you"],
  },
];

const socials = [
  {
    id: 1,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#e1306c",
    link: "#", // TODO: replace with real Instagram link
  },
  {
    id: 2,
    text: "WhatsApp",
    icon: "/icons/whatsapp.svg",
    bg: "#25d366",
    link: "#", // TODO: replace with real WhatsApp link
  },
];

// 30 photos split across the sidebar sections instead of one giant grid —
// every section gets its own bento pattern and photo count (see
// BENTO_LAYOUTS in Photos.jsx). The window itself stays a fixed size no
// matter which pattern is active, so only the composition changes.
const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
    layout: "hero",
    photos: [4, 8, 1, 21, 22].map((n) => ({
      id: n,
      img: `/images/gallery/memory-${String(n).padStart(2, "0")}.webp`,
    })),
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Favorite Moments",
    layout: "towers",
    photos: [11, 20, 15, 6, 13, 18].map((n) => ({
      id: n,
      img: `/images/gallery/memory-${String(n).padStart(2, "0")}.webp`,
    })),
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "This Year",
    layout: "quad",
    photos: [2, 9, 16, 23].map((n) => ({
      id: n,
      img: `/images/gallery/memory-${String(n).padStart(2, "0")}.webp`,
    })),
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "With Tessa",
    layout: "banners",
    photos: [5, 7, 12, 14, 28, 29].map((n) => ({
      id: n,
      img: `/images/gallery/memory-${String(n).padStart(2, "0")}.webp`,
    })),
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Starred",
    layout: "strip",
    photos: [3, 10, 17, 19, 24].map((n) => ({
      id: n,
      img: `/images/gallery/memory-${String(n).padStart(2, "0")}.webp`,
    })),
  },
];

const waContacts = [
  { id: 1, name: "Abraham", active: true, color: "#128C7E" },
  { id: 2, name: "Arief Hebat", color: "#e17055" },
  { id: 3, name: "Nata Pikun", color: "#6c5ce7" },
  { id: 4, name: "Indah Gaming", color: "#0984e3" },
];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  photosLinks,
  waContacts,
};

// Copy that used to be hardcoded directly in JSX — centralized here so it's
// a single edit for the client to personalize later.
export const SITE_COPY = {
  welcome: {
    subtitle: "Happy birthday, my love. This is all for",
    title: "abraham.",
    mobileNotice:
      "Best viewed on a laptop or tablet, so the animations feel right :)",
  },
  navbar: {
    brand: "AB-509",
  },
  contact: {
    avatar: "/images/gallery/memory-02.webp",
    heading: "For you, Abraham",
    bio: "I know it's still early for us, but I wanted today to feel special anyway. Every little moment with you so far has been one I want to keep. Happy birthday — here's to many more.",
    signoff: "From, Tessa",
  },
  terminal: {
    prompt: "tessa@heart ~ % ",
    installCommand: "npm install more-love-for-abraham",
    command: "cat reasons-i-like-you.txt",
    header: "Terminal",
  },
};

export const LETTER_DATA = {
  name: "letter-for-abraham.txt",
  subtitle: "For Abraham, happy 24th birthday",
  image: "/images/gallery/memory-02.webp",
  description: [
    "Happy birthday, Abraham. I've been trying to write this for a few days now, and I still don't think I've found the right words — so I'll just say what's true.",
    "We're still new, you and me. But somehow it already feels easy — like I don't have to try so hard to be myself around you. That's rare, and I don't take it for granted.",
    "Today's about you, so I hope it's full of the things that make you smile. I'm grateful I get to be part of it, even this early on.",
    "Here's to twenty-four, and to finding out what else this year has for us. Happy birthday. — Tessa",
  ],
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Our Story",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Chapter 1
    {
      id: 5,
      name: "How We Started",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "how-we-started.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Chapter One",
          description: [
            "It didn't take much — just a conversation that went on longer than either of us expected.",
            "No grand story yet, just the beginning of one. And honestly, that's exactly how it should be.",
            "Some of the best chapters start quietly, and I have a feeling this is one of them.",
          ],
        },
        {
          id: 4,
          name: "memory-01.webp",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/gallery/memory-05.webp",
        },
      ],
    },

    // ▶ Chapter 2
    {
      id: 6,
      name: "Favorite Moments",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "favorite-moments.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          subtitle: "Chapter Two",
          description: [
            "A handful of moments already stand out — the ones I catch myself thinking back to for no particular reason.",
            "Nothing dramatic, just good. Which might be the best kind of memory to make.",
            "I'm keeping a running list, and it's only getting longer.",
          ],
        },
        {
          id: 4,
          name: "memory-02.webp",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/gallery/memory-10.webp",
        },
      ],
    },

    // ▶ Chapter 3
    {
      id: 7,
      name: "For Today",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "for-today.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Chapter Three",
          description: [
            "Twenty-four looks good on you already.",
            "I hope today is full of easy laughs and nothing to worry about — just a good day, start to finish.",
            "Happy birthday, Abraham. Here's to the year ahead.",
          ],
        },
        {
          id: 4,
          name: "memory-03.webp",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/gallery/memory-15.webp",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "For Abraham",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "memory-a.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gallery/memory-06.webp",
    },
    {
      id: 2,
      name: "memory-b.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gallery/memory-11.webp",
    },
    {
      id: 3,
      name: "memory-c.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gallery/memory-16.webp",
    },
    {
      id: 4,
      name: LETTER_DATA.name,
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-50 left-5",
      ...LETTER_DATA,
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "memory-x.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/gallery/memory-20.webp",
    },
    {
      id: 2,
      name: "memory-y.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/gallery/memory-25.webp",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
