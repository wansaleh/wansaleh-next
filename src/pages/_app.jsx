import 'tailwindcss/tailwind.css';
import '../styles/font-sharp-grotesk.css';
import '../styles/font-tiempos.css';
import '../styles/main.css';

import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useRef } from 'react';

import Layout from '../components/layout';
import chakra from '../styles/chakra';

const ROUTES_TO_RETAIN = ['/blog'];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const retainedComponents = useRef({});

  const isRetainableRoute = ROUTES_TO_RETAIN.includes(router.pathname);

  // Add Component to retainedComponents if we haven't got it already
  if (isRetainableRoute && !retainedComponents.current[router.pathname]) {
    const MemoComponent = memo(Component);
    retainedComponents.current[router.pathname] = {
      component: <MemoComponent {...pageProps} />,
      scrollPos: 0
    };
  }

  // Save the scroll position of current page before leaving
  const handleRouteChangeStart = () => {
    if (isRetainableRoute) {
      retainedComponents.current[router.pathname].scrollPos = window.scrollY;
    }
  };

  // Save scroll position - requires an up-to-date router.pathname
  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router.pathname]);

  // Scroll to the saved position when we load a retained component
  useEffect(() => {
    if (isRetainableRoute) {
      window.scrollTo(0, retainedComponents.current[router.pathname].scrollPos);
    }
  }, [Component, pageProps]);

  return (
    <ChakraProvider theme={chakra}>
      <Layout>
        <div style={{ display: isRetainableRoute ? 'block' : 'none' }}>
          {Object.entries(retainedComponents.current).map(([path, c]) => (
            <div key={path} style={{ display: router.pathname === path ? 'block' : 'none' }}>
              {c.component}
            </div>
          ))}
        </div>
        {!isRetainableRoute && <Component {...pageProps} />}
      </Layout>
    </ChakraProvider>
  );
}
