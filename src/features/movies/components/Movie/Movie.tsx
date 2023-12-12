import { Card } from "@chakra-ui/react";
import { MovieFooter } from "./components/MovieFooter";
import { Img } from "@components/Image";
import { useNavigation } from "@hooks/useNavigation";

export function Movie({ movie }: { movie: MovieBase }) {
  const { goTo } = useNavigation();

  return (
    <Card
      mr={6}
      flex="1 0 480px"
      borderRadius={6}
      overflow="hidden"
      transition="transform 0.1s linear"
      position="relative"
      background="blackAlpha.500"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        width="100%"
        height="100%"
        objectFit="cover"
        onClick={() => {
          goTo("/movies/:id", { id: movie.id });
        }}
        skeletonH={280}
        skeletonW={480}
      />

      <MovieFooter movie={movie} />
    </Card>
  );
}
