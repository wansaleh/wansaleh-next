import React from 'react';
// import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

const Container = ({ children }) => <div className="max-w-3xl mx-auto">{children}</div>;

const Home = () => (
  <div>
    <Head title="Wan Saleh" />
    <Nav />

    <div className="hero flex flex-col justify-center items-center">
      <Container>
        <h1 className="title">Hello there. I’m Wan Saleh.</h1>
        <p className="description text-2xl font-light">
          A proud Malaysian. A music producer. A web & mobile developer (mostly web). Football
          fanatic & a movie buff.
        </p>
      </Container>
    </div>

    <div className="tools">
      <Container>
        <h2 className="text-3xl font-semibold leading-none">My music tools</h2>
        <h3 className="text-sm font-light tracking-wider">Music things I use daily</h3>

        <ul className="mt-4">
          <li>
            <h5>Workstation</h5>
            <p>MacBook Pro 17" 2018 (home studio) &amp; MacPro 2011 (studio)</p>
          </li>
          <li>
            <h5>DAW</h5>
            <p>
              Main: Logic Pro X 10.4
              <br />
              <small className="block leading-none">Also fluent in Cubase 10 Pro</small>
            </p>
          </li>
          <li>
            <h5>Go-to mix plugins</h5>
            <p>
              Fabfilter (esp. Pro-Q3 & Pro-R), Waves (esp. C6, Scheps Channel Strip, Abbey Road
              Plates), MAAG EQ
            </p>
          </li>
          <li>
            <h5>Gears</h5>
            <p>
              Apogee Duet 2 (my beloved interface), Focusrite Saffire Liquid 56 (studio), ART ProMPA
              II preamp (cheap but great), Neumann TLM49, Audio Technica AT2035, Nektar Impakt
              LX61+, Seaboard Block.
            </p>
          </li>
          <li>
            <h5>Studio Monitors</h5>
            <p>Yamaha NS10 studio, Yamaha HS8, Tannoy Reveal 501A</p>
          </li>
          <li>
            <h5>Homestudio Monitors</h5>
            <p>Yamaha HS5, Tannoy Reveal 402</p>
          </li>
        </ul>
      </Container>
    </div>

    <div className="tools">
      <Container>
        <h2 className="text-3xl font-semibold leading-none">My development tools</h2>
        <h3 className="text-sm font-light tracking-wider">Devtools I use daily</h3>

        <ul className="mt-4">
          <li>
            <h5>Workstation</h5>
            <p>MacBook Pro 17" 2018</p>
          </li>
          <li>
            <h5>Code editor</h5>
            <p>Visual Studio Code (duh)</p>
          </li>
          <li>
            <h5>Frontend stack</h5>
            <p>
              React, Next.js, Gatsby, GraphQL. I also like Vue & Svelte. But dislikes Angular.{' '}
              <small className="block leading-none">This lame site is built using Next.js.</small>
            </p>
          </li>
          <li>
            <h5>Backend stack</h5>
            <p>
              Node, PostgreSQL + Hasura GraphQL. Old times: PHP + MySQL (I'm rusty). If really
              needing PHP, SLIM is my go-to micro framework.
            </p>
          </li>
          <li>
            <h5>SaaS</h5>
            <p>
              DigitalOcean &amp; Vultr for VPS. Netlify (how great are Netlify) for static hosting
              &amp; Now.sh for Next.js deploys. Firebase. Wasabi Cloud Storage (cheap and large S3
              alternative). I avoid AWS unless absolutely necessary (too complicated).
            </p>
          </li>
        </ul>
      </Container>
    </div>

    <style jsx>
      {`
        .hero {
          width: 100%;
          color: #333;
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

        ul li h5 {
          font-weight: 900;
        }
        ul li p {
          margin-bottom: 1rem;
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
