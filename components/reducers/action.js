import { ADD_NAME } from "./constants";

export function changeName(name) {
    return {
      type: ADD_NAME,
      payload: name,
    };
  }