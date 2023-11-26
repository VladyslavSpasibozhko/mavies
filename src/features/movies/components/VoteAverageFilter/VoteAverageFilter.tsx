type VoteAverageFilterProps = {
  min: string | number;
  max: string | number;
  onChange: (type: "min" | "max", value: string | number) => void;
};

export function VoteAverageFilter({
  min,
  max,
  onChange,
}: VoteAverageFilterProps) {
  function onType(type: "min" | "max", value: string) {
    const val = value.trim().length ? +value : "";

    onChange(type, val);
  }

  return (
    <div>
      <input
        type="number"
        value={min}
        min={0}
        max={max}
        onChange={(e) => onType("min", e.target.value)}
      />
      <input
        type="number"
        value={max}
        min={min}
        max={10}
        onChange={(e) => onType("max", e.target.value)}
      />
    </div>
  );
}
