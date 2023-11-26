import ReactSelect, { Props } from "react-select";
import "./Select.css";

export function Select<O, Multi extends boolean = false>(
  props: Props<O, Multi>
) {
  return <ReactSelect {...props} classNamePrefix="gq" className="gq-select" />;
}
