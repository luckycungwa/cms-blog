import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Image, Button, ButtonGroup } from "@nextui-org/react";

const HeroCarousel = () => {
  // Define the state for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the slides for the carousel
  const slides = [
    {
      image: "https://images.pexels.com/photos/8347500/pexels-photo-8347500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Slide 1",
      description: "This is the description for slide 1.",
      buttonText: "Learn More",
      buttonLink: "https://example.com/slide1",
    },
    {
      image: "https://www.grif.studio/chromatic",
      title: "Slide 2",
      description: "This is the description for slide 2.",
      buttonText: "Buy Now",
      buttonLink: "https://example.com/slide2",
    },
    {
      image: "https://www.grif.studio/chromatic",
      title: "Slide 3",
      description: "This is the description for slide 3.",
      buttonText: "Sign Up",
      buttonLink: "https://example.com/slide3",
    },
  ];

  // Define the spring animation for the carousel
  const slideAnimation = useSpring({
    transform: `translateX(-${currentSlide * 100}%)`,
    config: { duration: 600 },
  });

  // Define the previous and next slide functions
  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  // Render the carousel
  return (
    <div className="w-full h-full">
      <animated.div style={slideAnimation} className="carousel">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover z-0"
              fallbackSrc="https://images.pexels.com/photos/8347500/pexels-photo-8347500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              radius="0"
            />
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Button href={slide.buttonLink}>{slide.buttonText}</Button>
            </div>
          </div>
        ))}
      </animated.div>
      <ButtonGroup className="w-full h-auto flex px-8 lg:px-6 justify-between z-1 items-center absolute bottom-50">
        <Button onClick={goToPreviousSlide}>Previous</Button>
        <Button onClick={goToNextSlide}>Next</Button>
      </ButtonGroup>
    </div>
  );
};

export default HeroCarousel;
