type AnimalImageProps = {
  src: string;
  alt: string;
  classname?: string;
};

export default function AnimalImage({ src, alt, classname }: AnimalImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`object-cover w-full h-full rounded-lg ${classname ?? ""}`}
    />
  );
}
