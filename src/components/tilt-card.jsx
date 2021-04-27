import { chakra } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';

const CTilt = chakra(Tilt);

export default function TiltCard({ children, innerZ = '20px', ...props }) {
  return (
    <CTilt
      className="tilt-card"
      // onMove={onMove}
      // tiltReverse
      // scale={0.95}
      perspective={1000}
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      transitionSpeed={1000}
      // glareEnable
      // glareMaxOpacity={0.1}
      // glarePosition="bottom"
      // glareReverse
      {...props}
      sx={{
        position: 'relative',
        zIndex: 0,
        transformStyle: 'preserve-3d',
        '.front': {
          transform: `translateZ(${innerZ}) scale(0.9)`
          // transition: 'transform 0.3s ease'
        }
        // ':hover .inner': {
        //   transform: 'translateZ(70px)'
        // }
      }}
    >
      {children}
    </CTilt>
  );
}
