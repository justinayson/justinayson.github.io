// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'justinayson', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'RKCGPS',
          description:
            'RKCGPS is a GPS tracking service exclusively for Rael Kitz Corporation/s vehicle assets. We use Traccar for the backend service. The custom frontend is built with React. The app also includes our own SMS Gateway, built with NodeJS, which uses the RS232 protocol.',
          imageUrl:
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCGPS/7.png',
          album: [
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCGPS/7.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCGPS/5.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCGPS/6.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCGPS/8.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCGPS/9.png',
          ],
          link: '',
          tools: ['React', 'NodeJS', 'RS232 Protocol', 'Traccar'],
        },
        {
          title: 'ATGMS',
          description:
            'ATGMS is an app built for the Underground Tank Console device. The app can read real-time tank information, including white product levels, water, and temperature. It also includes a web app that allows users to view consolidated UGT data from all Centrum Fuel stations. The app uses the RS232 protocol and is built with C#.Net, while the web app is developed using HTML, Bootstrap 5, and PHP.',
          imageUrl:
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/ATGMS/14.png',
          album: [
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/ATGMS/14.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/ATGMS/13.png',
          ],
          link: '',
          tools: ['C#.Net', 'HTML', 'Bootstrap 5', 'PHP'],
        },
        {
          title: 'RKCWMS',
          description:
            'RKCWMS is a Warehouse Management System developed exclusively for Rael Kitz Corporation. The backend is built with Laravel, and the frontend is built with React.',
          imageUrl:
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCWMS/2.png',
          album: [
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCWMS/2.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCWMS/1.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCWMS/4.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/RKCWMS/3.png',
          ],
          link: '',
          tools: ['Laravel', 'React'],
        },
        {
          title: 'CFSCDS',
          description:
            'CFSCDS is a Cash Disbursement System designed to track the outbound cash flow of Centrum Fuel. It is built using HTML, Tailwind, and PHP.',
          imageUrl:
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/CFSCDS/11.png',
          album: [
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/CFSCDS/11.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/CFSCDS/10.png',
            'https://raw.githubusercontent.com/justinayson/justinayson.github.io/main/src/assets/CFSCDS/12.png',
          ],
          link: '',
          tools: ['PHP', 'HTML', 'Tailwind'],
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Justin Louise Ayson',
    description: 'Portfolio of Justin Louise Ayson.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: 'jstnayson',
    instagram: 'jstnayson',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'justinlouiseayson@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1X9ER32V-L3gREHrmIVZK5g52gg5u9s_8/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'Antd',
    'Tailwind',
    'MaterialUI',
  ],
  experiences: [
    {
      company: 'Rael Kitz Corporation',
      position: 'Junior Programmer',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://centrumfuel.com',
    },
    {
      company: 'Rael Kitz Corporation',
      position: 'Technical Support',
      from: 'November 2019',
      to: 'September 2021',
      companyLink: 'https://centrumfuel.com',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'PHINMA - University of Pangasinan',
      degree: 'Bachelor of Science in Information Technology',
      from: '2014',
      to: '2018',
    },
    {
      institution: 'University of Perpetual Help of Pangasinan',
      degree: 'High School',
      from: '2011',
      to: '2014',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  enablePWA: true,
};

export default CONFIG;
