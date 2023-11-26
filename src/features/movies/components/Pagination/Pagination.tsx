type PaginationProps = {
  current: number;
  total: number;
  disabled?: boolean;
  onChange: (value: number) => void;
};

export function Pagination({ current, total, onChange }: PaginationProps) {
  function onInput(value: string) {
    const isHasLength = value.trim().length;

    if (isHasLength) {
      const numValue = Number(value);

      if (numValue >= 1 && numValue <= total) onChange(numValue);
    }
  }

  return (
    <div>
      <button disabled={current === 1} onClick={() => onChange(current - 1)}>
        Prev
      </button>
      <p>Current: {current}</p>
      <button
        disabled={current === total}
        onClick={() => onChange(current + 1)}
      >
        Next
      </button>

      <input
        placeholder="To"
        type="number"
        max={total}
        onChange={(e) => onInput(e.target.value)}
      />
      <p>Total: {total}</p>
    </div>
  );
}
