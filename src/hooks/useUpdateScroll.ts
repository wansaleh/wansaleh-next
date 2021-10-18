import { useRouterScroll } from '@moxy/next-router-scroll';
import { useEffect } from 'react';

export default function useUpdateScroll() {
  const { updateScroll } = useRouterScroll();

  useEffect(() => {
    updateScroll();
  }, []);
}
