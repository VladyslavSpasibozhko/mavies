import "./MovieImage.css";

type MovieImageProps = {
  src?: string | null;
  className?: string;
};

export function MovieImage({ src, className }: MovieImageProps) {
  // TODO: lazy loading for image
  return (
    <div className={["movie-image", className].join(" ")}>
      {src ? (
        <img src={`https://image.tmdb.org/t/p/original/${src}`} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
