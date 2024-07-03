// src/Slideshow.jsx
import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    src: "https://www.w3docs.com/uploads/media/default/0001/03/66cf5094908491e69d8187bcf934050a4800b37f.jpeg",
    caption: "London, England"
  },
  {
    src: "https://www.w3docs.com/uploads/media/default/0001/03/b7d624354d5fa22e38b0ab1f9b905fb08ccc6a05.jpeg",
    caption: "Sunset in Romania"
  },
  {
    src: "https://www.w3docs.com/uploads/media/default/0001/03/5bfad15a7fd24d448a48605baf52655a5bbe5a71.jpeg",
    caption: "New York, USA"
  }
];

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    showSlides();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [slideIndex]);

  const showSlides = () => {
    timeoutRef.current = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds
  };

  const currentSlide = (index) => {
    setSlideIndex(index);
  };

  const plusSlides = (step) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + step;
      if (newIndex < 0) {
        newIndex = slides.length - 1;
      } else if (newIndex >= slides.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const slideStyle = {
    width: '50%', // Adjust the width as needed
    height: 'auto', // Maintain the aspect ratio
    margin: '0 auto', // Center the image horizontally
    
  };

  return (
    <div className="slideshow-container relative max-w-[1000px] bg-green-600 w-max">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${slideIndex === index ? 'block' : 'hidden'}`}
        >
          <div className="numbertext text-white text-sm absolute top-0 p-2">
            {index + 1} / {slides.length}
          </div>
          <img src={slide.src} style={slideStyle} alt={slide.caption} />
          <div className="text text-white text-base absolute bottom-2 w-full text-center p-2">
            {slide.caption}
          </div>
        </div>
      ))}
      <a
        className="prev cursor-pointer absolute top-1/2 left-0 px-4 py-2 text-white font-bold text-xl transition ease-in-out duration-600 rounded-r-lg select-none hover:bg-black/80"
        onClick={() => plusSlides(-1)}
      >
        &#10094;
      </a>
      <a
        className="next cursor-pointer absolute top-1/2 right-0 px-4 py-2 text-white font-bold text-xl transition ease-in-out duration-600 rounded-l-lg select-none hover:bg-black/80"
        onClick={() => plusSlides(1)}
      >
        &#10095;
      </a>
      <div className="text-center mt-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot h-3 w-3 mx-1 rounded-full inline-block transition ease-in-out duration-600 cursor-pointer ${slideIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
      
    </div>
  );
};

export default Slideshow;
