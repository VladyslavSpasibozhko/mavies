import { useFavoriteMovies } from "@features/account/hooks/useFavoriteMovies";
import { useAddFavorite } from "@features/account/hooks/useAddFavourite";
import { Icon } from "@components/Icon";
import { IconProps } from "@chakra-ui/react";

type Props = Omit<IconProps, "name"> & {
  movie: MovieBase;
};

export function ToggleFavorite({ movie, ...rest }: Props) {
  const favorite = useFavoriteMovies();
  const addFavorite = useAddFavorite();

  const isFavorite = inFavorite();

  function inFavorite() {
    const { data } = favorite;

    if (!data) return null;

    for (const result of data.results) {
      if (result.id === movie.id) return true;
    }

    return false;
  }

  async function onToggleFavorite() {
    const res = await addFavorite.trigger({
      media_type: "movie",
      media_id: movie.id,
      favorite: !isFavorite,
    });

    if (res.addFavorite.success) {
      const newFavorites = !isFavorite
        ? favorite.data.results.concat(movie)
        : favorite.data.results.filter((m) => m.id !== movie.id);

      favorite.mutate(
        {
          favorite: { results: newFavorites },
        },
        {
          revalidate: false,
        }
      );
    }
  }

  if (isFavorite === null) return null;

  return (
    <Icon
      name={isFavorite ? "AiFillHeart" : "AiOutlineHeart"}
      color={isFavorite ? "red.500" : "white"}
      cursor="pointer"
      boxSize={5}
      onClick={onToggleFavorite}
      {...rest}
    />
  );
}
