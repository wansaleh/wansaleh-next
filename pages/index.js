import React from 'react';
import { css } from '@emotion/core';
// import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

const Container = ({ children }) => <div className="max-w-5xl mx-auto">{children}</div>;

const Home = () => (
  <div className="text-center">
    <Head title="Wan Saleh" />
    <Nav />

    <div className="hero flex flex-col justify-center items-center bg-black text-gray-600">
      <Container>
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
          &nbsp;A web (FTW!) & mobile developer.{' '}
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
          height="200"
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
            <p>Logic Pro X 10.4 &amp; Cubase 10 Pro</p>
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
              Fabfilter (esp. Pro-Q3 & Pro-R), Waves (esp. C6, API stuff, SSL stuff, Scheps Channel
              Strip, CLA stuff, Abbey Road Plates), MAAG EQ
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
              Apogee Duet 2 (my beloved interface), Focusrite Saffire Liquid 56 (studio &ndash; old
              but gold), Focusrite OctoPre MkII, ART ProMPA II preamp (cheap but great), Neumann
              TLM49, Audio Technica AT2035, Nektar Impakt LX61+, Seaboard Block.
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
            <p>Yamaha NS10 studio, Yamaha HS8, Tannoy Reveal 501A</p>
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
            <p>Yamaha HS5, Tannoy Reveal 402</p>
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
            <p>Visual Studio Code (duh)</p>
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
              I love React. It's frameworks Next.js &amp; Gatsby. GraphQL, REST no more. I also like
              Vue. I really like Svelte&nbsp;3.{' '}
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
              Node, PostgreSQL + Hasura GraphQL. MongoDB. Old times: PHP + MySQL (I'm rusty). If
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
              DigitalOcean &amp; Vultr for VPS. Netlify (how great are Netlify) for static hosting
              &amp; Now.sh for Next.js deploys. Firebase (generous free tier). Wasabi Cloud Storage
              (cheap and large S3 alternative). I avoid AWS unless absolutely necessary (too
              complicated).
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
          padding: 10rem 0 0;
          margin-bottom: 2rem;
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
        a {
          color: #304ffe;
        }
      `}
    </style>
  </div>
);

export default Home;
