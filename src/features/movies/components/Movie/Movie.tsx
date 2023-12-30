import { Card, Flex } from "@chakra-ui/react";
import { useNavigation } from "@hooks/useNavigation";
import { MovieBaseFragment } from "@api/config/graphql";
import { MovieFooter } from "./components/MovieFooter";
import { Img } from "@components/Image";
import { constructMovieImageSrc } from "@utils/url";
import { Icon } from "@components/Icon";

export type MovieProps = {
  movie: MovieBaseFragment;
  size?: "md" | "sm";
};

export function Movie({ movie, size = "md" }: MovieProps) {
  const { goTo } = useNavigation();

  const sizes = {
    md: {
      w: 460,
      h: 260,
    },
    sm: {
      w: 290,
      h: 160,
    },
  };

  const { w, h } = sizes[size];

  return (
    <Card
      mr={6}
      flex={`1 0 ${w}px`}
      borderRadius={6}
      overflow="hidden"
      transition="transform 0.1s linear"
      position="relative"
      background="blackAlpha.500"
      _hover={{ transform: "scale(1.05)" }}
    >
      {movie.backdrop_path ? (
        <Img
          src={constructMovieImageSrc(movie.backdrop_path)}
          width="100%"
          height="100%"
          objectFit="cover"
          onClick={() => {
            goTo("/movies/:id", { id: movie.id });
          }}
          skeletonH={h}
          skeletonW={w}
        />
      ) : (
        <Flex
          w={w}
          h={h}
          display="flex"
          align="center"
          justify="center"
          background="whiteAlpha.600"
        >
          <Icon
            color="whiteAlpha.800"
            boxSize={12}
            name="MdImageNotSupported"
          />
        </Flex>
      )}

      <MovieFooter size={size} movie={movie} />
    </Card>
  );
}
