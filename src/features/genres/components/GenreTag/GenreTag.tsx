import { Tag, TagProps } from "@chakra-ui/react";

type GenreTagProps = TagProps & {
  genre: Genre;
};

export function GenreTag({ genre, ...props }: GenreTagProps) {
  return <Tag {...props}>{genre.name}</Tag>;
}
