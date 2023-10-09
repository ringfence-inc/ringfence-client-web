import { useState, useEffect } from "react";

type State = {
  [key: string]: any;
};

type SetStateFunction = (key: string, value: any) => void;

const globalState: State = {};
const setters: { [key: string]: SetStateFunction[] } = {};

const defState = {};

export const useGlobalState = (
  stateKey: string = "default",
  defaultState: State = defState
): [State, SetStateFunction] => {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!globalState[stateKey]) {
      globalState[stateKey] = defaultState;
    }
  }, [defaultState]);

  const setState: SetStateFunction = (key, value) => {
    if (globalState?.[stateKey]) {
      globalState[stateKey][key] = value;
    } else {
      globalState[stateKey] = { [key]: value };
    }

    if (setters[key]) {
      setters[key].forEach((setter: any) => setter(value));
    }

    setI(i + 1);
  };

  return [globalState?.[stateKey] || {}, setState];
};

export default useGlobalState;
