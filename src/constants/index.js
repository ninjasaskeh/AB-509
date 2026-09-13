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
    id: "spotify",
    name: "Spotify",
    icon: "spotify.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Trash",
    icon: "trash.png",
    canOpen: true,
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
    link: "https://wa.me/6285711242483",
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
  { id: 1, name: "Tessa", active: true, color: "#128C7E" },
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
    subtitle: "hello",
    title: "Abraham!",
    mobileNotice:
      "Best viewed on a laptop or tablet, so the animations feel right :)",
  },
  navbar: {
    brand: "AB-139",
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
    downloadLabel: "Downloading love for Abraham",
    signoff: "Made with ♡ by Tessa",
  },
};

export const SPOTIFY_DATA = {
  playlist: {
    title: "For Abraham",
    owner: "Tessa",
    description: "Songs older than your phone. Just the way you like it.",
    cover: "/images/gallery/memory-09.webp",
  },
  tracks: [
    {
      title: "Mengudara",
      artist: "Idgitaf",
      album: "Idgitaf",
      duration: "3:35",
      cover: "/images/gallery/memory-17.webp",
      src: "/music/Idgitaf Mengudara Official Music Video.mp3",
    },
    {
      title: "Last Forever",
      artist: "LANY",
      album: "LANY",
      duration: "4:12",
      cover: "/images/gallery/memory-18.webp",
      src: "/music/LANY Last Forever Official Music Video.mp3",
    },
    {
      title: "This Town (Live)",
      artist: "Niall Horan",
      album: "Niall Horan",
      duration: "4:43",
      cover: "/images/gallery/memory-19.webp",
      src: "/music/Niall Horan This Town Live.mp3",
    },
    {
      title: "Hutasoit Saonari Sogot Haduan",
      artist: "Osen Hutasoit",
      album: "Osen Hutasoit",
      duration: "5:43",
      cover: "/images/gallery/memory-20.webp",
      src: "/music/Osen Hutasoit Official Music Video.mp3",
    },
    {
      title: "Right Here Waiting",
      artist: "Richard Marx",
      album: "Richard Marx",
      duration: "4:22",
      cover: "/images/gallery/memory-21.webp",
      src: "/music/Right Here Waiting - Richard Marx.mp3",
    },
    {
      title: "Thank You 4 Lovin Me",
      artist: "Paul Partohap",
      album: "Paul Partohap",
      duration: "5:06",
      cover: "/images/gallery/memory-22.webp",
      src: "/music/Thank You 4 Lovin Me - Paul Partohap.mp3",
    },
  ],
};

export const LOCK_DATA = {
  name: "Abraham",
  avatar: "/images/gallery/memory-06.webp",
  password: "13092002",
  hint: "Hint: your birth date (DDMMYYYY)",
};

