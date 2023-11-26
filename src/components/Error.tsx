export function Error({ reason }: { reason: string | number }) {
  return (
    <div>
      <h3>Error occur</h3>

      {reason && <h4>{reason}</h4>}
    </div>
  );
}
