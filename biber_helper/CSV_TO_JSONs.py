import json
import csv
import hashlib
from pathlib import Path

PATH = 'H:\\PITKo\\BIBER'
IMPORT_FILENAME = 'BWINF_DATA'
IMPORT_FILETYPE = 'csv'
EXPORT_FILETYPE = 'json'

DATA_STRUCTURE_REDUCED = {}
DATA_STRUCTURE_LOGINS = {}
CLASS_LIST = []
INITIAL_ROW_SKIP = False

FILE_PATH = Path(PATH) / f"{IMPORT_FILENAME}.{IMPORT_FILETYPE}"
print("FILE PATH:", FILE_PATH.resolve(), '\n')

if not FILE_PATH.exists():
    raise FileNotFoundError(f"FILE NOT FOUND: {FILE_PATH}")
print("FILESIZE (Bytes):", FILE_PATH.stat().st_size, '\n')

with open(FILE_PATH, "rb") as fb:
    sig = fb.read(4)
print("BOM/Signatur:", sig, '\n') 

if sig.startswith(b"\xff\xfe"):
    DETECTED_ENCODING = "utf-16-le"
elif sig.startswith(b"\xfe\xff"):
    DETECTED_ENCODING = "utf-16-be"
else:
    DETECTED_ENCODING = "utf-8-sig"

print("ENCOPDING:", DETECTED_ENCODING, '\n')

with open(FILE_PATH, "r", encoding=DETECTED_ENCODING, newline="") as IMPORT_FILE:
    sample = IMPORT_FILE.read(4096)
    IMPORT_FILE.seek(0)
    try:
        dialect = csv.Sniffer().sniff(sample, delimiters=";,\t|")
        DETECTED_DELIMITER = dialect.delimiter
    except csv.Error:
        DETECTED_DELIMITER = ';'  
print("DETECTED DELIMITER:", repr(DETECTED_DELIMITER), '\n')

# first data set for the interactive dialog
with open(FILE_PATH, 'r', encoding=DETECTED_ENCODING, newline="") as IMPORT_FILE:
    reader = csv.reader(IMPORT_FILE)
    for row in reader:
        if not INITIAL_ROW_SKIP:
            print('DEBUG: ', row)
            INITIAL_ROW_SKIP = True
            continue

        splitted_row = row[0].split(';')
        classname = splitted_row[0].strip()

        if classname not in DATA_STRUCTURE_REDUCED:
            DATA_STRUCTURE_REDUCED[classname] = []
            CLASS_LIST.append(classname)

        print(splitted_row)
        hashedPassword = hashlib.sha256(splitted_row[9].strip().encode('utf-8'))  
        hashedPasswordHexadecimal = hashedPassword.hexdigest()

        student_object = {
            'PRENAME' : splitted_row[2].strip(),
            'LASTNAME' : splitted_row[3].strip(),
            'USERNAME' : splitted_row[4].strip(),
            # 'PASSWORD' : splitted_row[5].strip(),
            # 'EXTRA_TIME' : splitted_row[6].strip(),
            # 'GESCHLECHT' : splitted_row[7].strip(),
            # 'SCHNUPPER_BIBER' : splitted_row[8].strip(),
            'DATE_OF_BIRTH' : hashedPasswordHexadecimal,
            # 'DATE_OF_BIRTH_DAY' : splitted_row[9].split('.')[0].strip(),
            # 'DATE_OF_BIRTH_MONTH' : splitted_row[9].split('.')[1].strip(),
            # 'DATE_OF_BIRTH_YEAR' : splitted_row[9].split('.')[2].strip()
        }

        DATA_STRUCTURE_LOGINS[splitted_row[4].strip()+hashedPasswordHexadecimal] = splitted_row[5].strip()
        DATA_STRUCTURE_REDUCED[classname].append(student_object)

with open(PATH + '\\' + IMPORT_FILENAME + '.' + EXPORT_FILETYPE, 'w', encoding='utf-8-sig') as EXPORT_FILE:
    json.dump(DATA_STRUCTURE_REDUCED, EXPORT_FILE, ensure_ascii = False, indent = 4)

with open(PATH + '\\' + IMPORT_FILENAME + '_CONCRETE_LOGINS.' + EXPORT_FILETYPE, 'w', encoding='utf-8-sig') as EXPORT_FILE:
    json.dump(DATA_STRUCTURE_LOGINS, EXPORT_FILE, ensure_ascii = False, indent = 4)

with open(PATH + '\\' + IMPORT_FILENAME + '_CLASS_LIST.' + EXPORT_FILETYPE, 'w', encoding='utf-8-sig') as EXPORT_FILE:
    json.dump(CLASS_LIST, EXPORT_FILE, ensure_ascii = False, indent = 4)

print('Done.')