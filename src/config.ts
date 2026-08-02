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
  logo: "/logo.png",
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
    title: "Posts",
    url: "/posts",
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
  socialLinks: socialLinks.filter(link => link.title === 'GitHub'),
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
    description: `I am a Senior AI Engineer working on building and training artificial intelligence models. My job is to teach computers how to handle human tasks more effectively. I enjoy breaking down complex problems and writing clean, reliable code.

I believe in understanding the "why" before jumping into the "how." For me, building good software is about having clear goals and solving the right problems.

Outside of work, I like to keep a good balance. I spend my free time reading about philosophy and playing the piano. I appreciate good conversations, continuous learning, and keeping things organized.`,
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
    description: `Some of my professional experience.`,
    items: [
      {
        title: "Senior Software Engineer",
        company: {
          name: "Google",
          image: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
          url: "https://google.com",
        },
        date: "Aug 2024 - Present",
      },
      {
        title: "Senior Product Engineer - AI/ML",
        company: {
          name: "Sprinklr",
          image: "https://www.google.com/s2/favicons?domain=sprinklr.com&sz=128",
          url: "https://sprinklr.com",
        },
        date: "June 2022 - Sept 2024",
      },
      {
        title: "Research Assistant",
        company: {
          name: "IIIT Hyderabad",
          image: "https://www.google.com/s2/favicons?domain=iiit.ac.in&sz=128",
          url: "https://www.iiit.ac.in",
        },
        date: "May 2019 - May 2022",
      },
      {
        title: "Software Engineer",
        company: {
          name: "Bicycle",
          image: "https://www.google.com/s2/favicons?domain=bicycle.ai&sz=128",
          url: "#",
        },
        date: "Aug 2021 - Dec 2021",
      },
      {
        title: "Machine Learning Intern",
        company: {
          name: "Sprinklr",
          image: "https://www.google.com/s2/favicons?domain=sprinklr.com&sz=128",
          url: "https://sprinklr.com",
        },
        date: "June 2021 - July 2021",
      },
      {
        title: "Machine Learning Intern",
        company: {
          name: "Matchday.ai",
          image: "https://www.google.com/s2/favicons?domain=matchday.ai&sz=128",
          url: "#",
        },
        date: "May 2019 - July 2019",
      },
      {
        title: "Software Engineer",
        company: {
          name: "IIIT Hyderabad Product Labs",
          image: "https://www.google.com/s2/favicons?domain=iiit.ac.in&sz=128",
          url: "https://www.iiit.ac.in",
        },
        date: "Aug 2018 - March 2019",
      },
    ],
  },
  education: {
    description: `My academic background.`,
    items: [
      {
        title: "Master's degree, Computational Science",
        company: {
          name: "IIIT Hyderabad",
          image: "https://www.google.com/s2/favicons?domain=iiit.ac.in&sz=128",
          url: "https://www.iiit.ac.in",
        },
        date: "April 2021 - May 2022",
      },
      {
        title: "Bachelor of Technology, Computer Science",
        company: {
          name: "IIIT Hyderabad",
          image: "https://www.google.com/s2/favicons?domain=iiit.ac.in&sz=128",
          url: "https://www.iiit.ac.in",
        },
        date: "2017 - 2022",
      },
      {
        title: "High School",
        company: {
          name: "Don Bosco School, Kolkata",
          image: "https://www.google.com/s2/favicons?domain=donboscoparkcircus.org&sz=128",
          url: "#",
        },
        date: "2016",
      },
    ],
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
