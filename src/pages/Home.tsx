import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CardThumbnail from "../assets/neo-brutalism-image2.jpg";
import PromotionImage from "../assets/neo-brutalism-image3.jpg";
import PromotionImageMobile from "../assets/neo-brutalism-image3-mobile.jpg";
import Card from "../components/Card";
import Button from "../components/Button";
import ExternalLinkCard from "../components/ExternalLinkCard";
import Checkbox from "../components/Checkbox";
import cardMarkup from "../data/cardMarkup";
import { useRef, useState } from "react";

const Home = () => {


  // Ref für die Lektion auswählen Sektion
  const lektionRef = useRef<HTMLDivElement | null>(null);

  // Wo steht das Carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Funktion, um zur Lektion auswählen Sektion zu scrollen
  const scrollToLektion = () => {
    if (lektionRef.current) {
      lektionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Alle Karten in einem Array für map
  const cards = [
    <Card
      key="1"
      thumbnail={CardThumbnail}
      date="June 15th, 2023"
      title="Lektion 1"
      description="Visit the Getting Started page and learn about its features."
      callToActionText="Get Started"
      calllToActionLink="#"
    />,
    <Card
      key="2"
      thumbnail={CardThumbnail}
      date="June 15th, 2023"
      title="Lektion 2"
      description="Let's take a look at what components are available."
      callToActionText="Go to Components Page"
      calllToActionLink="#"
    />,
    <ExternalLinkCard
      key="3"
      thumbnail={CardThumbnail}
      date="June 15th, 2023"
      title="Lektion 3"
      description="Get ready for an in-depth exploration of the components."
      callToActionText="Go to Github Repository"
      calllToActionLink="#"
    />,
    <Card
      key="4"
      thumbnail={CardThumbnail}
      date="June 20th, 2023"
      title="Another Course"
      description="Learn more about advanced components here."
      callToActionText="Learn More"
      calllToActionLink="/advanced"
    />,
    <ExternalLinkCard
      key="5"
      thumbnail={CardThumbnail}
      date="June 25th, 2023"
      title="More Code Examples"
      description="Explore additional examples in the GitHub repository."
      callToActionText="Explore"
      calllToActionLink="https://github.com/marieooq/neo-brutalism-ui-library"
    />,
  ];

  const totalSlides = Math.ceil(cards.length / 3);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides); // Zyklisches Scrollen nach vorne
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides); // Zyklisches Scrollen nach hinten
  };

  return (
    <div className="snap-mandatory snap-y overflow-scroll">
      <section className="bg-lime-100 w-full md:h-screen lg:h-full snap-start snap-always shrink-0">
        <div className="px-5 md:px-24 h-full py-20 2xl:p-32 flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 md:mr-12 mb-12 md:mb-0">
            <h2 className="text-6xl md:text-7xl mb-4 tracking-tight font-bold">
              Lerne React in 10 Minuten.
            </h2>
            <p className="text-2xl mb-8">Der einfache Einstieg in die Welt von React – interaktiv und unterhaltsam.
            </p>
            <Button onClick={scrollToLektion} rounded="full" color="orange" buttonText="Zu den Lektionen ↓" />
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
      <div className="snap-mandatory snap-y overflow-scroll">
        <section ref={lektionRef} className="bg-yellow-200 w-full md:h-full snap-start snap-always shrink-0 ">
          <div className="px-5 md:px-24 h-full py-20 2xl:p-32">
            <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
              Lektion auswählen
            </h2>
            <div className="relative flex justify-center items-center">

              <Button onClick={handlePrevSlide} rounded="full" color="orange" buttonText="&lt;" />

              <div className="w-full max-w-5xl overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {cards.map((card, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0 p-4">
                      {card}
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={handleNextSlide} rounded="full" color="orange" buttonText="&gt;" />

            </div>
          </div>
        </section>
      </div>
      <section className="bg-violet-100 w-full h-auto snap-start snap-always shrink-0 ">
        <div className="px-5 md:px-24 h-full py-20 2xl:p-32 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-6/12 md:h-full flex flex-col md:mr-12 mb-12 md:mb-0">
            <div className="w-full">
              <SyntaxHighlighter
                language="javascript"
                style={a11yDark}
                className="rounded-lg"
              >
                {cardMarkup()}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <h2 className="text-6xl md:text-7xl mb-6 tracking-tight font-bold">
              All you have to do is just copy and paste the code!
            </h2>
            <p className="text-lg mb-12">
              Elevate your website's visual appeal and leave a lasting
              impression on your audience. Let your creativity shine and create
              a stunning online presence that grabs attention and drives
              engagement. Experience the difference of services, all at no cost,
              and take your web design to the next level!
            </p>
            <Button
              buttonText="Get Started"
              rounded="full"
              size="lg"
              color="lime"
              className="w-[200px]"
            />
          </div>
        </div>
      </section>
      <footer className="w-full h-[200px] m-auto flex justify-between items-center px-5 md:px-24 2xl:p-32 bg-black">
        <div>
          Reactino.
        </div>
        <div>
          <small className="text-white">
            &copy;
            {`${new Date().getFullYear()} `}
            <a
              href="https://www.blindvisionstudio.de"
              target="_blank"
              className="underline"
            >
              blindvisionstudio.de
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Home;
