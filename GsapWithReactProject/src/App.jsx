import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const App = () => {

  const gsapRef = useRef();
  useGSAP(() => {
    gsap.to(gsapRef.current, { x: 300, duration: 2, rotation: 360 , delay: 1 });
  });

  return (
    <div >
      <div ref={gsapRef} className="box" style={{ width: '100px', height: '100px', background: 'red' }}></div>
    </div>
  );
};

export default App