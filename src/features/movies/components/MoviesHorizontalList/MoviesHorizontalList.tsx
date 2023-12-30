import { Box, BoxProps } from "@chakra-ui/react";
import { Movie, MovieProps } from "../Movie";
import { MovieBaseFragment } from "@api/config/graphql";
import { TextLink } from "./components/TextLink";
import { useEffect, useRef } from "react";
import { scrollObserver } from "@utils/scroll";

type MoviesHorizontalListProps = {
  styles?: BoxProps;
  link?: string;
  title?: string;
  size?: MovieProps["size"];
  movies: MovieBaseFragment[];
  loadMore?: () => void;
};

export function MoviesHorizontalList({
  link,
  title,
  movies,
  styles = {},
  size = "md",
  loadMore,
}: MoviesHorizontalListProps) {
  const listRef = useRef<HTMLDivElement | null>(null);

  const sizes = {
    md: {
      list: {
        minHeight: 280,
      },
      card: {
        paddingBottom: 8,
        paddingTop: 8,
      },
    },
    sm: {
      list: {
        minHeight: 180,
      },
      card: {
        paddingBottom: 8,
        paddingTop: 8,
      },
    },
  };

  const { list, card } = sizes[size];

  useEffect(() => {
    const root = listRef.current as HTMLDivElement;

    return scrollObserver(root, () => {
      if (loadMore) loadMore();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box {...styles}>
      {title && <TextLink link={link} title={title} />}
      <Box {...list}>
        <Box
          ref={listRef}
          display="flex"
          alignItems="center"
          overflowX="auto"
          {...card}
        >
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} size={size} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
