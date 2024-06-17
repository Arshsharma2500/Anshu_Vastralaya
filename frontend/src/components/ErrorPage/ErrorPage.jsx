import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
import ErrorAnimation from '../../assets/ErrorAnimation.json';
function ErrorPage() {
    const animationContainer = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: ErrorAnimation
        });
        return () => {
            anim.destroy();
        };

    }, []);

  return (
    <div className=' flex flex-wrap justify-center'>
        <div className='w-1/2' ref={animationContainer}></div>
    </div>
  )
}

export default ErrorPage