import VSCODE_IMAGE from "../img/code.png";
import T1P_IMAGE from "../img/urlshort.png";
import WEBNETSIM__IMAGE from "../img/webnetsim.png";
import ONLINE_PYTHON_IMAGE from "../img/online_python.png";
import EXALIDRAW_IMAGE from "../img/excalidraw.png";
import LOGIGATOR_IMAGE from "../img/logigator.png";
import FLACI_IMAGE from "../img/flaci.png";
import FLINGA_IMAGE from "../img/flinga.png";
import DEBUGGEX_IMAGE from "../img/debuggex.png";
import MERMAID_IMAGE from "../img/mermaid.png";
import REGEX101_IMAGE from "../img/regex101.png";
import REGEXPER_IMAGE from "../img/regexper.png";
import TODIAGRAM_IMAGE from "../img/todiagram.png";
import { TAG_TYPES } from "../constants/tagTypes";

export const EXTERNAL_TOOLS = {
  T1P: {
    IMG: T1P_IMAGE,
    TITLE: "t1p",
    TEXT: "URL-Shortener",
    LINK: "https://t1p.de/",
    BUTTON_TEXT: "Link kürzen!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "usability",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "shortener",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "link",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "url",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "usability",
      },
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  WEBNETSIM: {
    IMG: WEBNETSIM__IMAGE,
    TITLE: "WebNetSim",
    TEXT: "Eine kollaborative Simulationsumgebung zum Erstellen eines eigenen Netzwerks mit Routern, Computern und Servern.",
    LINK: "https://webnetsim.de/",
    BUTTON_TEXT: "Sim a Network!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "network",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "router",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "provider",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "isp",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "client",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "server",
      },
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  VSCODE: {
    IMG: VSCODE_IMAGE,
    TITLE: "VS-Code online",
    TEXT: "Webbasierter Visual Studio Code Editor",
    LINK: "https://vscode.dev",
    BUTTON_TEXT: "Start coding!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "ide",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "vscode",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "programmierung",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "coding",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "editor",
      },
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  PYTHON_ONLINE: {
    IMG: ONLINE_PYTHON_IMAGE,
    TITLE: "ONLINE PYTHON",
    TEXT: "Webbasierte Python IDE",
    LINK: "https://www.online-python.com/",
    BUTTON_TEXT: "print('Hello world!')",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "ide",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "python",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "programmierung",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "coding",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "editor",
      },
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  EXALIDRAW: {
    IMG: EXALIDRAW_IMAGE,
    TITLE: "Excalidraw",
    TEXT: "Online Whiteboard für kollaborative Zusammenarbeit",
    LINK: "https://excalidraw.com/",
    BUTTON_TEXT: "Let's draw!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "whiteboard",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "kollaboration",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "kooperation",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "echtzeit",
      }
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  
  LOGIGATOR: {
    IMG: LOGIGATOR_IMAGE,
    TITLE: "LOGIGATOR",
    TEXT: "Baue, simuliere und verwalte komplexe Logikschaltungen.",
    LINK: "https://logigator.com/editor/",
    BUTTON_TEXT: "1 + 1 = 10!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "simulation",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "logik",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "gatter",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "AND",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "OR",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "XOR",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "NAND",
      }
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  TODIAGRAM: {
    IMG: TODIAGRAM_IMAGE,
    TITLE: "ToDiagram",
    TEXT: "ToDiagram stellt JSON, CSV, YAML und XML-Dateien mit Hilfe interaktiver Diagramme dar.",
    LINK: "https://todiagram.com/editor",
    BUTTON_TEXT: "Starten!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "datentypen",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "datenstrukturen",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "json",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "xml",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "csv",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "yaml",
      }
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  MERMAID: {
    IMG: MERMAID_IMAGE,
    TITLE: "Mermaid",
    TEXT: "Mermaid ist ein JavaScript-basiertes Diagrammerstellungstool, das Markdown-inspirierte Textdefinitionen und einen Renderer zum Erstellen und Bearbeiten komplexer Diagramme verwendet.",
    LINK: "https://mermaid.live/edit",
    BUTTON_TEXT: "Starten!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "diagramme",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "flowchart",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "sequence",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "class",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "state",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "entityrelationship",
      }
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  REGEXPER: {
    IMG: REGEXPER_IMAGE,
    TITLE: "REGEXPER",
    TEXT: "Visualisierung von regulären Ausdrücken.",
    LINK: "https://regexper.com/",
    BUTTON_TEXT: "Starten!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "regex",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "regulaereAusdruecke",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "visualisierung",
      }
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  DEBUGGEX: {
    IMG: DEBUGGEX_IMAGE,
    TITLE: "Debuggex",
    TEXT: "Visualisierung, Testen und Debuggen von regulären Ausdrücken.",
    LINK: "https://www.debuggex.com/",
    BUTTON_TEXT: "Starten!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "regex",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "regulaereAusdruecke",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "visualisierung",
      }
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  REGEX101: {
    IMG: REGEX101_IMAGE,
    TITLE: "regular expressions 101",
    TEXT: "Visualisierung, Testen und Debuggen von regulären Ausdrücken, inklusive Genereriung von Code-Snippets in verschiedenen Programmiersprachen.",
    LINK: "Starten!",
    BUTTON_TEXT: "L",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "regex",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "regulaereAusdruecke",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "visualisierung",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "codeSnippets",
      }
    ],
    COPYRIGHT: "",
    HINT: "",
  },
  FLINGA: {
    IMG: FLINGA_IMAGE,
    TITLE: "FLINGA",
    TEXT: "Kollaborative Zusammenarbeit und Feedback in Echtzeit.",
    LINK: "https://flinga.fi/tools",
    BUTTON_TEXT: "Starten!",
    TAGS: [
      {
        TYPE: TAG_TYPES.EXTERN,
        VALUE: "extern",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "whiteboard",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "kollaboration",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "kooperation",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "feedback",
      }
    ],
    COPYRIGHT: "",
    HINT: "",
  }
};

export const EXTERNAL_PROGRAMMS_COLLECTION = {
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