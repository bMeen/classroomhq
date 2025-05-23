import { Dispatch, Reducer, useEffect, useReducer } from "react";

export function useLocalStorageReducer<T, A>(
  key: string,
  reducer: Reducer<T, A>,
  initialState: T,
): [T, Dispatch<A>] {
  const initializer = (): T => {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : initialState;
  };

  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}
