import { useAddWatchList } from "@features/account/hooks/useAddWatchList";
import { useWatchListMovies } from "@features/account/hooks/useWatchList";
import { Icon } from "@components/Icon";
import { IconProps } from "@chakra-ui/react";

type Props = Omit<IconProps, "name"> & {
  movie: MovieBase;
};

export function ToggleWatchList({ movie, ...rest }: Props) {
  const watchList = useWatchListMovies();
  const addWatchList = useAddWatchList();

  function inWatchList() {
    const { data } = watchList;

    if (!data) return null;

    for (const result of data.results) {
      if (result.id === movie.id) return true;
    }

    return false;
  }

  async function onToggleWatchList() {
    const isInWatchList = inWatchList();

    const res = await addWatchList.trigger({
      media_id: movie.id,
      media_type: "movie",
      watchlist: !isInWatchList,
    });

    if (res.addWatchList.success) {
      const newFavorites = !isInWatchList
        ? watchList.data.results.concat(movie)
        : watchList.data.results.filter((m) => m.id !== movie.id);

      watchList.mutate(
        {
          watchList: { results: newFavorites },
        },
        {
          revalidate: false,
        }
      );
    }
  }

  return (
    <Icon
      name={inWatchList() ? "MdWatchLater" : "MdOutlineWatchLater"}
      color="white"
      cursor="pointer"
      boxSize={5}
      onClick={onToggleWatchList}
      {...rest}
    />
  );
}
