const musicTools = require('./music-tools');

module.exports = [
  musicTools[0],
  {
    name: 'Code Editor',
    desc: 'Visual Studio Code (duh!)',
    logos: [
      {
        image: require('../assets/logos/Visual_Studio_Code_1.35_icon.svg'),
        alt: 'Visual Studio Code',
        link: 'https://code.visualstudio.com'
      }
    ]
  },
  {
    name: 'Frontend Stack',
    desc:
      'I love **React** &mdash; Next (this site is built with it) &amp; Gatsby. GraphQL, REST no more. I also like Vue &amp; Svelte&nbsp;3.',
    logos: [
      {
        image: require('../assets/logos/React-icon.svg'),
        alt: 'React',
        link: 'https://reactjs.org'
      },
      {
        image: require('../assets/logos/next-js.svg'),
        alt: 'Next.js',
        link: 'https://nextjs.org'
      },
      {
        image: require('../assets/logos/Gatsby-Monogram.svg'),
        alt: 'Gatsby.js',
        link: 'https://gatsbyjs.org'
      },
      {
        image: require('../assets/logos/GraphQL.svg'),
        alt: 'GraphQL',
        link: 'https://graphql.org'
      },
      {
        image: require('../assets/logos/Vue.js_Logo_2.svg'),
        alt: 'Vue.js',
        link: 'https://vuejs.org'
      },
      {
        image: require('../assets/logos/svelte-logo.svg'),
        alt: 'Svelte.js',
        link: 'https://svelte.dev'
      }
    ]
  },
  {
    name: 'Backend Stack',
    desc:
      'Node, PostgreSQL + Hasura GraphQL. MongoDB. Old times: PHP + MySQL (I&apos;m rusty). If really needing PHP, SLIM is my go-to micro framework.',
    logos: [
      {
        image: require('../assets/logos/nodejs-icon.svg'),
        alt: 'NodeJS',
        link: 'https://nodejs.org'
      },
      {
        image: require('../assets/logos/mongodb.svg'),
        alt: 'MongoDB',
        link: 'https://mongodb.org'
      },
      {
        image: require('../assets/logos/Postgresql_elephant.svg'),
        alt: 'PostgreSQL',
        link: 'https://postgresql.org'
      },
      {
        image: require('../assets/logos/hasura.svg'),
        alt: 'Hasura',
        link: 'https://hasura.io'
      }
    ]
  },
  {
    name: 'SaaS',
    desc:
      'Vercel (how great are they!) for static hosting & Next.js deploys. Netlify for others. DigitalOcean & Vultr for VPS. Firebase (generous free tier). BunnyCDN for extremely cheap content delivery. Wasabi Cloud Storage (cheap and large S3 alternative). I avoid AWS unless absolutely necessary (too complicated).',
    logos: [
      {
        image: require('../assets/logos/vercel.svg'),
        alt: 'Vercel',
        link: 'https://vercel.com'
      },
      {
        image: require('../assets/logos/netlify.svg'),
        alt: 'Netlify',
        link: 'https://netlify.com'
      },
      {
        image: require('../assets/logos/DO_Logo_icon_blue.svg'),
        alt: 'DigitalOcean',
        link: 'https://digitalocean.com'
      },
      {
        image: require('../assets/logos/sygnet__on-white.svg'),
        alt: 'Vultr',
        link: 'https://vultr.com'
      },
      {
        image: require('../assets/logos/Firebase_Logo_Logomark.svg'),
        alt: 'Firebase',
        link: 'https://firebase.com'
      },
      {
        image: require('../assets/logos/bunnycdn-icon.svg'),
        alt: 'BunnyCDN',
        link: 'https://bunnycdn.com'
      },
      {
        image: require('../assets/logos/wasabi.png'),
        alt: 'Wasabi',
        link: 'https://wasabi.com'
      },
      {
        image: require('../assets/logos/Amazon_Web_Services_Logo.svg'),
        alt: 'Amazon Web Services',
        link: 'https://aws.amazon.com'
      }
    ]
  }
];
