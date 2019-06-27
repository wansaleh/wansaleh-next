import React from 'react';
import { css } from '@emotion/core';
// import Link from 'next/link';
import clsx from 'clsx';
import Head from '../components/head';
import Nav from '../components/nav';

const Container = ({ children, className, ...props }) => (
  <div className={clsx('max-w-5xl mx-auto', className)} {...props}>
    {children}
  </div>
);

const Home = () => (
  <div className="text-center">
    <Head title="Wan Saleh" />
    <Nav />

    <div
      className="hero flex flex-col justify-center items-center bg-black text-gray-600"
      css={
        {
          // background: `url(${require('../assets/images/jeremy-perkins-UgNjyPkphtU-unsplash_result.jpg')}) center/cover no-repeat`
        }
      }
    >
      <Container css={{ padding: '20rem 0 10rem' }} className="relative z-20">
        <h1 className="title text-white">
          <span role="img" aria-label="Waving Hand">
            👋
          </span>
          &nbsp;Hello there. I’m Wan Saleh.
        </h1>
        <p className="description text-2xl font-light">
          <span role="img" aria-label="Malaysia">
            🇲🇾
          </span>
          &nbsp;A proud Malaysian.{' '}
          <span role="img" aria-label="Headphone">
            🎧
          </span>
          &nbsp;A music producer.{' '}
          <span role="img" aria-label="Man Technologist">
            👨‍💻
          </span>
          &nbsp;A web (FTW!) & mobile developer.
          <br />
          <span role="img" aria-label="Football">
            ‍⚽
          </span>
          &nbsp;Football fanatic &{' '}
          <span role="img" aria-label="Popcorn">
            ‍🍿
          </span>
          &nbsp;a movie buff.
        </p>
      </Container>

      <div className="w-full">
        <svg
          className="separator__svg"
          width="100%"
          height="300"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="#f7fafc"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          css={{ transform: 'scaleX(-1)' }}
        >
          <path d="M 100 100 V 10 L 0 100" />
          <path d="M 30 73 L 100 18 V 10 Z" fill="#FFC107" strokeWidth="0" />
        </svg>
      </div>
    </div>

    <div className="tools">
      <Container>
        <h2 className="text-5xl font-hairline leading-none">My music tools</h2>
        <h3 className="text-lg tracking-widest font-light">Music things I use daily</h3>

        <ul className="mt-4 flex flex-wrap justify-center -mx-4">
          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">Workstation</h5>
            <p>
              <a href="https://www.apple.com/macbook-pro/">MacBook Pro</a> 17" 2018 (homestudio)
              &amp; <a href="https://en.wikipedia.org/wiki/Mac_Pro#1st_generation">Mac Pro</a> 2010
              (studio)
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/apple_logo_black.svg')}
                alt="Apple"
                className="h-10 mb-3"
              />
            </div>
          </li>

          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">DAW</h5>
            <p>
              <a href="https://www.apple.com/logic-pro/">Logic Pro X</a> 10.4 &amp;{' '}
              <a href="https://new.steinberg.net/cubase/">Cubase 10 Pro</a>
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/apple_logo_black.svg')}
                alt="Apple"
                className="h-10 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/Steinberg_Media_Technologies_logo.svg')}
                alt="Steinberg"
                className="h-8 mb-3"
              />
            </div>
          </li>

          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">Go-to mix plugins</h5>
            <p>
              <a href="https://www.fabfilter.com">Fabfilter</a> (esp. Pro-Q3 & Pro-R),{' '}
              <a href="https://www.waves.com">Waves</a> (esp. C6, API stuff, SSL stuff, Scheps
              Channel Strip, CLA stuff, Abbey Road Plates),{' '}
              <a href="https://www.plugin-alliance.com/">MAAG EQ</a>
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/fabfilter-vector-logo.svg')}
                alt="Fabfilter"
                className="h-12 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/waves-audio-logo-vector.svg')}
                alt="Waves Audio"
                className="h-10 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/plugin-alliance-vector-logo.svg')}
                alt="Plugin Alliance"
                className="h-16 mb-4 mx-3"
              />
            </div>
          </li>

          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">Gears</h5>
            <p>
              <a href="https://apogeedigital.com/products/duet">Apogee Duet 2</a> (my beloved
              interface),{' '}
              <a href="https://www.sweetwater.com/store/detail/SaffLQ56--focusrite-liquid-saffire-56">
                Focusrite Saffire Liquid 56
              </a>{' '}
              (studio &ndash; old but gold),{' '}
              <a href="https://www.sweetwater.com/store/detail/OctoPre2--focusrite-octopre-mkii">
                Focusrite OctoPre MkII
              </a>
              ,{' '}
              <a href="http://artproaudio.com/product/pro-mpa-ii-two-channel-mic-preamp/">
                ART ProMPA II
              </a>{' '}
              preamp (cheap but great), <a href="https://en-de.neumann.com/tlm-49">Neumann TLM49</a>
              ,{' '}
              <a href="https://www.audio-technica.com/cms/wired_mics/cebb57a269d232ee/index.html">
                Audio Technica AT2035
              </a>
              , <a href="https://nektartech.com/impact-lx49-61-plus/">Nektar Impakt LX61+</a>,{' '}
              <a href="https://roli.com/products/blocks/seaboard-block">Seaboard Block</a>.
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/Apogee_Electronics_-_logo.svg')}
                alt="Apogee"
                className="h-10 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/focusrite.svg')}
                alt="Apple"
                className="h-5 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/art_logo.svg')}
                alt="ART"
                className="h-12 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/audiotechnica.png')}
                alt="Audio Technica"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/ROLIMonogramLockupBlack.svg')}
                alt="ROLI"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/nektar_logo.png')}
                alt="Nektar"
                className="h-8 mb-4 mx-3"
              />
            </div>
          </li>

          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">Studio Monitors</h5>
            <p>
              <a href="https://en.wikipedia.org/wiki/Yamaha_NS-10">Yamaha NS10 studio</a>,{' '}
              <a href="https://usa.yamaha.com/products/proaudio/speakers/hs_series/index.html">
                Yamaha HS8
              </a>
              ,{' '}
              <a href="https://www.sweetwater.com/store/detail/Reveal501a--tannoy-reveal-501a">
                Tannoy Reveal 501A
              </a>
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/yamaha.svg')}
                alt="Yamaha"
                className="h-10 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/tannoy-vector-logo.svg')}
                alt="Tannoy"
                className="h-4 mb-4 mx-3"
              />
            </div>
          </li>

          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">Home Studio Monitors</h5>
            <p>
              <a href="https://usa.yamaha.com/products/proaudio/speakers/hs_series/index.html">
                Yamaha HS8
              </a>
              ,{' '}
              <a href="https://www.sweetwater.com/store/detail/Reveal402--tannoy-reveal-402">
                Tannoy Reveal 402
              </a>
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/yamaha.svg')}
                alt="Yamaha"
                className="h-10 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/tannoy-vector-logo.svg')}
                alt="Tannoy"
                className="h-4 mb-4 mx-3"
              />
            </div>
          </li>
        </ul>
      </Container>
    </div>

    <div className="tools">
      <Container>
        <h2 className="text-5xl font-hairline leading-none">My development tools</h2>
        <h3 className="text-lg tracking-widest font-light">Devtools I use daily</h3>

        <ul className="mt-4 flex flex-wrap justify-center -mx-4">
          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">Workstation</h5>
            <p>MacBook Pro 17" 2018</p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/apple_logo_black.svg')}
                alt="Apple"
                className="h-10 mb-3"
              />
            </div>
          </li>

          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">Code editor</h5>
            <p>
              <a href="https://code.visualstudio.com/">Visual Studio Code</a> (duh)
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/Visual_Studio_Code_1.35_icon.svg')}
                alt="VSCode"
                className="h-8 mb-4 mx-3"
              />
            </div>
          </li>

          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">Frontend stack</h5>
            <p>
              I love <a href="https://reactjs.com">React</a>. It's frameworks{' '}
              <a href="https://nextjs.org">Next.js</a> &amp;{' '}
              <a href="https://gatsbyjs.org">Gatsby</a>. <a href="https://graphql.com">GraphQL</a>,
              REST no more. I also like <a href="https://vuejs.org">Vue</a>. I really like{' '}
              <a href="https://svelte.dev">Svelte&nbsp;3</a>.{' '}
              {/* <small className="block leading-none">This lame site is built using Next.js.</small> */}
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/React-icon.svg')}
                alt="React"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/next-js.svg')}
                alt="Next.js"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/gatsby.svg')}
                alt="Gatsby.js"
                className="h-6 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/GraphQL.svg')}
                alt="GraphQL"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/Vue.js_Logo_2.svg')}
                alt="Vue.js"
                className="h-6 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/svelte-logo-horizontal.svg')}
                alt="Svelte.js"
                className="h-6 mb-4 mx-3"
              />
            </div>
          </li>

          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">Backend stack</h5>
            <p>
              <a href="https://nodejs.org">Node</a>,{' '}
              <a href="https://www.postgresql.org/">PostgreSQL</a> +{' '}
              <a href="https://hasura.io/">Hasura</a> GraphQL.{' '}
              <a href="https://www.mongodb.com/">MongoDB</a>. Old times: PHP + MySQL (I'm rusty). If
              really needing PHP, SLIM is my go-to micro framework.
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/nodejs-icon.svg')}
                alt="NodeJS"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/mongodb.svg')}
                alt="MongoDB"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/Postgresql_elephant.svg')}
                alt="PostgreSQL"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/hasura.svg')}
                alt="Hasura"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/GraphQL.svg')}
                alt="GraphQL"
                className="h-8 mb-4 mx-3"
              />
            </div>
          </li>

          <li className="w-full md:w-1/2 px-4">
            <h5 className="mt-8 font-bold text-xl">SaaS</h5>
            <p>
              <a href="https://digitalocean.com">DigitalOcean</a> &amp;{' '}
              <a href="https://vultr.com">Vultr</a> for VPS.{' '}
              <a href="https://netlify.com">Netlify</a> (how great are Netlify) for static hosting
              &amp; <a href="https://now.sh">Now.sh</a> for Next.js deploys.{' '}
              <a href="https://firebase.com">Firebase</a> (generous free tier).{' '}
              <a href="https://wasabi.com">Wasabi Cloud Storage</a> (cheap and large S3
              alternative). I try to avoid <a href="https://aws.amazon.com">AWS</a> unless
              absolutely necessary (too costly &amp; complicated).
            </p>
            <div className="flex flex-wrap justify-center items-center my-4">
              <img
                src={require('../assets/logos/DigitalOcean_logo.svg')}
                alt="DigitalOcean"
                className="h-12 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/vultr.svg')}
                alt="Vultr"
                className="h-6 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/netlify.svg')}
                alt="Netlify"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/now-black.svg')}
                alt="Now"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/Firebase_Logo_Logomark.svg')}
                alt="Firebase"
                className="h-8 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/wasabi.png')}
                alt="Wasabi"
                className="h-6 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/Amazon_Web_Services_Logo.svg')}
                alt="AWS"
                className="h-6 mb-4 mx-3"
              />
            </div>
          </li>
        </ul>
      </Container>
    </div>

    <style jsx>
      {`
        .hero {
          width: 100%;
          margin-bottom: 4rem;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-bottom: 0.5rem;
          line-height: 1.15;
          font-size: 4rem;
          font-weight: 200;
        }
        .title,
        .description {
          text-align: center;
        }

        .tools {
          margin-bottom: 6em;
        }

        small {
          opacity: 0.5;
          letter-spacing: -0.05em;
          font-weight: 600;
        }
      `}
    </style>
  </div>
);

export default Home;
