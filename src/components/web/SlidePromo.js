import { useState, useEffect } from "react";


function SlidePromo({api}) {
  // eslint-disable-next-line
  const [slides, setSlides] = useState([
    {
      image: "https://dagesico.pythonanywhere.com/static/img/demas/figura-01.webp",
      descriptions: [
        { text: "Combinados", size: "40px", font: "'Yellowtail', cursive" },
        { text: "", size: "30px", font: "Tahoma" },
        { text: "Combinados são entradas que misturam costelinhas de porco, coxinhas de frango temperadas e empanadas, batata fritas, tirinhas de mignon, onion rings empanadas na cerveja! Basta escolher qual combo lhe agrada mais!", size: "15px", font: "Verdana" },
      ],
    },
    {
      image: "https://dagesico.pythonanywhere.com/static/img/demas/figura-02.webp",
      descriptions: [
        { text: "Gastronomia", size: "40px", font: "'Yellowtail', cursive" },
        { text: "ARTESANAL", size: "30px", font: "Tahoma" },
        { text: "Todos os molhos são desenvolvidos e produzidos pela cozinha do Demas & Divas,  os ingredientes são todos in natura, não usamos química nem ingredientes processados em nossos pratos e molhos!", size: "15px", font: "Verdana" },
      ],
    },
    {
      image: "https://dagesico.pythonanywhere.com/static/img/demas/figura-03.webp",
      descriptions: [
        { text: "Gastronomia", size: "40px", font: "'Yellowtail', cursive" },
        { text: "ARTESANAL", size: "30px", font: "Tahoma" },
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
    }, 4500);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    setDescription(slides[currentSlide].descriptions[descriptionIndex]);
  }, [currentSlide, slides, descriptionIndex]);



  const handleEscolha = (index) => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="sliderContainerc">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'slide activeSlide' : ""
              }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
           
          </div>
        ))}
        
      
      </div>
      <div style={{height: '40px',top: '50px', color: 'black', display: 'flex'}}>
      {slides.map((slide, index) => (
          <button className={`bn-i-botom ${index === currentSlide ? 'bn-i-bottom-ativado' : ""}`} onClick={()=> handleEscolha(index)}></button>
        ))}
      
        </div>

      
    </div>
  );
};

export default SlidePromo;
