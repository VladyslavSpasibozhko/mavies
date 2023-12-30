import { Genre } from "@api/config/graphql";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { GenreTag } from "@features/genres/components/GenreTag";
import { GenresSelect } from "@features/genres/components/GenresSelect";
import { VoteAverageFilter } from "@features/movies/components/VoteAverageFilter/VoteAverageFilter";
import { useFilter } from "@features/movies/context/FiltersProvider";

function filterGenres(genres: Genre[], id: number) {
  return genres.filter((genre) => genre.id !== id);
}

export function Filters() {
  const {
    withGenres,
    withoutGenres,
    voting,
    onSetWithGenres,
    onSetWithoutGenres,
    onSetVoting,
  } = useFilter();

  return (
    <Box paddingX={8} pt={8} pb={4}>
      <Flex justify="space-between">
        <Heading color="whiteAlpha.900" size="lg" textTransform="uppercase">
          Top Rated
        </Heading>

        <Flex flexGrow={1} ml={12}>
          <Box mr={2} flexGrow={2}>
            <GenresSelect
              selected={withGenres}
              onChange={onSetWithGenres}
              placeholder="Included genres"
            />
          </Box>
          <Box mr={2} flexGrow={2}>
            <GenresSelect
              selected={withoutGenres}
              onChange={onSetWithoutGenres}
              placeholder="Excluded genres"
            />
          </Box>
          <Box flexGrow={1}>
            <VoteAverageFilter
              min={voting.min}
              max={voting.max}
              onChange={onSetVoting}
            />
          </Box>
        </Flex>
      </Flex>
      <Box mt={4}>
        {!!withGenres.length && (
          <Flex mt={2}>
            <Text
              mr={4}
              color="whiteAlpha.900"
              fontWeight="600"
              textTransform="uppercase"
            >
              Included genres:
            </Text>
            <Flex alignItems="center">
              {withGenres.map((genre) => (
                <GenreTag
                  key={genre.id}
                  mr={2}
                  genre={genre}
                  colorScheme="green"
                  onClose={() => {
                    onSetWithGenres(filterGenres(withGenres, genre.id));
                  }}
                />
              ))}
            </Flex>
          </Flex>
        )}

        {!!withoutGenres.length && (
          <Flex mt={2}>
            <Text
              mr={4}
              color="whiteAlpha.900"
              fontWeight="600"
              textTransform="uppercase"
            >
              Excluded genres:
            </Text>
            <Flex alignItems="center">
              {withoutGenres.map((genre) => (
                <GenreTag
                  key={genre.id}
                  mr={2}
                  genre={genre}
                  colorScheme="orange"
                  onClose={() => {
                    onSetWithoutGenres(filterGenres(withoutGenres, genre.id));
                  }}
                />
              ))}
            </Flex>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
