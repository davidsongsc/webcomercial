import { useState, useEffect } from "react";

function Slider({ api }) {
  // eslint-disable-next-line
  const [slides, setSlides] = useState([
    {
      image: `${api()}/static/img/demas/figura-01.webp`,
      descriptions: [
        { text: "Combinados", size: "40px", font: "'Yellowtail', cursive" },
        { text: "", size: "20px", font: "Tahoma" },
        { text: "Combinados são entradas que misturam costelinhas de porco, coxinhas de frango temperadas e empanadas, batata fritas, tirinhas de mignon, onion rings empanadas na cerveja! Basta escolher qual combo lhe agrada mais!", size: "15px", font: "Verdana" },
      ],
    },
    {
      image: `${api()}/static/img/demas/figura-02.webp`,
      descriptions: [
        { text: "Gastronomia", size: "40px", font: "'Yellowtail', cursive" },
        { text: "ARTESANAL", size: "20px", font: "Tahoma" },
        { text: "Todos os molhos são desenvolvidos e produzidos pela cozinha do Demas & Divas,  os ingredientes são todos in natura, não usamos química nem ingredientes processados em nossos pratos e molhos!", size: "15px", font: "Verdana" },
      ],
    },
    {
      image: `${api()}/static/img/demas/figura-03.webp`,
      descriptions: [
        { text: "Gastronomia", size: "40px", font: "'Yellowtail', cursive" },
        { text: "ARTESANAL", size: "20px", font: "Tahoma" },
        { text: "Todos os molhos são desenvolvidos e produzidos pela cozinha do Demas & Divas,  os ingredientes são todos in natura, não usamos química nem ingredientes processados em nossos pratos e molhos!", size: "15px", font: "Verdana" },
      ],
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  // eslint-disable-next-line
  const [description, setDescription] = useState(
    slides[0].descriptions[0].text
  );
  // eslint-disable-next-line
  const [descriptionIndex, setDescriptionIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    setDescription(slides[currentSlide].descriptions[descriptionIndex]);
  }, [currentSlide, slides, descriptionIndex]);

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="sliderContainer">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'slide activeSlide' : ""
              }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="descriptionContainer">
              <div className="controls">
                <button className="butao-movimentos-slide" onClick={handlePrev}>←</button>
                {isPlaying ? (
                  <button className="butao-controle-slide" onClick={handlePause}>Pause</button>
                ) : (
                  <button className="butao-controle-slide" onClick={handlePlay}>Play</button>
                )}
                <button className="butao-movimentos-slide" onClick={handleNext}>→</button>
              </div>
              {slides[currentSlide].descriptions.map((description, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: description.size,
                    fontFamily: description.font,
                  }}
                >
                  {description.text}
                </p>
              ))}
            </div>
          </div>
        ))}

      </div>
      {/*
      <div className="sliderDescription">
        <p>{description}</p>
      </div>
       */}

    </div>
  );
};

export default Slider;
