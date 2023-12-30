import ReactSelect from "react-select";
import { useGenres } from "@features/genres/hooks/useGenres";
import { Genre } from "@api/config/graphql";
import "./GenreSelect.css";

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
      className="gn-select"
      classNamePrefix="gn"
      value={selected}
      isLoading={isLoading}
      isMulti
      isClearable={false}
      options={options}
      getOptionLabel={(o) => o.name}
      getOptionValue={(o) => o.id.toString()}
      placeholder={placeholder}
      closeMenuOnSelect={false}
      controlShouldRenderValue={false}
      onChange={(options) => onChange(options as Genre[])}
      components={{
        IndicatorSeparator: null,
      }}
    />
  );
}
