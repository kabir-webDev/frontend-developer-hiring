import { ActionTypes } from "../constants/action-types";

export const setCharacters = (characters) => {
  return {
    type: ActionTypes.SET_CHARACTERS,
    payload: characters,
  };
};

export const searchCharacters = (characters) => {
  return {
    type: ActionTypes.SEARCH_CHARACTERS,
    payload: characters,
  };
};

export const selectedCharacter = (character) => {
  return {
    type: ActionTypes.SELECTED_CHARACTER,
    payload: character,
  };
};
export const removeSelectedCharacter = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_CHARACTER,
  };
};
