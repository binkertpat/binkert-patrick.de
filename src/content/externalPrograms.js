import { TAG_TYPES } from "../constants/tagTypes";
import FLACI_IMAGE from "../img/flaci.png";

export const EXTERNAL_PROGRAMS = {
  FLACI: {
    IMG: FLACI_IMAGE,
    TITLE: "FLACI",
    TEXT: "Formale Sprachen, abstrakte Automaten, Compiler und Interpreter.",
    LINK: "https://flaci.com/home/",
    BUTTON_TEXT: "[a-z]{1,10}@{2,10}\\.de",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "formale_sprachen",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "regulaere_ausdruecke",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "compiler",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "automaten",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "interpreten",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "NEA",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "DEA",
      }
    ],
    COPYRIGHT: "",
    HINT: "",
  }
};