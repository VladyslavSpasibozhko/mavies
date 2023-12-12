import { Tag, TagCloseButton, TagLabel, TagProps } from "@chakra-ui/react";
// import { Icon, IconProps } from "@components/Icon";

type GenreTagProps = TagProps & {
  genre: Genre;
  onClose?: () => void;
  // icon?: IconProps["name"];
};

export function GenreTag({ genre, onClose, ...props }: GenreTagProps) {
  return (
    <Tag {...props}>
      <TagLabel>{genre.name}</TagLabel>
      {onClose && <TagCloseButton onClick={onClose} />}
    </Tag>
  );
}
