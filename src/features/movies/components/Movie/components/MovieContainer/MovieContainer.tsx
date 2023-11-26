import "./MovieContainer.css";

export type MovieCardProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export function MovieContainer({ children, onClick }: MovieCardProps) {
  return (
    <div className="movie-card" onClick={onClick}>
      {children}
    </div>
  );
}
