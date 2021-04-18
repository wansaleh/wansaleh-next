import Tilt from 'react-parallax-tilt';

export default function TiltCard({ children, innerZ = '20px', ...props }) {
  return (
    <Tilt
      className="tilt-card"
      // onMove={onMove}
      // tiltReverse
      scale={1.02}
      perspective={1000}
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      transitionSpeed={1000}
      // glareEnable
      // glareMaxOpacity={0.1}
      // glarePosition="bottom"
      // glareReverse
      {...props}
      css={{
        position: 'relative',
        zIndex: 0,
        transformStyle: 'preserve-3d',
        '> :last-child:not(:first-child)': {
          transform: `translateZ(${innerZ}) scale(0.9)`
          // transition: 'transform 0.3s ease'
        }
        // ':hover .inner': {
        //   transform: 'translateZ(70px)'
        // }
      }}
    >
      {children}
    </Tilt>
  );
}
