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
          album: [
            'https://uc2b29fc00009aa81bd7a84ca15e.previews.dropboxusercontent.com/p/thumb/ACZD2kPrybCy_Yvv8m8f4ICL5bjNWzGxVUdctw861W_hxL9zdhwr5mdrLKbbYhn-HK0GH1vEcpEqIVwwvQ1QTsOp6p5fl1TtO9Oep-5rPQH3MQ4hQZPlWycbp7MkBlpZYa8B3EMuwQnXZl-prNlmaPO7qGJvcfNJTiy0FWZE3fOpuTuh7LsS5uXI-e-OFwlo1lIWqxC2-_uRuoB9WH-s37dbQSWU-AgS216psad44MA7SDf-Au_srqNiRfvBxMRoGX85aFfr4RexujPBmWgoP7ZM67SO8k3UhCZk1tNbAFBXNoCJR3KGBVhNYDVkbyfpm08XmIBlwG7FE7NRHYmM16zSGM_X63h-BqIOqbEJKubsow/p.png',
            'https://uc681f92899e742cb133ebdc8e92.previews.dropboxusercontent.com/p/thumb/ACYN9GEcBITyhkszcWS0opSU4c-SG1MZVmTXeYzuQ9CZG6ILzCdT-JiUDZrTtpsRfOpHB2xzusY988MmXRM5xUt8RF9-YD5MqzO-L5ReoBW1lw06tiSx80MwZavQ59T6KhEw2Jr0GgraAMpYM6Jq-DmBISKVc37z_bGf2SW6juvdVOiFn2i4PveF6Mlj_KdwxmjZGBbJ_fh6zWcoGrC_snsP0DOeeyournd6h19IUm0WvHkACyjbZkLODGK0asAqwEIl0Pr0OLwX7lYkkDzDSbQeCK9-jsKByZ_SijapHu3L_XX92QZFa-KkadtWxsmP1CXpbyOgvtIO3KDeyTxfuQ2Dn-VuHNIuT8eydaKyzSYQQQ/p.png',
            'https://uc729bf637d3f99792a4e966a6f4.previews.dropboxusercontent.com/p/thumb/ACaT3r3D5NGqedF6NdmSiYXoYvyd_WRi69wroMSnmydWlcee2AYMETQFXwxOWN5urkC-PwX3YvNBOz6uJU8UYFG5kF3LTXn9SZEBwSabfVJoPK1rLiBjtY_gTo8rLvaockSolH9V-ePMD52OfgUM136rcQQB0Wp9Es4IlRqmeo06Dtdd6znMTsSQL2oJnLpKQkMNNM8cSVm0ywO-yK3ds6PgqN1bt3Udo3qMoAgDB0JcOW77Qj7Pt5gr3WbU3Zg1TMNI921_o2LDU9bfoj_EDJXOipjzv14k4QWJSaN7PKFCLlAnzBnvmKTLVOxN6bgO5ARkk9xyet9M_O-Xqz1QZuQjaEryCNu0_rRIzpcrexfY-w/p.png',
          ],
          imageUrl:
            'https://uc2b29fc00009aa81bd7a84ca15e.previews.dropboxusercontent.com/p/thumb/ACZD2kPrybCy_Yvv8m8f4ICL5bjNWzGxVUdctw861W_hxL9zdhwr5mdrLKbbYhn-HK0GH1vEcpEqIVwwvQ1QTsOp6p5fl1TtO9Oep-5rPQH3MQ4hQZPlWycbp7MkBlpZYa8B3EMuwQnXZl-prNlmaPO7qGJvcfNJTiy0FWZE3fOpuTuh7LsS5uXI-e-OFwlo1lIWqxC2-_uRuoB9WH-s37dbQSWU-AgS216psad44MA7SDf-Au_srqNiRfvBxMRoGX85aFfr4RexujPBmWgoP7ZM67SO8k3UhCZk1tNbAFBXNoCJR3KGBVhNYDVkbyfpm08XmIBlwG7FE7NRHYmM16zSGM_X63h-BqIOqbEJKubsow/p.png',

          link: '',
          tools: ['React', 'NodeJS', 'RS232 Protocol', 'Traccar'],
        },
        {
          title: 'ATGMS',
          description:
            'ATGMS is an app built for the Underground Tank Console device. The app can read real-time tank information, including white product levels, water, and temperature. It also includes a web app that allows users to view consolidated UGT data from all Centrum Fuel stations. The app uses the RS232 protocol and is built with C#.Net, while the web app is developed using HTML, Bootstrap 5, and PHP.',
          album: [
            'https://uca9eab9a85f11c8d27277d41915.previews.dropboxusercontent.com/p/thumb/ACZShPT8wer1cY1pbX3SJrmcjklkorouPBB04XwUw1Zer16C_YWv9BGlFUYBveB7fWyNqzCdLAtres-OTRuEyarWmKisgPL1vjBeOJlHOtQZ6dWjub-x7C6i8lwQCXb52izOIwGWGx1_qje8KfvdanBeC-uOi3kMIcvmxEpFncoAyz5hUkspiF2wYV5v-gusnvBD9AKh_R_aQ3ZjnADgaxsP1GRhxdSC_ljNn94xpYF3z-cxb30TQ_VflXIbTDtX14obC10zVqq6DrUcm3CmXnEQ6I-X2j-0Oqa3sKKrH1RIEqIXXwhX2zfZ_V9EsrB8yTvzN0qvke_ZCrCe4Pidd4omd8vJ_jICvoXh_EmA8HJAv8VOGtA8iin1L3C5e7bZ8Rrbu4IenAeOOKRHwWEuHn-d/p.png?is_prewarmed=true',
            'https://uc682abe5db9189a2ba9326eafa8.previews.dropboxusercontent.com/p/thumb/ACZIIDAC_RKg0saLa0thWV8wJErQlKOLqMhtYjaUo4ZM1AtlJqgH8gLsuSujtczrHmmkcjb5qYuYjobXX0JRzHxnGbbBw_IGNgzIH70iOyp6iE6FdNl4HZA_LSAI0m2ap9ri9pToM-3o6jjCs3j6ohJYUuhiubu_aTHGOfgGj5kL2DGob9zkujAeNbrI5DAZXCSffYwgiyMIWqBml8TXER9fpMpKmoTrUWRNNq-EIfCTa9cdrVEmZf_Z_8K-zj66euUmCzjVcbSWd9G2x-GWuJrn4nobISXIF3yfXIglPWjc12eS6-n5wIfvA1Qbv5nEgU7BoOej0AaNYBPrVnR-46Zkg4J9YbqHjaVzYEaOis3y8HCAogDs9wMNdhA0UISimQqQjc0KqhVZJL2s3CXVRdr0/p.png?is_prewarmed=true',
          ],
          imageUrl:
            'https://uca9eab9a85f11c8d27277d41915.previews.dropboxusercontent.com/p/thumb/ACZShPT8wer1cY1pbX3SJrmcjklkorouPBB04XwUw1Zer16C_YWv9BGlFUYBveB7fWyNqzCdLAtres-OTRuEyarWmKisgPL1vjBeOJlHOtQZ6dWjub-x7C6i8lwQCXb52izOIwGWGx1_qje8KfvdanBeC-uOi3kMIcvmxEpFncoAyz5hUkspiF2wYV5v-gusnvBD9AKh_R_aQ3ZjnADgaxsP1GRhxdSC_ljNn94xpYF3z-cxb30TQ_VflXIbTDtX14obC10zVqq6DrUcm3CmXnEQ6I-X2j-0Oqa3sKKrH1RIEqIXXwhX2zfZ_V9EsrB8yTvzN0qvke_ZCrCe4Pidd4omd8vJ_jICvoXh_EmA8HJAv8VOGtA8iin1L3C5e7bZ8Rrbu4IenAeOOKRHwWEuHn-d/p.png?is_prewarmed=true',

          link: '',
          tools: ['C#.Net', 'HTML', 'Bootstrap 5', 'PHP'],
        },
        {
          title: 'RKCWMS',
          description:
            'RKCWMS is a Warehouse Management System developed exclusively for Rael Kitz Corporation. The backend is built with Laravel, and the frontend is built with React.',
          album: [
            'https://ucc94246c7ad78e1558f1c7166a1.previews.dropboxusercontent.com/p/thumb/ACZ126BC-1Kor7wfXOXu1D98HX_mtjWL5xdrF4OmRebv2AZbRhgSBzHUR-_z5hqjPRnNlFLlf-rQCWBSUvthCoTIidxQYpF-QvvQC-C_tdXqQm3quOLU_faDUsAN18otDn6j7TPXW3ou-YzLqPqTN-Dduve2Q5t_7BhbEGeMbu0MHy27lIJKXSoPLJoueWE1KKh7a1uBC8T7WlJaKlfQG0xMHgPW1qu1ebvGG1fe6noFlIyv1j_JembbE4-q3LGjK1kErqwsB8I5Uh4MyG8w9a2gaMKQbux6HDqynKQHyGbsetBqVgX_gCGtyepPWgPMND3jfTnWSIih-PgjTo0LdYRc9XSIQUxcbcX33QH09NwqVg/p.png',
            'https://uc5bb545d172d94dff1879774b3d.previews.dropboxusercontent.com/p/thumb/ACYAHx9NBrkVKBKi3_qEQxJR_bDBpuMHrXEN_winnvLrSOiD2QMcfQdQjhqQvtk50-Mow7iV0s7oKEI9y-cRp1gmXzOFQb1iQRqOUpjPDrAQHjnkJLE_50xu3JbH9i1pdXo-Mm7iUoCiy_ugVGXrnvmDeq0p2700GiQN-3udYrX5dsR5jneS95-JbslGQsJ9RPUXNnxczFPzOE7Vgj2XGVF98X2NFhRPnOxcelhm-wrp3HkuoryB3SMbuX3suPA6fPA-LMjDk58YO0wM4pDvoh6I3-4kU-__UVjxGoODa2JMRwg9jEyXAmL2KOki87RGXeuYm15jhArcBWxxG3_bHV7kWO57tG9ZpqPK9wuWU7wXQQ/p.png',
            'https://uc6042dac89c65d217d52f7621e2.previews.dropboxusercontent.com/p/thumb/ACYXPrIeRSQJGHMUWPhoo53181pYq2IaTKfQX6cHd7WpUp4B_XM2zvmxVh30Z4Sitk0L2NIYrMQFfVqNw5qI1AAv1CWVrhPPGmDVQv4N5BFsB9KoWPYU7qDzKF4KXd30b75ibDALmN68_419gTaxwuarK9RBeI0B7ePLBoUoA29fd7pSOQhxH0ITCqLdALmGq0d73lLiuyfISendA5HG7wgegx-7GLxDryweEl1CbabHns_o474n2JioDhzFIKsOrZo5iTv8ppS9XTkWnOlYPpBDcYr0vj9fKDGG8mLzUfNwx2B6e7N5qOEoY8mwPblAS4COna2lKeLNfQEVYPPKe6ihOuGsYi5AwAGA_IN6NQStqg/p.png',
          ],
          imageUrl:
            'https://ucc94246c7ad78e1558f1c7166a1.previews.dropboxusercontent.com/p/thumb/ACZ126BC-1Kor7wfXOXu1D98HX_mtjWL5xdrF4OmRebv2AZbRhgSBzHUR-_z5hqjPRnNlFLlf-rQCWBSUvthCoTIidxQYpF-QvvQC-C_tdXqQm3quOLU_faDUsAN18otDn6j7TPXW3ou-YzLqPqTN-Dduve2Q5t_7BhbEGeMbu0MHy27lIJKXSoPLJoueWE1KKh7a1uBC8T7WlJaKlfQG0xMHgPW1qu1ebvGG1fe6noFlIyv1j_JembbE4-q3LGjK1kErqwsB8I5Uh4MyG8w9a2gaMKQbux6HDqynKQHyGbsetBqVgX_gCGtyepPWgPMND3jfTnWSIih-PgjTo0LdYRc9XSIQUxcbcX33QH09NwqVg/p.png',

          link: '',
          tools: ['Laravel', 'React'],
        },
        {
          title: 'CFSCDS',
          description:
            'CFSCDS is a Cash Disbursement System designed to track the outbound cash flow of Centrum Fuel. It is built using HTML, Tailwind, and PHP.',
          imageUrl:
            'https://uc9969010946c5def4b79e3c5ea5.previews.dropboxusercontent.com/p/thumb/ACbQHhD3acQXIFG0oOL7W6nVwI2sxtdgMkKwGzXoRpq9NsZZv0SVn3TIy1Lb_gAxEgHdB4ppSfvNf58cgHXoXIdZSqMp-WCPWcYq5UFs2JfU6u0CPXeWqirjAnONz-Ye0XeMZHjqCFSKyWHsPJ8UkNP2vOdUKILJoVMB8D9-IJNvh_26RlDB9nWmDptckZEwVRaXngPEcKENLYaWOeaVsBJIzDplmLQ4N-qe45Oyj0fbRE73Bq2p3RZsSH1F2IUjx_H5Q9I7yWd7CAa3GbCJ1J1X_0yZajol-Yoi7QxzsqMl4B1LqaQm6a3QofYzwwX2kXZ_YCmLbBeUbm2PCMjAXr8xFJQ2dW5a7Iz8I5QREPT-ig/p.png',
          album: [
            'https://uc9969010946c5def4b79e3c5ea5.previews.dropboxusercontent.com/p/thumb/ACbQHhD3acQXIFG0oOL7W6nVwI2sxtdgMkKwGzXoRpq9NsZZv0SVn3TIy1Lb_gAxEgHdB4ppSfvNf58cgHXoXIdZSqMp-WCPWcYq5UFs2JfU6u0CPXeWqirjAnONz-Ye0XeMZHjqCFSKyWHsPJ8UkNP2vOdUKILJoVMB8D9-IJNvh_26RlDB9nWmDptckZEwVRaXngPEcKENLYaWOeaVsBJIzDplmLQ4N-qe45Oyj0fbRE73Bq2p3RZsSH1F2IUjx_H5Q9I7yWd7CAa3GbCJ1J1X_0yZajol-Yoi7QxzsqMl4B1LqaQm6a3QofYzwwX2kXZ_YCmLbBeUbm2PCMjAXr8xFJQ2dW5a7Iz8I5QREPT-ig/p.png',
            'https://uc24130f079f053c1298e227f9f4.previews.dropboxusercontent.com/p/thumb/ACZY_Vr_F0oRMH8g29JhuoTM8sGNdXTjnNqCcyxKsQnHkKzpOlFz47HHIf9RjjX5HjnBNiFmwxxdyKbJx9dgSvCZVVCI_bruja1wsbk8HndXPTMi47cug66sWJPPJyARRJMBKwgLOkSmwDGHZHkpzuAQCziXdy250zFXeh5YCn5j3Vae__ZgMlbY6uMaB1n361Um3zazgq7izkOe51MiCQdGOHRSQEXfNxrROg7vgrBuMKp2jbIM7YiSGrHEfUmfWIBXdgVGIHt02eOslXQwoYhfmDJtgx_Thrjemr59Kk7yNXjELEgiYJOb211HpeXLwA4QPNT4PjeGJxBnEvJ6v_tPSd-Qt414Ebe-rjnLLOVG-g/p.png',
            'https://ucd8ff13f8647ec9a668d0eb93b2.previews.dropboxusercontent.com/p/thumb/ACalk7Dmaco4F0xVzUXPYIGRhOjH5Jib-CINhsFQvibaJ0kuXlntsUzMIa3ykaXuiCyw_AuZd7UNDMV3DJ2VtJ10Kj8faiKIGmPx706QZ5_4ob-Yx5bBXTiyHObaTz1B1-u_9gyRxKBTu4qFICb_1cn7eU9B0olSR2_9sKLGBlAowi-E69-NDP5MRJi5f-XgrUVc2HMK6wNAXfzJUEPFNS3rsvaVfLFvm2BN0_1jxukzd8uEPbYz1-yxo9O-1aqt3_7HGL1EN-Ul7BSmxfZOBWSkgkyMmjd5n8dWg8D4GSnl9_32OwsUahzHZ0zdrfqOOSIMDIYYlR3JO826Lq3dPJN-xR7ts6avT_dMhKIda-9Ssw/p.png',
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
    email: 'justinayson@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/10axb5pK5jqdmnmX7WKpGq2VcynLVmzqn/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
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
