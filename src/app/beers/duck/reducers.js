import types from "./types";
const INITIAL_STATE = {
  listName: "Beers",
  list: [
    {
      imgSrc:
        "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-a-nanasy-bottle-file-for-internet-0x370-t.jpg",
      name: "PINTA A Nanasy? 16,5°",
      IBU: "b.d.",
    },
    {
      imgSrc:
        "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-final-call-bottle-file-for-internet-0x370-t.jpg",
      name: "PINTA Final Call 18,0°",
      IBU: "b.d.",
    },
    {
      imgSrc:
        "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-amarcord-piga-bottle-file-for-internet-0x370-t.jpg",
      name: "PINTA & Amarcord PIGA",
      IBU: "b.d.",
    },
    {
      imgSrc:
        "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-grape-ale-red-bottle-file-for-internet-1-0x370-t.jpg",
      name: "PINTA Grape Ale Red 18,0°",
      IBU: "b.d.",
    },
    {
      imgSrc:
        "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-hazy-morning-botle-file-for-internet-0x370-t.jpg",
      name: "PINTA Hazy Morning 12,0°",
      IBU: "b.d.",
    },
  ],
};

const beersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_BEER:
      return {
        ...state,
        list: [...state.list, action.item],
      };
    case types.RESET_BEERS:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default beersReducer;
