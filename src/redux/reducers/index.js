import { combineReducers } from "redux";
import { charactersReducer, searchCharactersReducer, selectedCharactersReducer } from "./charactersReducer.js";
const reducers = combineReducers({
  allCharacters: charactersReducer,
  character: selectedCharactersReducer,
  searchCharacters: searchCharactersReducer,
});
export default reducers;
