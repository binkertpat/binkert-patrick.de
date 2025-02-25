import INSTAHUB_IMAGE from "../img/instahub.png";
import PHPMYADMIN_IMAGE from "../img/phpmyadmin.png";
import JUPYTERHUB_IMAGE from "../img/jupyter_logo.png";
import STRUKTOG_IMAGE from "../img/struktog.png";
import ETHERPAD_IMAGE from "../img/etherpad.png";
import CHITCHATTER_IMAGE from "../img/chitchatter.png";
import WIKI_IMAGE from "../img/dokuwiki.png";
import DEV_TOOLS_IMAGE from "../img/dev_tools.png";
import DIGISCREEN_IMAGE from "../img/digiscreen.png";
import JITSI_IMAGE from "../img/jitsi.png";
import { TAG_TYPES } from "../constants/tagTypes";

export const SELF_HOSTED_TOOLS = {
  INSTAHUB: {
    IMG: INSTAHUB_IMAGE,
    TITLE: "InstaHub",
    TEXT: "InstaHub ist ein soziales Netzwerk, welches im Unterricht eingesetzt wird, um die Themen Datenbanken, Umgang mit sozialen Netzen und Datenschutz zu lehren.",
    LINK: "https://bvc-social.de/",
    BUTTON_TEXT: "Let's be social!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "informatik",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "database",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "mysql",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "mariadb",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "socialnetwork",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "instahub",
      },
      {
        TYPE: TAG_TYPES.ELSE,
        VALUE: "webbased",
      },
    ],
    COPYRIGHT: "© github.com/wi-wissen/InstaHub",
    HINT: "Eine Freischaltung erfolgt <strong>ausschließlich</strong> im Unterricht.",
  },
  PHPMYADMIN: {
    IMG: PHPMYADMIN_IMAGE,
    TITLE: "phpMyAdmin",
    TEXT: "phpMyAdmin ist eine webbasierte Anwendung, die die Verwaltung von MySQL- und MariaDB-Datenbanken über eine grafische Benutzeroberfläche ermöglicht.",
    LINK: "https://pma.binkert-patrick.de",
    BUTTON_TEXT: "phpMyAdmin starten!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "informatik",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "database",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "dbms",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "mysql",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "mariadb",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "erm",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "rm",
      },
      {
        TYPE: TAG_TYPES.ELSE,
        VALUE: "webbased",
      },
    ],
    COPYRIGHT: "© github.com/phpmyadmin/phpmyadmin",
    HINT: "Zugänge werden <strong>ausschließlich</strong> im Unterricht vergeben.",
  },
  JUPYTERHUB: {
    IMG: JUPYTERHUB_IMAGE,
    TITLE: "JupyterHub",
    TEXT: "JupyterHub ermöglicht mehreren Benutzern den gemeinsamen Zugriff auf Python-Notebooks in einer serverbasierten Umgebung. Verschiedene Kernel ermöglichen das webbasierte Programmieren, zum Beipsiel in Python, C++ oder Java.",
    LINK: "https://hub.binkert-patrick.de/hub",
    BUTTON_TEXT: "JupyterHub starten!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "informatik",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "programmierung",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "python",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "java",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "c++",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "coding",
      },
      {
        TYPE: TAG_TYPES.ELSE,
        VALUE: "webbased",
      },
    ],
    COPYRIGHT: "© github.com/jupyterhub/jupyterhub",
    HINT: "Eine Freischaltung des Accounts ist <strong>auf Anfrage</strong> möglich.",
  },
  STRUKTOG: {
    IMG: STRUKTOG_IMAGE,
    TITLE: "Struktog.",
    TEXT: "Struktog. ist ein Struktogramm-Editor, dabei handelt es sich um ein Tool, das die Erstellung, Bearbeitung und Visualisierung von Struktogrammen zur Darstellung von Programmabläufen und Algorithmen ermöglicht.",
    LINK: "https://binkert-patrick.de/struktog",
    BUTTON_TEXT: "Struktogramm-Editor starten!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "informatik",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "struktogramm",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "modellierung",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "programmierung",
      },
      {
        TYPE: TAG_TYPES.ELSE,
        VALUE: "webbased",
      },
    ],
    COPYRIGHT: "© github.com/openpatch/struktog",
    HINT: "",
  },
  ETHERPAD: {
    IMG: ETHERPAD_IMAGE,
    TITLE: "Etherpad",
    TEXT: "Etherpad ist ein webbasiertes Tool für die kollaborative Bearbeitung von Textdokumenten in Echtzeit.",
    LINK: "https://pad.binkert-patrick.de/",
    BUTTON_TEXT: "Pad erstellen!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
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
      },
      {
        TYPE: TAG_TYPES.ELSE,
        VALUE: "webbased",
      },
    ],
    COPYRIGHT: "© github.com/ether/etherpad-lite",
    HINT: "",
  },
  CHITCHATTER: {
    IMG: CHITCHATTER_IMAGE,
    TITLE: "Chitchatter",
    TEXT: "Chitchatter ist eine einfache Chat-Anwendung, die Echtzeitkommunikation zwischen Benutzern ermöglicht.",
    LINK: "https://chat.binkert-patrick.de/",
    BUTTON_TEXT: "Let's chat!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "kommunikation",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "kooperation",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "chat",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "echtzeit",
      },
      {
        TYPE: TAG_TYPES.ELSE,
        VALUE: "webbased",
      },
    ],
    COPYRIGHT: "© github.com/jeremyckahn/chitchatter",
    HINT: "",
  },
  WIKI: {
    IMG: WIKI_IMAGE,
    TITLE: "DokuWiki",
    TEXT: "DokuWiki ist eine einfach zu bedienende, dateibasierte Wiki-Software, die sich durch ihre leichte Installation und Verwaltung sowie umfangreiche Anpassungsfähigkeit für die Dokumentation von Projekten und Wissenssammlungen auszeichnet.",
    LINK: "http://wiki.binkert-patrick.de/doku.php",
    BUTTON_TEXT: "Wiki öffnen!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
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
        VALUE: "wiki",
      },
    ],
    COPYRIGHT: "© github.com/dokuwiki/dokuwiki",
    HINT: "Nur von <strong>registrierten Nutzern</strong> bearbeitbar.",
  },
  
  DEV_TOOLS: {
    IMG: DEV_TOOLS_IMAGE,
    TITLE: "DEV-Tools",
    TEXT: "Eine nützliche Kollektion aus Development- und IT-Tools.",
    LINK: "https://dev.binkert-patrick.de/",
    BUTTON_TEXT: "Schau rein!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "utilities",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "devtools",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "crypthography",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "converter",
      },
      {
        TYPE: TAG_TYPES.IT,
        VALUE: "generators",
      },
    ],
    COPYRIGHT: "© github.com/CorentinTh/it-tools",
    HINT: "",
  },
  DIGISCREEN: {
    IMG: DIGISCREEN_IMAGE,
    TITLE: "Digiscreen",
    TEXT: "Digiscreen ist eine interaktive Tafel für das Klassenzimmer und den virtuellen Klassenraum von La Digitale.",
    LINK: "https://board.binkert-patrick.de/",
    BUTTON_TEXT: "Tafel starten!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "interactive",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "whiteboard",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "classroom",
      },
    ],
    COPYRIGHT: "© codeberg.org/ladigitale/digiboard",
    HINT: "",
  },
  JITSI: {
    IMG: JITSI_IMAGE,
    TITLE: "Jitsi Meet",
    TEXT: "Jitsi Meet ist eine vollständig verschlüsselte, 100 % Open-Source-Videokonferenzlösung, die Sie den ganzen Tag, jeden Tag kostenlos nutzen können – ohne dass ein Konto erforderlich ist.",
    LINK: "https://jitsi.binkert-patrick.de/",
    BUTTON_TEXT: "Let's talk!",
    TAGS: [
      {
        TYPE: TAG_TYPES.SELFHOSTED,
        VALUE: "selfhosted",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "conference",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "videoconference",
      },
      {
        TYPE: TAG_TYPES.EDU,
        VALUE: "screensharing",
      },
    ],
    COPYRIGHT: "© https://jitsi.org/",
    HINT: "<strong>Nutzername</strong> und <strong>Passwort</strong> sind jeweils: <code>jitsi@BvC</code>",
  },
};