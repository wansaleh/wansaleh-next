import Router, { useRouter } from 'next/router';
import React from 'react';

// Save the scroll position for the given url
function saveScrollPosition(url, savePosition) {
  savePosition(url, window.scrollY);
}

// Restore the scroll position for the given url is possible
function restoreScrollPosition(url, positions) {
  console.log(url, positions);
  const position = positions.current[url];

  if (position) {
    window.scrollTo({ top: position });
  }
}

export default function useScrollRestoration() {
  const router = useRouter();
  const positions = React.useRef({});

  const updatePosition = (url, pos) => {
    console.log(url, pos);
    positions.current = {
      ...positions.current,
      [url]: pos,
    };
  };

  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      let shouldScrollRestore = false;
      window.history.scrollRestoration = 'manual';

      const onBeforeUnload = (event) => {
        saveScrollPosition(router.asPath, updatePosition);
        delete event.returnValue;
      };

      const onRouteChangeStart = () => {
        saveScrollPosition(router.asPath, updatePosition);
      };

      const onRouteChangeComplete = (url) => {
        if (shouldScrollRestore) {
          shouldScrollRestore = false;
          restoreScrollPosition(url, positions);
        }
      };

      window.addEventListener('beforeunload', onBeforeUnload);
      Router.events.on('routeChangeStart', onRouteChangeStart);
      Router.events.on('routeChangeComplete', onRouteChangeComplete);
      Router.beforePopState(() => {
        shouldScrollRestore = true;
        return true;
      });

      return () => {
        window.removeEventListener('beforeunload', onBeforeUnload);
        Router.events.off('routeChangeStart', onRouteChangeStart);
        Router.events.off('routeChangeComplete', onRouteChangeComplete);
        Router.beforePopState(() => true);
      };
    }
  }, []);
}
