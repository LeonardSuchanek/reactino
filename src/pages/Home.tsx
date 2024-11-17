import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CardThumbnail from "../assets/neo-brutalism-image2.jpg";
import PromotionImage from "../assets/neo-brutalism-image3.jpg";
import PromotionImageMobile from "../assets/neo-brutalism-image3-mobile.jpg";
import Card from "../components/Card";
import Button from "../components/Button";
import cardMarkup from "../data/cardMarkup";
import { useRef, useState } from "react";
import Header from "../components/Header";

const Home = () => {
  const lektionRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToLektion = () => {
    if (lektionRef.current) {
      lektionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cards = [
    <Card
      key="1"
      thumbnail={CardThumbnail}
      subtitle="Lektion 1"
      title="Einführung in React und Komponenten"
      description="Visit the Getting Started page and learn about its features."
      callToActionText="Jetzt lernen"
      calllToActionLink="/lesson/1"
    />,
    <Card
      key="2"
      thumbnail={CardThumbnail}
      subtitle="Lektion 2"
      title="Props und State"
      description="Let's take a look at what components are available."
      callToActionText="Jetzt lernen"
      calllToActionLink="/lesson/2"
    />,
    <Card
      key="3"
      thumbnail={CardThumbnail}
      subtitle="Lektion 3"
      title="Ereignisse und Bedingtes Rendern"
      description="Get ready for an in-depth exploration of the components."
      callToActionText="Jetzt lernen"
      calllToActionLink="/lesson/3"
    />,
    <Card
      key="4"
      thumbnail={CardThumbnail}
      subtitle="Lektion 4"
      title="Thema der Lektion"
      description="Learn more about advanced components here."
      callToActionText="Learn More"
      calllToActionLink="/lesson/4"
    />,
    <Card
      key="5"
      thumbnail={CardThumbnail}
      subtitle="Lektion 5"
      title="Thema der Lektion"
      description="Explore additional examples in the GitHub repository."
      callToActionText="Explore"
      calllToActionLink="/lesson/5"
    />,
  ];

  const totalSlides = Math.ceil(cards.length / 3);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="snap-mandatory snap-y overflow-scroll">
      <Header />
      <section className="bg-lime-100 w-full md:h-screen lg:h-full snap-start snap-always shrink-0 pt-20">
        <div className="px-5 md:px-24 h-full py-20 2xl:p-32 flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 md:mr-12 mb-12 md:mb-0">
            <h2 className="text-6xl md:text-7xl mb-4 tracking-tight font-bold">
              Lerne React in 10 Minuten.
            </h2>
            <p className="text-2xl mb-8">
              Der einfache Einstieg in die Welt von React – interaktiv und
              unterhaltsam.
            </p>
            <Button
              onClick={scrollToLektion}
              rounded="full"
              color="orange"
              buttonText="Zu den Lektionen ↓"
            />
          </div>
          <div className="flex-1 w-full h-full max-h-[600px] border-black border-2 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <img
              src={PromotionImage}
              alt="Graphic of a woman using a laptop with NEO-BRUTALISM UI design elements and colorful, bold shapes displayed on the screen."
              className="w-full h-full max-h-[600px] object-cover hidden md:inline"
            />
            <img
              src={PromotionImageMobile}
              alt="Graphic of a woman using a laptop with NEO-BRUTALISM UI design elements and colorful, bold shapes displayed on the screen."
              className="w-full h-full max-h-[600px] object-cover inline md:hidden"
            />
          </div>
        </div>
      </section>
      <div className="snap-mandatory snap-y">
        <section
          ref={lektionRef}
          className="bg-yellow-200 w-full md:h-full snap-start snap-always shrink-0 "
        >
          <div className="px-5 md:px-24 h-full py-20 2xl:p-32">
            <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
              Lektion auswählen
            </h2>
            <div className="relative flex justify-center items-center">
              <Button
                onClick={handlePrevSlide}
                rounded="full"
                color="orange"
                buttonText="&lt;"
              />
              <div className="w-full max-w-5xl overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="w-full md:w-1/3 flex-shrink-0 p-4"
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>
              <Button
                onClick={handleNextSlide}
                rounded="full"
                color="orange"
                buttonText="&gt;"
              />
            </div>

            <div className="flex justify-center mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`mx-1 w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? "bg-black" : "bg-gray-400"
                    }`}
                ></span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
