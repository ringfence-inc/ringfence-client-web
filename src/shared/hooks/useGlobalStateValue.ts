// Hooks
import useGlobalState from "./useGlobalState";

const defState = {};

export const useGlobalStateValue = (
  valueKey = "default",
  stateKey = "default",
  defaultState = defState
) => {
  const [globalState, setGlobalState] = useGlobalState(stateKey, defState);

  console.log("use global state value", globalState);
  const setState = (value: any) => {
    setGlobalState(valueKey, value);
  };

  return [globalState?.[valueKey], setState];
};

export default useGlobalStateValue;
