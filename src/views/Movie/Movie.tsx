import { useParams } from "react-router-dom";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { constructMovieImageSrc } from "@utils/index";
import { Icon } from "@components/Icon";
import { format } from "@utils/date";
import { ToggleFavorite } from "@features/movies/components/Movie/components/ToggleFavorite";
import { ToggleWatchList } from "@features/movies/components/Movie/components/ToggleWatchList";
import { useMovie } from "@features/movies/hooks/useMovies";
import { Loader } from "@components/Loader";
import { Error } from "@components/Error";
import { NoResults } from "@components/NoResults";
import { GenreTag } from "@features/genres/components/GenreTag";
import { SimilarMovies } from "./components/SimilarMovies";

// TODO: add trailers
// TODO: click to genre should move to movies with same genre
// TODO: Image can be null
export function MovieView() {
  const { id } = useParams();

  const { isLoading, data, error } = useMovie(id);

  if (isLoading) return <Loader />;

  if (error) return <Error reason={error.message} />;

  if (!data) return <NoResults />;

  return (
    <Box
      minHeight="mainContent"
      minWidth="100%"
      // TODO: Fix
      backgroundImage={constructMovieImageSrc(data.movie.backdrop_path ?? "")}
      backgroundSize="cover"
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      position="relative"
    >
      <Box
        minHeight="mainContent"
        minWidth="100%"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bgImage="linear-gradient(to right, rgba(0,0,0, 0.9), rgba(0,0,0, 0.7), transparent)"
      >
        <Box padding={8} maxW="50%">
          <Heading color="whiteAlpha.900" size="lg">
            {data.movie.title}
          </Heading>

          <Flex mt={4} alignItems="center">
            <Flex mr={4} alignItems="center">
              <ToggleFavorite movie={data.movie} mr={1} boxSize={6} />
              <ToggleWatchList movie={data.movie} boxSize={6} />
            </Flex>
            <Icon name="MdStar" color="yellow.400" boxSize={6} mr={2} />
            <Text fontWeight={600} color="whiteAlpha.900">
              {data.movie.vote_average} / 10
            </Text>
            <Text color="whiteAlpha.900" px={1}>
              ({data.movie.vote_count})
            </Text>
          </Flex>

          <Flex mt={6}>
            {data.movie.genres.map((genre) => (
              <GenreTag key={genre.id} genre={genre} mr={2} />
            ))}
          </Flex>

          <Text mt={4} color="whiteAlpha.900">
            {data.movie.overview}
          </Text>

          <Text mt={4} color="whiteAlpha.900" fontWeight={600}>
            Realized: {format(data.movie.release_date ?? "", "MMMM YYYY")}
          </Text>
        </Box>

        <SimilarMovies />
      </Box>
    </Box>
  );
}
