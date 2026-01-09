import Button from "../components/Button";

interface CardProps {
  title?: string;
  name?: string;
  age?: string;
  breed?: string;
  type?: string;
  city?: string;
  zipcode?: string;
  description?: string;
  descriptionInfo?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageSize?: "small" | "large";
  showButton?: boolean;
}

function Card({
  name,
  age,
  breed,
  type,
  city,
  zipcode,
  description,
  imageUrl,
  imageAlt,
  title,
  descriptionInfo,
  imageSize = "large",
  showButton = true,
}: CardProps) {
  const imageSizeClass =
    imageSize === "small"
      ? "w-full h-11 object-contain"
      : "w-full h-56 object-cover";

  return (
    <div className="flex flex-col justify-around card w-full max-w-xs bg-white shadow-md">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt ?? ""}
          className={`w-full ${imageSizeClass} `}
        />
      )}
      {type && (
        <p className="text-sm font-semibold text-gray-500 px-5 pt-4">{type}</p>
      )}
      {name && (
        <h1 className="mt-1 text-2xl font-extrabold text-indigo-600 px-5">
          {name}
        </h1>
      )}
      {age && breed && (
        <p className="mt-2 text-sm font-semibold text-gray-600 px-5">
          {age} &bull; {breed}
        </p>
      )}
      {city && (
        <p className="mt-2 text-sm font-semibold text-black px-5">{city}</p>
      )}
      {zipcode && (
        <p className="mt-2 text-sm font-semibold text-black px-5 pb-4">
          Code postal : {zipcode}
        </p>
      )}
      {title && (
        <p className="flex justify-center pt-4 text-sm text-black px-5 font-bold">
          {title}
        </p>
      )}
      {description && (
        <p className="flex justify-center text-sm text-gray-600 leading-relaxed px-5 ">
          {description}
        </p>
      )}
      {descriptionInfo && (
        <p className="flex justify-center text-justify py-4 text-sm text-gray-600 leading-relaxed px-5 ">
          {descriptionInfo}
        </p>
      )}
      {showButton && (
        <Button size="sm" className="w-fit mt-5 ml-5 mb-5">
          Rencontrer
        </Button>
      )}
    </div>
  );
}
export default Card;
