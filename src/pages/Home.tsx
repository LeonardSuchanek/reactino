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
import { useRef } from "react";

const Home = () => {


  // Ref für die Lektion auswählen Sektion
  const lektionRef = useRef<HTMLDivElement | null>(null);

  // Funktion, um zur Lektion auswählen Sektion zu scrollen
  const scrollToLektion = () => {
    if (lektionRef.current) {
      lektionRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
      <section ref={lektionRef} className="bg-yellow-200 w-full md:h-full snap-start snap-always shrink-0 ">
        <div className="px-5 md:px-24 h-full py-20 2xl:p-32">
          <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
            Lektion auswählen
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-[30%] mb-12 md:mb-0">
              <Card
                thumbnail={CardThumbnail}
                date="June 15th, 2023"
                title="What is Neo Brutallism UI?"
                description="Visit the Getting Started page and learn about its features."
                callToActionText="Get Started"
                calllToActionLink="/overview"
              />
            </div>
            <div className="md:w-[30%] mb-12 md:mb-0">
              <Card
                thumbnail={CardThumbnail}
                date="June 15th, 2023"
                title="Want to browse the components?"
                description="Let's take a look at what components are available. You can quickly integrate them into your project with copy and paste."
                callToActionText="Go to Components Page"
                calllToActionLink="components/card"
              />
            </div>
            <div className="md:w-[30%]">
              <ExternalLinkCard
                thumbnail={CardThumbnail}
                date="June 15th, 2023"
                title="Interested in viewing the code?"
                description="Get ready for an in-depth exploration of the components in action within the codebase. Let's dive deep into how these components work behind the scenes!"
                callToActionText="Go to Github Repository"
                calllToActionLink="https://github.com/marieooq/neo-brutalism-ui-library"
              />
            </div>
          </div>
        </div>
      </section>
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
