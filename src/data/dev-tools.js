/* eslint-disable import/no-unresolved */
const musicTools = require('./music-tools');

module.exports = [
  musicTools[0],
  {
    name: 'Code Editor',
    desc: 'Visual Studio Code (duh!)',
    logos: [
      {
        image: require('../assets/logos/Visual_Studio_Code_1.35_icon.svg?include'),
        title: 'Visual Studio Code',
        link: 'https://code.visualstudio.com'
      }
    ]
  },
  {
    name: 'Frontend Stack',
    desc:
      'I love React &mdash; Next.js (this site is built with it) &amp; Gatsby. GraphQL, REST no more. I also like Vue &amp; Svelte&nbsp;3.',
    logos: [
      {
        image: require('../assets/logos/React-icon.svg?include'),
        title: 'React',
        link: 'https://reactjs.org'
      },
      {
        image: require('../assets/logos/next-js.svg?include'),
        title: 'Next',
        link: 'https://nextjs.org'
      },
      {
        image: require('../assets/logos/Gatsby-Monogram.svg?include'),
        title: 'Gatsby',
        link: 'https://gatsbyjs.org'
      },
      {
        image: require('../assets/logos/GraphQL.svg?include'),
        title: 'GraphQL',
        link: 'https://graphql.org'
      },
      {
        image: require('../assets/logos/Vue.js_Logo_2.svg?include'),
        title: 'Vue.js',
        link: 'https://vuejs.org'
      },
      {
        image: require('../assets/logos/svelte-logo.svg?include'),
        title: 'Svelte',
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
        image: require('../assets/logos/nodejs-icon.svg?include'),
        title: 'NodeJS',
        link: 'https://nodejs.org'
      },
      {
        image: require('../assets/logos/mongodb.svg?include'),
        title: 'MongoDB',
        link: 'https://mongodb.org'
      },
      {
        image: require('../assets/logos/Postgresql_elephant.svg?include'),
        title: 'PostgreSQL',
        link: 'https://postgresql.org'
      },
      {
        image: require('../assets/logos/hasura.svg?include'),
        title: 'Hasura',
        link: 'https://hasura.io'
      }
    ]
  },
  {
    name: 'SaaS',
    desc:
      'Vercel for static hosting & Next.js deploys. Netlify for others. Mantains 2 VPSs on DigitalOcean & Vultr. Firebase (generous free tier) for authentication and NoSQL databases. Bunny.net (fka BunnyCDN) for extremely cheap content delivery. Wasabi Cloud Storage (cheap and large S3 alternative). I avoid AWS unless absolutely necessary (too complicated).',
    logos: [
      {
        image: require('../assets/logos/vercel.svg?include'),
        title: 'Vercel',
        link: 'https://vercel.com'
      },
      {
        image: require('../assets/logos/netlify.svg?include'),
        title: 'Netlify',
        link: 'https://netlify.com'
      },
      {
        image: require('../assets/logos/DO_Logo_icon_blue.svg?include'),
        title: 'DigitalOcean',
        link: 'https://digitalocean.com'
      },
      {
        image: require('../assets/logos/sygnet__on-white.svg?include'),
        title: 'Vultr',
        link: 'https://vultr.com'
      },
      {
        image: require('../assets/logos/Firebase_Logo_Logomark.svg?include'),
        title: 'Firebase',
        link: 'https://firebase.com'
      },
      {
        image: require('../assets/logos/bunnycdn-icon.svg?include'),
        title: 'BunnyCDN',
        link: 'https://bunnycdn.com'
      },
      {
        image: require('../assets/logos/wasabi-icon.svg?include'),
        title: 'Wasabi',
        link: 'https://wasabi.com'
      },
      {
        image: require('../assets/logos/Amazon_Web_Services_Logo.svg?include'),
        title: 'Amazon Web Services',
        link: 'https://aws.amazon.com'
      }
    ]
  }
];
