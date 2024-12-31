import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CardThumbnail from "../assets/neo-brutalism-image2.jpg";
import Bild1 from "../assets/1.jpg";
import ComingSoon from "../assets/coming_soon.jpg";
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
      subtitle="Einrichtung"
      title="Installieren der Entwicklungsumgebung"
      description="Erfahren Sie, wie Sie React auf Ihrem Computer einrichten und Ihre erste App starten."
      callToActionText="Jetzt einrichten →"
      calllToActionLink="/lesson/0"
    />,
    <Card
      key="2"
      thumbnail={CardThumbnail}
      subtitle="Lektion 1"
      title="Einführung in React und Komponenten"
      description="Lernen Sie die Grundlagen von React und wie Sie Ihre erste Komponente erstellen."
      callToActionText="Jetzt lernen →"
      calllToActionLink="/lesson/1"
    />,
    <Card
      key="3"
      thumbnail={CardThumbnail}
      subtitle="Lektion 2"
      title="Props und State"
      description="Entdecken Sie, wie Daten in React-Komponenten verwaltet und weitergegeben werden."
      callToActionText="Jetzt lernen →"
      calllToActionLink="/lesson/2"
    />,
    <Card
      key="4"
      thumbnail={CardThumbnail}
      subtitle="Lektion 3"
      title="Ereignisse und Bedingtes Rendern"
      description="Lernen Sie, wie Sie Benutzerinteraktionen verarbeiten und dynamische Inhalte anzeigen."
      callToActionText="Jetzt lernen →"
      calllToActionLink="/lesson/3"
    />,
    <Card
      key="5"
      thumbnail={ComingSoon}
      subtitle="Lektion 5"
      title="Coming Soon"
      description="Neue spannende Lektionen sind in Arbeit. Schauen doch bald wieder vorbei!"
      callToActionText=""
      calllToActionLink=""
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
            <h2 className="text-5xl md:text-6xl mb-4 tracking-tight font-bold">
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
              alt=""
              className="w-full h-full max-h-[600px] object-cover hidden md:inline"
            />
            <img
              src={PromotionImage}
              alt=""
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
            <h2 className="text-4xl md:text-5xl mb-12 tracking-tight font-bold">
              Lektion auswählen
            </h2>
            <div className="relative flex justify-center items-center">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 p-4"
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
