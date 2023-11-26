import ReactSelect from "react-select";
import { useGenres } from "../../hooks/useGenres";

type GenresSelectProps = {
  selected: Genre[];
  placeholder?: string;
  onChange: (genres: Genre[]) => void;
};

export function GenresSelect({
  placeholder,
  selected,
  onChange,
}: GenresSelectProps) {
  const { data, isLoading } = useGenres();

  const options = data ? data.movieGenres : [];

  return (
    <ReactSelect
      value={selected}
      isLoading={isLoading}
      options={options}
      getOptionLabel={(o) => o.name}
      getOptionValue={(o) => o.id.toString()}
      placeholder={placeholder}
      isMulti
      closeMenuOnSelect={false}
      onChange={(options) => onChange(options as Genre[])}
    />
  );
}
