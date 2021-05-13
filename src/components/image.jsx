import { AspectRatio, Box, Image, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-hook-inview';

export default function Img({ src, alt, height, width, ...props }) {
  const [ref, isVisible] = useInView({
    threshold: 0.25
  });

  const [loaded, setLoaded] = useState(false);
  const [isVisibleOnce, setIsVisibleOnce] = useState(false);

  useEffect(() => {
    if (isVisibleOnce === false && isVisible) {
      setIsVisibleOnce(true);
    }
  }, [isVisible]);

  function showImage(loadEvent = null) {
    // https://reactjs.org/docs/legacy-event-pooling.html
    if (loadEvent !== null && loadEvent.persist) loadEvent.persist();
    setLoaded(true);
  }

  return (
    <AspectRatio
      ratio={width / height}
      w="full"
      h="full"
      ref={ref}
      bg={useColorModeValue('gray.200', 'gra0.800')}
    >
      {/* <Image src={`https://res.cloudinary.com/wansaleh/image/fetch/w_50/${src}`} alt="" /> */}
      {!isVisibleOnce ? (
        <Box />
      ) : (
        <Image
          src={`https://res.cloudinary.com/wansaleh/image/fetch/w_${width}/${src}`}
          alt={alt}
          width="full"
          height="full"
          objectFit="cover"
          objectPosition="center"
          position="relative"
          d="block"
          transition="opacity 0.5s ease"
          opacity={loaded ? useColorModeValue(1, 0.75) : 0}
          // visibility={alreadyVisible ? 'visible' : 'hidden'}
          onLoad={showImage}
          {...props}
        />
      )}
    </AspectRatio>
  );
}
