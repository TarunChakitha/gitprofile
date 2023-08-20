// gitprofile.config.js

const config = {
  github: {
    username: 'tarunchakitha', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['reimagined-fullstack', 'snap_auto', 'stonks', 'webp', ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'tarunchakita',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'tarun_chakitha',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '13285343/tarun-chakitha', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://tarun.chakitha.com',
    phone: '',
    email: 'saitarun.uppari@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1LA7I5MtmbkK0bYy08dGwMjGcBQ7dZiTE/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Linux',
    'Cloud',
    'Azure',
    'AWS',
    'Python',
    'C',
    'Bash',
    'Git',
    'Docker',
    'HTML',
    'CSS',
    'PHP',
    'MySQL',
    'PostgreSQL',
  ],
  experiences: [
    {
      company: 'Accenture India Pvt. Ltd.',
      position: 'Advanced App Engineering Analyst',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://www.accenture.com/in-en',
    },
    {
      company: 'Qapita Fintech Pvt. Ltd.',
      position: 'DevOps Intern',
      from: 'June 2023',
      to: 'July 2023',
      companyLink: 'https://www.qapita.com/',
    },
  ],
  certifications: [
    {
      name: 'AZ 900 - Microsoft Azure Fundamentals',
      body: '',
      year: 'July 2021',
      link: 'https://www.credly.com/badges/271ffd0d-c006-4bbe-9153-acf2d9a473a0/public_url'
    },
  ],
  education: [
    {
      institution: 'National Institute Of Technology, Calicut',
      degree: 'B.Tech. (CSE)',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Telangana State Board of Intermediate Education',
      degree: 'Senior Secondary',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'Telangana State Board of Secondary Education',
      degree: 'Secondary',
      from: '2015',
      to: '2017',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],
  // externalProjects: [
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  // ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
