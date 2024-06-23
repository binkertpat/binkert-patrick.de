import INSTAHUB_IMAGE from '../img/instahub.png'
import PHPMYADMIN_IMAGE from '../img/phpmyadmin.png'
import JUPYTERHUB_IMAGE from '../img/jupyter_logo.png'
import STRUKTOG_IMAGE from '../img/struktog.png'
import ETHERPAD_IMAGE from '../img/etherpad.png'
import CHITCHATTER_IMAGE from '../img/chitchatter.jpg'
import WIKI_IMAGE from '../img/dokuwiki.png'
import VSCODE_IMAGE from '../img/code.png'
import DEV_TOOLS_IMAGE from '../img/dev_tools.png'
import DIGISCREEN_IMAGE from '../img/digiscreen.png'
import T1P_IMAGE from '../img/urlshort.png'
import WEBNETSIM__IMAGE from '../img/webnetsim.png'

const TAGS_TYPE = {
    SELFHOSTED: 'text-bg-success',
    EXTERN: 'text-bg-danger',
    IT: 'text-bg-warning',
    EDU: 'text-bg-primary',
    STEM: 'text-bg-info',
    ELSE: 'text-bg-secondary'
}

export const SERVER_TOOLS_COLLECTION = {
    INSTAHUB: {
        IMG: INSTAHUB_IMAGE,
        TITLE: 'InstaHub',
        TEXT: 'InstaHub ist ein soziales Netzwerk, welches im Unterricht eingesetzt wird, um die Themen Datenbanken, Umgang mit sozialen Netzen und Datenschutz zu lehren.',
        LINK: 'https://bvc-social.de/',
        BUTTON_TEXT: 'Let\'s be social!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'informatik'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'database'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'mysql'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'mariadb'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'socialnetwork'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'instahub'
            },
            {
                TYPE: TAGS_TYPE.ELSE,
                VALUE: 'webbased'
            }
        ],
        COPYRIGHT: '© github.com/wi-wissen/InstaHub',
        HINT: 'Eine Freischaltung erfolgt <strong>ausschließlich</strong> im Unterricht.'
    },
    PHPMYADMIN: {
        IMG: PHPMYADMIN_IMAGE,
        TITLE: 'phpMyAdmin',
        TEXT: 'phpMyAdmin ist eine webbasierte Anwendung, die die Verwaltung von MySQL- und MariaDB-Datenbanken über eine grafische Benutzeroberfläche ermöglicht.',
        LINK: 'https://binkert-patrick.de/phpmyadmin/',
        BUTTON_TEXT: 'phpMyAdmin starten!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'informatik'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'database'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'dbms'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'mysql'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'mariadb'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'erm'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'rm'
            },
            {
                TYPE: TAGS_TYPE.ELSE,
                VALUE: 'webbased'
            }
        ],
        COPYRIGHT: '© github.com/phpmyadmin/phpmyadmin',
        HINT: 'Zugänge werden <strong>ausschließlich</strong> im Unterricht vergeben.'
    },
    JUPYTERHUB: {
        IMG: JUPYTERHUB_IMAGE,
        TITLE: 'JupyterHub',
        TEXT: 'JupyterHub ermöglicht mehreren Benutzern den gemeinsamen Zugriff auf Python-Notebooks in einer serverbasierten Umgebung. Verschiedene Kernel ermöglichen das webbasierte Programmieren, zum Beipsiel in Python, C++ oder Java.',
        LINK: 'https://hub.binkert-patrick.de/hub',
        BUTTON_TEXT: 'JupyterHub starten!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'informatik'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'programmierung'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'python'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'java'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'c++'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'coding'
            },
            {
                TYPE: TAGS_TYPE.ELSE,
                VALUE: 'webbased'
            }
        ],
        COPYRIGHT: '© github.com/jupyterhub/jupyterhub',
        HINT: 'Eine Freischaltung des Accounts ist <strong>auf Anfrage</strong> möglich.'
    },
    STRUKTOG: {
        IMG: STRUKTOG_IMAGE,
        TITLE: 'Struktog.',
        TEXT: 'Struktog. ist ein Struktogramm-Editor, dabei handelt es sich um ein Tool, das die Erstellung, Bearbeitung und Visualisierung von Struktogrammen zur Darstellung von Programmabläufen und Algorithmen ermöglicht.',
        LINK: 'https://www.binkert-patrick.de/struktog',
        BUTTON_TEXT: 'Struktogramm-Editor starten!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'informatik'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'struktogramm'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'modellierung'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'programmierung'
            },
            {
                TYPE: TAGS_TYPE.ELSE,
                VALUE: 'webbased'
            }
        ],
        COPYRIGHT: '© github.com/openpatch/struktog',
        HINT: ''
    },
    ETHERPAD: {
        IMG: ETHERPAD_IMAGE,
        TITLE: 'Etherpad',
        TEXT: 'Etherpad ist ein webbasiertes Tool für die kollaborative Bearbeitung von Textdokumenten in Echtzeit.',
        LINK: 'https://pad.binkert-patrick.de/',
        BUTTON_TEXT: 'Pad erstellen!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'kollaboration'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'kooperation'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'echtzeit'
            },
            {
                TYPE: TAGS_TYPE.ELSE,
                VALUE: 'webbased'
            }
        ],
        COPYRIGHT: '© github.com/ether/etherpad-lite',
        HINT: ''
    },
    CHITCHATTER: {
        IMG: CHITCHATTER_IMAGE,
        TITLE: 'Chitchatter',
        TEXT: 'Chitchatter ist eine einfache Chat-Anwendung, die Echtzeitkommunikation zwischen Benutzern ermöglicht.',
        LINK: 'https://www.chat.binkert-patrick.de/',
        BUTTON_TEXT: 'Let\'s chat!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'kommunikation'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'kooperation'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'chat'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'echtzeit'
            },
            {
                TYPE: TAGS_TYPE.ELSE,
                VALUE: 'webbased'
            }
        ],
        COPYRIGHT: '© github.com/jeremyckahn/chitchatter',
        HINT: ''
    },
    WIKI: {
        IMG: WIKI_IMAGE,
        TITLE: 'DokuWiki',
        TEXT: 'DokuWiki ist eine einfach zu bedienende, dateibasierte Wiki-Software, die sich durch ihre leichte Installation und Verwaltung sowie umfangreiche Anpassungsfähigkeit für die Dokumentation von Projekten und Wissenssammlungen auszeichnet.',
        LINK: 'http://wiki.binkert-patrick.de/doku.php',
        BUTTON_TEXT: 'Wiki öffnen!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'kollaboration'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'kooperation'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'wiki'
            } 
        ],
        COPYRIGHT: '© github.com/dokuwiki/dokuwiki',
        HINT: 'Nur von <strong>registrierten Nutzern</strong> bearbeitbar.'
    },
    VSCODE: {
        IMG: VSCODE_IMAGE,
        TITLE: 'VS-Code-Server',
        TEXT: 'Webbasierter Visual Studio Code Editor.',
        LINK: 'https://code.binkert-patrick.de/?folder=/home/vscode/PROGRAMMIERUNG',
        BUTTON_TEXT: 'Start coding!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'ide'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'vscode'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'programmierung'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'coding'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'editor'
            } 
        ],
        COPYRIGHT: '© github.com/coder/code-server',
        HINT: 'Das Passwort wird <strong>auf Anfrage</strong> herausgegeben.'
    },
    DEV_TOOLS: {
        IMG: DEV_TOOLS_IMAGE,
        TITLE: 'DEV-Tools',
        TEXT: 'Eine nützliche Kollektion aus Development- und IT-Tools.',
        LINK: 'https://dev.binkert-patrick.de/',
        BUTTON_TEXT: 'Schau rein!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'utilities'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'devtools'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'crypthography'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'converter'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'generators'
            } 
        ],
        COPYRIGHT: '© github.com/CorentinTh/it-tools',
        HINT: ''
    },
    DIGISCREEN: {
        IMG: DIGISCREEN_IMAGE,
        TITLE: 'Digiscreen',
        TEXT: 'Digiscreen ist eine interaktive Tafel für das Klassenzimmer und den virtuellen Klassenraum von La Digitale.',
        LINK: 'https://board.binkert-patrick.de/',
        BUTTON_TEXT: 'Tafel starten!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.SELFHOSTED,
                VALUE: 'selfhosted'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'interactive'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'whiteboard'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'classroom'
            } 
        ],
        COPYRIGHT: '© codeberg.org/ladigitale/digiboard',
        HINT: ''
    }          
}


