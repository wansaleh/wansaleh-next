import { AspectRatio, Box, Image, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-hook-inview';

export default function Img({
  src,
  alt,
  width,
  height,
  intrinsic = false,
  caption,
  bg = useColorModeValue('gray.200', 'gray.800'),
  ...props
}) {
  const imgRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const [isVisibleOnce, setIsVisibleOnce] = useState(false);
  const [naturalWidth, setNaturalWidth] = useState(null);
  const [naturalHeight, setNaturalHeight] = useState(null);
  const [wrapperRef, isVisible] = useInView({
    threshold: 0.25
  });

  useEffect(() => {
    if (isVisibleOnce === false && isVisible) {
      setIsVisibleOnce(true);
    }
  }, [isVisible]);

  function showImage(loadEvent = null) {
    // https://reactjs.org/docs/legacy-event-pooling.html
    if (loadEvent !== null && loadEvent.persist) loadEvent.persist();
    setLoaded(true);
    setNaturalWidth(imgRef.current.naturalWidth);
    setNaturalHeight(imgRef.current.naturalHeight);
  }

  const ratio = typeof height === 'number' ? width / height : naturalWidth / naturalHeight;

  const image = (
    <Box>
      <Image
        ref={imgRef}
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
        data-natural-width={naturalWidth}
        data-natural-height={naturalHeight}
        {...props}
      />
    </Box>
  );

  const imageCaption = caption ? (
    <Box as="figure">
      {image}
      <Box as="figcaption">{caption}</Box>
    </Box>
  ) : (
    image
  );

  const imageBox = !isVisibleOnce ? <Box as="span" /> : imageCaption;

  return intrinsic ? (
    <Box ref={wrapperRef}>imageBox</Box>
  ) : (
    <AspectRatio ref={wrapperRef} d="block" ratio={ratio} w="full" h="full" bg={bg}>
      {imageBox}
    </AspectRatio>
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  intrinsic: PropTypes.bool,
  caption: PropTypes.string,
  bg: PropTypes.any
};
