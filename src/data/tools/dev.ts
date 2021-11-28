import musicTools, { Tool } from './music';

const devTools: Tool[] = [
  musicTools[0],
  {
    name: 'Code Editor',
    desc: 'Visual Studio Code (duh!)',
    logos: [
      {
        image: '/assets/images/logos/Visual_Studio_Code_1.35_icon.svg',
        title: 'Visual Studio Code',
        link: 'https://code.visualstudio.com',
      },
    ],
  },
  {
    name: 'Frontend Stack',
    desc: 'I love React &mdash; Next.js (this site is built with it) &amp; Gatsby. GraphQL, REST no more. I also like Vue &amp; Svelte&nbsp;3.',
    logos: [
      {
        image: '/assets/images/logos/React-icon.svg',
        title: 'React',
        link: 'https://reactjs.org',
      },
      {
        image: '/assets/images/logos/next-js.svg',
        title: 'Next',
        link: 'https://nextjs.org',
      },
      {
        image: '/assets/images/logos/Gatsby-Monogram.svg',
        title: 'Gatsby',
        link: 'https://gatsbyjs.org',
      },
      {
        image: '/assets/images/logos/GraphQL.svg',
        title: 'GraphQL',
        link: 'https://graphql.org',
      },
      {
        image: '/assets/images/logos/Vue.js_Logo_2.svg',
        title: 'Vue.js',
        link: 'https://vuejs.org',
      },
      {
        image: '/assets/images/logos/svelte-logo.svg',
        title: 'Svelte',
        link: 'https://svelte.dev',
      },
    ],
  },
  {
    name: 'Backend Stack',
    desc: 'Node, PostgreSQL + Hasura GraphQL. MongoDB. Old times: PHP + MySQL (I&apos;m rusty). If really needing PHP, SLIM is my go-to micro framework.',
    logos: [
      {
        image: '/assets/images/logos/nodejs-icon.svg',
        title: 'NodeJS',
        link: 'https://nodejs.org',
      },
      {
        image: '/assets/images/logos/mongodb.svg',
        title: 'MongoDB',
        link: 'https://mongodb.org',
      },
      {
        image: '/assets/images/logos/Postgresql_elephant.svg',
        title: 'PostgreSQL',
        link: 'https://postgresql.org',
      },
      {
        image: '/assets/images/logos/hasura.svg',
        title: 'Hasura',
        link: 'https://hasura.io',
      },
    ],
  },
  {
    name: 'SaaS',
    desc: 'Vercel for static hosting & Next.js deploys. Netlify for others. Mantains 2 VPSs on DigitalOcean & Vultr. Firebase (generous free tier) for authentication and NoSQL databases. Bunny.net (fka BunnyCDN) for extremely cheap content delivery. Wasabi Cloud Storage (cheap and large S3 alternative). I avoid AWS unless absolutely necessary (too complicated).',
    logos: [
      {
        image: '/assets/images/logos/vercel.svg',
        title: 'Vercel',
        link: 'https://vercel.com',
      },
      {
        image: '/assets/images/logos/netlify.svg',
        title: 'Netlify',
        link: 'https://netlify.com',
      },
      {
        image: '/assets/images/logos/DO_Logo_icon_blue.svg',
        title: 'DigitalOcean',
        link: 'https://digitalocean.com',
      },
      {
        image: '/assets/images/logos/sygnet__on-white.svg',
        title: 'Vultr',
        link: 'https://vultr.com',
      },
      {
        image: '/assets/images/logos/Firebase_Logo_Logomark.svg',
        title: 'Firebase',
        link: 'https://firebase.com',
      },
      {
        image: '/assets/images/logos/bunnycdn-icon.svg',
        title: 'Bunny',
        link: 'https://bunny.net',
      },
      {
        image: '/assets/images/logos/wasabi-icon.svg',
        title: 'Wasabi',
        link: 'https://wasabi.com',
      },
      {
        image: '/assets/images/logos/Amazon_Web_Services_Logo.svg',
        title: 'Amazon Web Services',
        link: 'https://aws.amazon.com',
      },
    ],
  },
];

export default devTools;
