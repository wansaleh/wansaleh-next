import { AspectRatio, Box, Image, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useInView } from 'react-hook-inview';
import Zoom from 'react-medium-image-zoom';

// const CImageZoom = chakra(ImageZoom);

export default function Img({
  src,
  alt,
  width,
  height,
  intrinsic = false,
  caption,
  bg,
  cloudinary = false,
  zoom = false,
  darkModeDim = true,
  ...props
}: {
  src: string;
  alt: string;
  width: number;
  height?: number;
  intrinsic?: boolean;
  caption?: string;
  bg?: string;
  cloudinary?: boolean;
  zoom?: boolean;
  darkModeDim?: boolean;
  [x: string]: any;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [naturalWidth, setNaturalWidth] = useState<number>(0);
  const [naturalHeight, setNaturalHeight] = useState<number>(0);

  const [wrapperRef, isVisible] = useInView({
    threshold: 0.1,
    unobserveOnEnter: true,
  });

  const defaultBg = useColorModeValue('gray.200', 'gray.900');
  const dimmedOpacity = useColorModeValue(1, darkModeDim ? 0.75 : 1);

  function showImage(loadEvent: React.SyntheticEvent<HTMLImageElement, Event>) {
    // https://reactjs.org/docs/legacy-event-pooling.html
    if (loadEvent?.persist) loadEvent.persist();
    setLoaded(true);
    setNaturalWidth(imgRef.current?.naturalWidth || 0);
    setNaturalHeight(imgRef.current?.naturalHeight || 0);
  }

  const ratio =
    typeof height === 'number' ? width / height : naturalWidth / naturalHeight;

  src = src.startsWith('//') ? `https:${src}` : src;

  const image = (
    <Image
      ref={imgRef}
      src={
        cloudinary
          ? `https://res.cloudinary.com/wansaleh/image/fetch/w_${width}/${src}`
          : src
      }
      // src={`https://res.cloudinary.com/wansaleh/image/fetch/w_${width}/${src}`}
      alt={alt}
      width="full"
      height="full"
      objectFit="cover"
      objectPosition="center"
      position="relative"
      d="block"
      transition="opacity 1s ease"
      opacity={loaded ? dimmedOpacity : 0}
      // visibility={alreadyVisible ? 'visible' : 'hidden'}
      onLoad={showImage}
      data-natural-width={naturalWidth}
      data-natural-height={naturalHeight}
      {...props}
    />
  );
  const imageCaption = caption ? (
    <Box as="figure">
      {zoom ? <Zoom>{image}</Zoom> : image}
      <Box as="figcaption">{caption}</Box>
    </Box>
  ) : (
    image
  );

  const imageBox = !isVisible ? <Box as="span" /> : imageCaption;

  return intrinsic ? (
    <Box ref={wrapperRef}>{imageBox}</Box>
  ) : (
    <AspectRatio
      ref={wrapperRef}
      d="block"
      ratio={ratio}
      w="full"
      h="full"
      bg={bg || defaultBg}
    >
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
  bg: PropTypes.any,
};
