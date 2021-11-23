import { ActionTypes } from "../constants/action-types";
const intialState = {
  characters: [],
  searchCharacters:[]
};

export const charactersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CHARACTERS:
      return { ...state, characters: payload };
    default:
      return state;
  }
};

export const searchCharactersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEARCH_CHARACTERS:
      return { ...state, searchCharacters: payload };
    default:
      return state;
  }
};

export const selectedCharactersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_CHARACTER:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_CHARACTER:
      return {};
    default:
      return state;
  }
};
