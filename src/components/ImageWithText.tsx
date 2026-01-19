type ImageWithTextProps = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
};

export default function ImageWithText({
  src,
  alt,
  title,
  subtitle,
}: ImageWithTextProps) {
  return (
    <div className="block md:relative w-full">
      <img
        src={src}
        alt={alt}
        className="w-full max-h-80 object-cover brightness-50"
      />

      <div className="absolute inset-0 flex flex-col max-h-150 justify-center items-center text-center">
        <h1 className="text-white font-(--font-family-heading) text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-white/90 md:px-60 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
