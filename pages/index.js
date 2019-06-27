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

    <div className="hero flex flex-col justify-center items-center">
      <Container>
        <h1 className="title">
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

      {/* <div
        css={css`
          width: 100%;
          height: 100px;
          background-color: #FFD2B0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
          background-repeat: no-repeat;
        `}
      /> */}
    </div>

    <div className="tools">
      <Container>
        <h2 className="text-3xl font-semibold leading-none">My music tools</h2>
        <h3 className="text-lg">Music things I use daily</h3>

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
              but gold), ART ProMPA II preamp (cheap but great), Neumann TLM49, Audio Technica
              AT2035, Nektar Impakt LX61+, Seaboard Block.
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
        <h2 className="text-3xl font-semibold leading-none">My development tools</h2>
        <h3 className="text-lg">Devtools I use daily</h3>

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
                src={require('../assets/logos/Netlify_logo.svg')}
                alt="Netlify"
                className="h-6 mb-4 mx-3"
              />
              <img
                src={require('../assets/logos/now-black.svg')}
                alt="Now"
                className="h-6 mb-4 mx-3"
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
            </div>
          </li>
        </ul>
      </Container>
    </div>

    <style jsx>
      {`
        .hero {
          width: 100%;
          padding: 10rem 0;
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
