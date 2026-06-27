import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Mayank Musaddi",
  logo: "/logo.webp",
  email: "mayankmusaddi@example.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/mayankmusaddi",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mayank-musaddi-19b651172",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@mayankmusaddi3959",
    icon: "mdi:youtube",
    external: true,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/mayankmusaddi/",
    icon: "mdi:instagram",
    external: true,
  },
  {
    title: "X",
    url: "https://x.com/maamusa_",
    icon: "mdi:twitter",
    external: true,
  }
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Mayank Musaddi",
    description:
      "My personal space where I share my thoughts, showcase my projects, and build interactive mini-games.",
    image: identity.logo,
  },
  role: "Software Developer",
  description:
    "Hi, I'm Mayank. This is my personal space where I share my thoughts, showcase my projects, and build interactive mini-games.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Mayank Musaddi",
    description:
      "Software developer building cool things.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `I'm Mayank. Welcome to my personal digital garden.`,
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-2.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools.`,
    items: [],
  },
  connect: {
    description: `Feel free to connect with me.`,
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Mayank Musaddi",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "BlockChain",
      description: "Projects based on Blockchain including games and smart contracts implementation",
      image: "/assets/projects/10.jpg",
      year: "2023",
      url: "https://github.com/mayankmusaddi",
    },
    {
      title: "Knowledge Distillation",
      description: "Research project on Knowledge Distillation",
      image: "/media/hierarchy.png",
      year: "2023",
      url: "https://github.com/mayankmusaddi",
    }
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Mayank Musaddi",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
