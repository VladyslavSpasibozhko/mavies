import { useNavigate } from "react-router-dom";

export function useNavigation() {
  const navigate = useNavigate();

  function prepare(url: string, options: Record<string, unknown>) {
    let _url = url;

    for (const option in options) {
      const key = `:${option}`;
      const value = options[option];

      _url = _url.replace(key, value as string);
    }

    return _url;
  }

  //   TODO: Add types
  function goTo(path: string, options = {}) {
    navigate(prepare(path, options));
  }

  return { goTo };
}