export const EXTERNAL_TOOLS_COLLECTION = {
    T1P: {
        IMG: T1P_IMAGE,
        TITLE: 't1p',
        TEXT: 'URL-Shortener',
        LINK: 'https://t1p.de/',
        BUTTON_TEXT: 'Link kürzen!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.EXTERN,
                VALUE: 'extern'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'usability'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'shortener'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'link'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'url'
            },
            {
                TYPE: TAGS_TYPE.EDU,
                VALUE: 'usability'
            }
        ],
        COPYRIGHT: '',
        HINT: ''
    },
    WEBNETSIM: {
        IMG: WEBNETSIM__IMAGE,
        TITLE: 'WebNetSim',
        TEXT: 'Eine kollaborative Simulationsumgebung zum Erstellen eines eigenen Netzwerks mit Routern, Computern und Servern.',
        LINK: 'https://webnetsim.de/',
        BUTTON_TEXT: 'Sim a Network!',
        TAGS: [
            {
                TYPE: TAGS_TYPE.EXTERN,
                VALUE: 'extern'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'network'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'router'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'provider'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'isp'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'client'
            },
            {
                TYPE: TAGS_TYPE.IT,
                VALUE: 'server'
            }
        ],
        COPYRIGHT: '',
        HINT: ''
    }
}