import { useState } from "react";
import { CardFooter, Flex, Heading } from "@chakra-ui/react";
import { MovieActions } from "../MovieActions";
import { Icon } from "@components/Icon";

export function MovieFooter({ movie }: { movie: MovieBase }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardFooter
      height="100%"
      width="100%"
      position="absolute"
      top="100%"
      background="blackAlpha.700"
      transform="translateY(-15%)"
      transition="transform 0.2s"
      paddingY={2}
      paddingX={4}
      _hover={{
        transform: "translateY(-100%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex flexDirection="column" maxWidth="100%">
        <Flex justifyContent="space-between">
          <Heading
            size="md"
            color="white"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
            mr={2}
          >
            {movie.title}
          </Heading>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            background="whiteAlpha.900"
            padding={1}
            borderRadius={4}
          >
            <Icon name="AiFillStar" boxSize={4} mr={1} />
            <Heading size="xs">{movie.vote_average.toFixed(2)}</Heading>
          </Flex>
        </Flex>
        <Flex
          mt={2}
          opacity={isHovered ? 1 : 0}
          transition="opacity 0.2s linear"
          flexDirection="column"
          justifyContent="space-between"
          flex={1}
        >
          <Heading
            size="xs"
            css={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 6,
              maxHeight: "120px",
              maxWidth: "100%",
              color: "white",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {movie.overview}
          </Heading>
          <MovieActions movie={movie} />
        </Flex>
      </Flex>
    </CardFooter>
  );
}
