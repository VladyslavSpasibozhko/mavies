import { MovieBaseFragment } from "@api/config/graphql";
import { Flex } from "@chakra-ui/react";
import { ToggleFavorite } from "@features/movies/components/Movie/components/ToggleFavorite";
import { ToggleWatchList } from "@features/movies/components/Movie/components/ToggleWatchList";

export function MovieActions({ movie }: { movie: MovieBaseFragment }) {
  return (
    <Flex alignItems="center">
      <ToggleFavorite movie={movie} />
      <ToggleWatchList movie={movie} />
    </Flex>
  );
}
