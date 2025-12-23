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
import DRAWDB_IMAGE from "../img/drawdb.png";
import CODIMD_IMAGE from "../img/codimd.png";

export const SELF_HOSTED_TOOLS = {
  CODEMD: {
    IMG: CODIMD_IMAGE,
    TITLE: "CodiMD@BvC",
    TEXT: "CodiMD ist ein Open-Source-Echtzeit-Kollaborations-Markdown-Editor , der es Nutzern ermöglicht, gemeinsam Dokumente zu erstellen und zu bearbeiten. Es handelt sich um die freie Softwareversion von HackMD, entwickelt vom HackMD-Team, und bietet Funktionen wie einen Markdown-Editor, PDF-Export und Unterstützung für verschiedene Markup-Syntaxen.",
    LINKSET: [
      {
        URL: "https://md.binkert-patrick.de/",
        BUTTON_TEXT: "Mark it down!",
      },
    ],
    COPYRIGHT: "© https://github.com/hackmdio/codimd",
    HINT: "",
  },
  PHPMYADMIN: {
    IMG: PHPMYADMIN_IMAGE,
    TITLE: "phpMyAdmin",
    TEXT: "phpMyAdmin ist eine webbasierte Anwendung, die die Verwaltung von MySQL- und MariaDB-Datenbanken über eine grafische Benutzeroberfläche ermöglicht.",
    LINKSET: [
      {
        URL: "https://pma.binkert-patrick.de",
        BUTTON_TEXT: "phpMyAdmin starten!",
      },
    ],
    COPYRIGHT: "© github.com/phpmyadmin/phpmyadmin",
    HINT: "Zugänge werden <strong>ausschließlich</strong> im Unterricht vergeben.",
  },
  DRAWDB: {
    IMG: DRAWDB_IMAGE,
    TITLE: "drawDB",
    TEXT: "drawDB ist ein kostenloser Online-Open-Source-Datenbankdiagrammeditor mit diversen Funktionen zur Erstellung und Visualiserung von Datenbankmodellen, inklusive Import- und Exportfunktionen zu bspw. phpMyAdmin.",
    LINKSET: [
      {
        URL: "https://db.binkert-patrick.de/",
        BUTTON_TEXT: "SELECT drawDB FROM editor;",
      },
    ],
    COPYRIGHT: "github.com/drawdb-io/drawdb",
    HINT: "",
  },
  JUPYTERHUB: {
    IMG: JUPYTERHUB_IMAGE,
    TITLE: "JupyterHub",
    TEXT: "JupyterHub ermöglicht mehreren Benutzern den gemeinsamen Zugriff auf Python-Notebooks in einer serverbasierten Umgebung. Verschiedene Kernel ermöglichen das webbasierte Programmieren, zum Beipsiel in Python, C++ oder Java.",
    LINKSET: [
      {
        URL: "https://hub.binkert-patrick.de/hub",
        BUTTON_TEXT: "JupyterHub starten!",
      },
    ],
    COPYRIGHT: "© github.com/jupyterhub/jupyterhub",
    HINT: "Eine Freischaltung des Accounts ist <strong>auf Anfrage</strong> möglich.",
  },
  STRUKTOG: {
    IMG: STRUKTOG_IMAGE,
    TITLE: "Struktog.",
    TEXT: "Struktog. ist ein Struktogramm-Editor, dabei handelt es sich um ein Tool, das die Erstellung, Bearbeitung und Visualisierung von Struktogrammen zur Darstellung von Programmabläufen und Algorithmen ermöglicht.",
    LINKSET: [
      {
        URL: "https://binkert-patrick.de/struktog",
        BUTTON_TEXT: "Struktogramm-Editor starten!",
      },
    ],
    COPYRIGHT: "© https://gitlab.com/dev-ddi",
    HINT: "",
  },
  ETHERPAD: {
    IMG: ETHERPAD_IMAGE,
    TITLE: "Etherpad",
    TEXT: "Etherpad ist ein webbasiertes Tool für die kollaborative Bearbeitung von Textdokumenten in Echtzeit.",
    LINKSET: [
      {
        URL: "https://pad.binkert-patrick.de/",
        BUTTON_TEXT: "Pad erstellen!",
      },
    ],
    COPYRIGHT: "© github.com/ether/etherpad-lite",
    HINT: "",
  },
  CHITCHATTER: {
    IMG: CHITCHATTER_IMAGE,
    TITLE: "Chitchatter",
    TEXT: "Chitchatter ist eine einfache Chat-Anwendung, die Echtzeitkommunikation zwischen Benutzern ermöglicht.",
    LINKSET: [
      {
        URL: "https://chat.binkert-patrick.de/",
        BUTTON_TEXT: "Let's chat!",
      },
    ],
    COPYRIGHT: "© github.com/jeremyckahn/chitchatter",
    HINT: "",
  },
  WIKI: {
    IMG: WIKI_IMAGE,
    TITLE: "DokuWiki",
    TEXT: "DokuWiki ist eine einfach zu bedienende, dateibasierte Wiki-Software, die sich durch ihre leichte Installation und Verwaltung sowie umfangreiche Anpassungsfähigkeit für die Dokumentation von Projekten und Wissenssammlungen auszeichnet.",
    LINKSET: [
      {
        URL: "http://wiki.binkert-patrick.de/doku.php",
        BUTTON_TEXT: "Wiki öffnen!",
      },
    ],
    COPYRIGHT: "© github.com/dokuwiki/dokuwiki",
    HINT: "Nur von <strong>registrierten Nutzern</strong> bearbeitbar.",
  },
  DEV_TOOLS: {
    IMG: DEV_TOOLS_IMAGE,
    TITLE: "DEV-Tools",
    TEXT: "Eine nützliche Kollektion aus Development- und IT-Tools.",
    LINKSET: [
      {
        URL: "https://dev.binkert-patrick.de/",
        BUTTON_TEXT: "Schau rein!",
      },
    ],
    COPYRIGHT: "© github.com/CorentinTh/it-tools",
    HINT: "",
  },
  DIGISCREEN: {
    IMG: DIGISCREEN_IMAGE,
    TITLE: "Digiscreen",
    TEXT: "Digiscreen ist eine interaktive Tafel für das Klassenzimmer und den virtuellen Klassenraum von La Digitale.",
    LINKSET: [
      {
        URL: "https://board.binkert-patrick.de/",
        BUTTON_TEXT: "Tafel starten!",
      },
    ],
    COPYRIGHT: "© codeberg.org/ladigitale/digiboard",
    HINT: "",
  },
  INSTAHUB: {
    IMG: INSTAHUB_IMAGE,
    TITLE: "InstaHub",
    TEXT: "InstaHub ist ein soziales Netzwerk, welches im Unterricht eingesetzt wird, um die Themen Datenbanken, Umgang mit sozialen Netzen und Datenschutz zu lehren.",
    LINKSET: [
      {
        // URL: "https://bvc-social.de/",
        URL: "",
        BUTTON_TEXT: "Let's be social!",
      },
    ],
    COPYRIGHT: "© github.com/wi-wissen/InstaHub",
    HINT: "Zur Zeit nicht verfügbar.",
  },
  JITSI: {
    IMG: JITSI_IMAGE,
    TITLE: "Jitsi Meet",
    TEXT: "Jitsi Meet ist eine vollständig verschlüsselte, 100 % Open-Source-Videokonferenzlösung, die Sie den ganzen Tag, jeden Tag kostenlos nutzen können – ohne dass ein Konto erforderlich ist.",
    LINKSET: [
      {
        URL: "https://jitsi.binkert-patrick.de/",
        BUTTON_TEXT: "Let's talk!",
      },
    ],
    COPYRIGHT: "© https://jitsi.org/",
    HINT: "<strong>Nutzername</strong> und <strong>Passwort</strong> sind jeweils: <code>jitsi@BvC</code>",
  },
};
