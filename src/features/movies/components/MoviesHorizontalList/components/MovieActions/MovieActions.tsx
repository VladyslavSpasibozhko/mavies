import { Flex } from "@chakra-ui/react";
import {
  ToggleFavorite,
  ToggleWatchList,
} from "@features/movies/components/Movie/components/MovieActions";

export function MovieActions({ movie }: { movie: MovieBase }) {
  return (
    <Flex alignItems="center">
      <ToggleFavorite movie={movie} />
      <ToggleWatchList movie={movie} />
    </Flex>
  );
}
