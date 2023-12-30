import { useState } from "react";
import { CardFooter, Flex, Heading, Text } from "@chakra-ui/react";
import { MovieActions } from "@features/movies/components/Movie/components/MovieActions";
import { Icon } from "@components/Icon";
import { MovieBaseFragment } from "@api/config/graphql";

type MovieFooterProps = {
  size?: "md" | "sm";
  movie: MovieBaseFragment;
};

export function MovieFooter({ movie, size = "md" }: MovieFooterProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizes = {
    md: {
      container: {
        paddingY: 2,
        paddingX: 4,
        transform: "translateY(-15%)",
      },
      title: {
        size: "md",
      },
      description: {
        fontSize: 14,
        fontWeight: 600,
        maxHeight: 120,
        WebkitLineClamp: 6,
      },
      voting: {
        fontSize: 14,
        fontWeight: 600,
      },
    },
    sm: {
      container: {
        paddingY: 2,
        paddingX: 2,
        transform: "translateY(-20%)",
      },
      title: {
        size: "sm",
      },
      description: {
        fontSize: 12,
        fontWeight: 600,
        maxHeight: 120,
        WebkitLineClamp: 4,
      },
      voting: {
        fontSize: 12,
        fontWeight: 600,
      },
    },
  };

  const { container, title, description, voting } = sizes[size];

  return (
    <CardFooter
      height="100%"
      width="100%"
      position="absolute"
      top="100%"
      background="blackAlpha.700"
      transition="transform 0.2s"
      _hover={{
        transform: "translateY(-100%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...container}
    >
      <Flex flexDirection="column" maxWidth="100%">
        <Flex justifyContent="space-between">
          <Heading
            color="white"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
            mr={2}
            {...title}
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
            {movie.vote_average && (
              <Text css={voting}>{movie.vote_average.toFixed(2)}</Text>
            )}
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
          <Text
            css={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              maxWidth: "100%",
              color: "white",
              textOverflow: "ellipsis",
              overflow: "hidden",
              ...description,
            }}
          >
            {movie.overview}
          </Text>
          <MovieActions movie={movie} />
        </Flex>
      </Flex>
    </CardFooter>
  );
}