export const GIFT_DATA = {
  image: "/images/gallery/memory-31.webp",
  title: "Your gift 🤍",
  caption: "From Tessa, with love.",
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

// Safari window content — Wikipedia-style article rendered from data.
// Paragraphs are arrays of parts so inline formatting (sup refs, links,
// italics) can still be expressed without hardcoding JSX in the window.
export const WIKI_DATA = {
  url: "en.wikipedia.org/wiki/Abraham_(2026)",
  title: "Abraham",
  subtitle: "From Wikipedia, the free encyclopedia",
  toc: ["Early life", "Personal life", "In popular culture", "References"],
  sections: [
    {
      heading: "Early life",
      paragraphs: [
        [
          {
            text: "Abraham Sidabukke was born on 13 September 2002 as the first child of the Sidabukke family. Since the beginning, his presence brought joy, warmth, and a new kind of happiness into his small family.",
          },
        ],
        [
          {
            text: "Growing up, Abraham developed into someone known for his confidence, determination, and hardworking nature. He is not someone who easily gives up; once he has something in mind, he tends to keep moving forward, even when things become difficult. Behind that strong personality, however, is also someone playful, mischievous, and surprisingly understanding toward the people he cares about.",
          },
          { sup: 1 },
        ],
        [
          {
            text: "His personality may sometimes appear calm, cold, or indifferent at first glance. But those who know him closely understand that his mischievous side is practically part of his DNA. Somewhere between his serious expression and his tendency to act cool, there is always an opportunity for Abraham to be annoying—in the most lovable way possible.",
          },
        ],
      ],
    },
    {
      heading: "Personal life",
      paragraphs: [
        [
          {
            text: "Abraham is known for his love of songs that are, according to certain people, a little too old for his generation. His playlist may occasionally sound like it belongs to another era, but perhaps that is part of his charm.",
          },
          { sup: 2 },
        ],
        [
          {
            text: "He is also someone who can be very hard on himself and tends to overthink even the smallest things. Sometimes, his mind travels much further than the situation actually requires. Yet despite being strict with himself and carrying his own worries quietly, Abraham always tries to be present for the people he loves—especially his family and his partner.",
          },
        ],
        [
          {
            text: "Behind his seemingly cold and indifferent personality is someone who genuinely cares. He may not always express everything in the sweetest or most obvious way, but his presence, effort, and concern speak for him.",
          },
        ],
        [
          {
            text: "As of 2026, Abraham has also become the partner and one of the people filling Tessa's everyday life. Their relationship may still be new, but somehow, being together has already felt easy and natural. In a relatively short time, they have shared many stories, learned more about each other, and slowly built something deeper than either of them may have expected.",
          },
          { sup: 4 },
        ],
        [
          {
            text: "From 2026 to infinity, there are still many pages waiting to be written.",
          },
        ],
      ],
    },
    {
      heading: "In popular culture",
      paragraphs: [
        [
          {
            text: "Among the people closest to him, Abraham is perhaps best known as a combination of contradictions.",
          },
        ],
        [
          {
            text: "He can appear cold, yet cares deeply. He can act indifferent, yet remembers more than people expect. He is confident, but can still overthink the smallest details. He may be hard on himself, but he remains understanding toward others. And despite looking calm and serious, his tendency to be incredibly mischievous is something that cannot—and probably should not—be separated from his identity.",
          },
        ],
        [
          {
            text: "In his own small universe, Abraham is also recognized as a man with big dreams. He carries ambitions and hopes that are greater than his current circumstances, and therefore, his courage and determination must continue to grow with them.",
          },
        ],
        [
          {
            text: "As a Batak man, Abraham carries a strong sense of dignity and self-respect. Yet strength, for him, should never mean looking down on others. It should also mean knowing how to respect, protect, and appreciate the people around him—especially women.",
          },
        ],
        [{ text: "His dreams are big." }],
        [{ text: "So his spirit must be even bigger." }],
        [{ text: "His efforts must be stronger." }],
        [
          {
            text: "And if there is something he truly wants, perhaps his prayers should be asked for a little louder, too.",
          },
          { sup: 3 },
        ],
        [
          {
            text: "Because Abraham is meant to keep growing, keep trying, and keep believing that the life he dreams about is possible.",
          },
        ],
      ],
    },
  ],
  references: [
    "Tessa (2026) Personal observations. On Abraham's confidence, hardworking nature, refusal to give up, and excessive levels of mischievous behavior.",
    "Abraham's Music Library. (Undated). A collection of songs that may have been released before his time.",
    "God. (Ongoing). Unpublished records regarding Abraham's prayers, dreams, future, and everything he is still becoming.",
    "Abraham & Tessa. (2026–∞). An ongoing story. Currently still being written.",
  ],
  infobox: {
    title: "Abraham",
    image: "/images/gallery/memory-06.webp",
    rows: [
      { label: "Born", value: "13 September 2002" },
      { label: "Ethnicity", value: "Batak" },
      { label: "Known for", value: "Confidence, mischief, big dreams" },
      { label: "Partner", value: "Tessa (2026–present)" },
      { label: "Notable work", value: "Overthinking, then showing up anyway" },
    ],
  },
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
          coverImage: "/images/gallery/memory-14.webp",
          description: [
            "Our story didn't take much time to begin. It started with just a conversation—one that somehow went on longer than either of us expected. And honestly, from the very beginning, I already had a feeling that somehow, we were going to be something. Because if there is one thing about me, it's that I always notice the signals first. So yes... maybe I knew before you did. Xixixi.",
            "In the beginning, there were many doubts and question marks. We were both still figuring things out, slowly learning each other and introducing one another to our own little worlds. You came with your past and the hardness the world had taught you, while I came with my imperfections, wounds, and things I was still learning to heal from. We both had our own stories, scars, and ways of protecting ourselves—but somehow, we still found our way to each other.",
            "Slowly, I started seeing the person behind everything you had built around yourself. Someone willing to learn, listen, understand, and accept. You treated me kindly, welcomed me warmly, and somehow understood my situation even when I didn't know how to explain it. And for someone who comes with too many thoughts and worries, being understood without having to say everything means more than you probably realize.",
            "And perhaps one of the things that makes me happiest is that this is my first time being with a Batak man. Ah! I can't even explain how happy and proud that makes me. Being able to go to church with you, worship together, pray before eating and before sleeping—it feels different. It feels special. There is something beautiful about having someone beside you while we bring our hopes, worries, dreams, and prayers to God.",
            "Thank you for introducing me to Bou, Amang Boru, and your family, and for letting me become a small part of your world.",
            "Our relationship may still be new, but somehow, it doesn't feel unfamiliar. It feels easy. It feels warm. It feels like we've already shared so much. And maybe that's the beauty of it—we don't have to rush. There are still so many stories to tell, places to see, and versions of ourselves we haven't met yet.",
            "Maybe this is only Chapter I. And honestly? That's exactly how it should be. Because there are still so many chapters waiting for us.",
            "It all started with one conversation that lasted longer than either of us expected.",
            "And somehow, that conversation became us.",
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
          coverImage: "/images/gallery/memory-32.webp",
          description: [
            "There are so many little moments with you that I love—the endless conversations, silly jokes, random teasing, our little routines, worshipping together, and all the moments when your jail side comes out. But one memory will always have a very special place in my heart.",
            "When Papah passed away, you were there.",
            "You came all the way to Bekasi, not only for me, but for my family too. And one day, while looking through my gallery, I found a video of you helping carry Papah's coffin. I watched it and my heart felt so warm. I was holding back tears, feeling incredibly grateful and proud at the same time.",
            "You didn't have to do any of that. You simply chose to be there.",
            'Thank you for being the last man I introduced to Papah, for meeting him twice during the final moments of his life, and for giving him the chance to know you. Thank you for treating my family with kindness, for becoming comfortable with my extended family, and for letting me proudly say, "This is my Abraham."',
            "Maybe that's why this is one of my favorite memories. Not because it was a happy moment, but because it showed me who you were when things weren't.",
            "You stayed. You showed up. You cared.",
            "And in one of the hardest chapters of my life, you became one of the people who made it a little easier to carry.",
            "Some moments become memories. Some memories become proof. And this one became proof that I am lucky to have you.",
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
        {
          id: 5,
          name: "video-1.mp4",
          icon: "/images/video.png",
          kind: "file",
          fileType: "video",
          position: "top-52 right-80",
          videoUrl: "/videos/video-1.mp4",
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
          subtitle: "Chapter Three: Happy Birthday, My Love 🤍",
          coverImage: "/images/gallery/memory-33.webp",
          description: [
            "Today is your day.",
            "And I just want to take this moment to say thank you.",
            "Thank you for coming into my life.",
            "Thank you for being my rainbow after the storm.",
            "Thank you for welcoming me warmly with all my wounds and shortcomings.",
            "Thank you for proving to me that there are men who can take responsibility. Men who can be gentlemen. Men who know how to treat a woman well.",
            "Thank you for being there and filling my days.",
            "Thank you for listening to every single story—from my happiest moments to all my complaints, worries, and endless little thoughts. Thank you for still prioritizing me during your busy days.",
            "Thank you for every act of attention. Thank you for every effort. Thank you for every amount of money you have spent. And thank you for every second of your time that you have given to me.",
            "None of those things are invisible to me. I see them. I appreciate them. And I will always remember them.",
            "Thank you for being my shoulder to lean on every time things were getting bad. Thank you for becoming someone I can come home to.",
            "On your birthday, I pray that you are always given good health, a long and beautiful life, and a heart that remains strong through everything. I hope more good things continue to find their way to you, God's blessings overflow in every part of your life, and every prayer you have whispered slowly finds its answer. I hope you continue getting closer to the dreams you have been working for, that your path becomes clearer, your heart grows stronger, and your faith becomes deeper.",
            "You have big dreams, Abraham, so your spirit has to be even bigger, your courage stronger, and your efforts greater. And when there is something you truly want, perhaps you should ask God a little louder too, because I believe there are still so many beautiful things waiting for you. I hope you become more comfortable expressing what you feel and think, learn to be kinder to yourself, and, of course, develop an even bigger patience when dealing with me. XOXOXO.",
            "But most importantly, please remember this:",
            "You don't have to become everything overnight, and you don't have to figure everything out all at once. Keep growing, keep trying, keep praying, and keep dreaming. I'll always be proud of you—not only for your biggest achievements, but also for the smallest wins, the easiest goals, the little progress that nobody else notices, and all the things you are quietly working on for your future. I will always be one of the people cheering for you. So cheers to another year of your life, to every blessing that is coming, to every dream you will achieve, and to every challenge that will only make you stronger. I hope this new age brings you closer to the life you have always dreamed about, and somewhere along the way, I hope I still get to be beside you. Let's achieve more things, go to more places, create more memories, and grow together. And one day, let's look back at all of this and realize just how far we have come.",
            "Happy Birthday, sayang. Thank you for being you, for coming into my life, and for becoming such a beautiful part of my story. I love you more than everything in this world. Whatever the future looks like, I hope we keep choosing each other. Let's chase our dreams together, achieve things together, grow together, and if the world feels too big to conquer alone—let's take it on together.",
            "Cheers for 24! Now, let's conquer the world. 🤍",
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
      name: "@#$%^&*.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/gallery/memory-34.jpeg",
    },
    {
      id: 2,
      name: "rip.mov",
      icon: "/images/video.png",
      kind: "file",
      fileType: "video",
      position: "top-52 left-10",
      videoUrl: "/videos/rip.mov",
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
  spotify: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  videofile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
