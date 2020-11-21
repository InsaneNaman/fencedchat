import { STORE } from "./index";

export const updateValueInSTORE = (key, value) => {
  STORE.update((s) => {
    s[key] = value;
  });
};
