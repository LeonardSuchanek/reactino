import { Link } from "react-router-dom";

type CardType = {
  thumbnail: string | undefined;
  subtitle?: string;
  title?: string;
  description?: string;
  callToActionText?: string;
  calllToActionLink: string;
};

const Card = ({
  thumbnail,
  subtitle: date,
  title,
  description,
  callToActionText,
  calllToActionLink,
}: CardType) => {
  return (
    <div className="min-h-100 w-full aspect-[1/1] max-w-2xl border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
      <Link to={calllToActionLink}>
        <article className="w-full">
          {thumbnail && <img src={thumbnail}></img>}
          <div className="px-6 py-5 text-left">
            {date && <p className="text-xl mb-4">{date}</p>}
            {title && (
              <h1 className="text-xl md:text-4xl leading-8 font-bold mb-4">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-2xl mb-4 line-clamp-2 lg:line-clamp-4">
                {description}
              </p>
            )}
            {callToActionText && <div className="text-xl font-bold mt-10">{callToActionText}</div>}
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Card;
