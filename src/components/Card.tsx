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
  imageUrlIcons?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageSize?: "small" | "large" | "grid";
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
  imageUrlIcons,
  imageSize = "large",
  showButton = true,
}: CardProps) {
  const imageSizeClass =
    imageSize === "small"
      ? "w-full h-11 object-contain"
      : imageSize === "grid"
      ? "w-full h-full object-cover"
      : "w-full h-56 object-cover";

  return (
    <div className="flex flex-col w-full bg-white shadow-md justify-between h-full">
      {imageUrl && (
        <div className={imageSize === "grid" ? "h-full w-full" : undefined}>
          <img src={imageUrl} alt={imageAlt ?? ""} className={imageSizeClass} />
        </div>
      )}
      <div className="flex flex-col justify-around">
        {imageUrlIcons && (
          <img
            src={imageUrlIcons}
            alt={imageAlt ?? ""}
            className={`w-full ${imageSizeClass} `}
          />
        )}
      </div>
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
        <p className="mt-5 flex justify-center text-center pt-4 text-xl text-black px-5 font-bold min-h-[72px] items-center">
          {title}
        </p>
      )}
      {description && (
        <p className="flex justify-center text-sm text-gray-600 leading-relaxed px-5 ">
          {description}
        </p>
      )}
      {descriptionInfo && (
        <p className="flex mt-5 justify-center text-center h-full text-sm text-gray-600 leading-relaxed px-5 ">
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
