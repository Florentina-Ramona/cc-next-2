<p>Vom analiza următoarele tipuri de request ce se apelează în aplicație:
</p>
<p>
-exemplu de request de tip GET folosind localhost:3000/api/records: acesta întoarce ca și rezultat un JSON ce conține toate elementele stocate în baza de date de tip MongoDB. Fiecare element al JSON-ului are următoarea structură: id-ul, denumirea, firma și tipul medicamentului.</p>
<p>
## JSON Data

```json  
{
    "data": [
        {
            "_id": "64500a7a3fa035e44f42ccd2",
            "denumire": "OBUTIN TABLETS 5 mg",
            "firma": "HANLIM PHARMACEUTICAL CO LTD",
            "tip": "POM"
        },
        {
            "_id": "645025343fa035e44f42ccd3",
            "denumire": "BENPINE TABLET 5 mg",
            "firma": "ATLANTIC LABORATORIES CORPN LTD",
            "tip": "POM"
        },
        {
            "_id": "64612d59bd54b6ff3948f9b8",
            "denumire": "DIAPINE TABLET 2 mg",
            "firma": "ATLANTIC LABORATORIES CORPN LTD",
            "tip": "POM"
        }
    ]
}
```
</p>
<p>
-exemplu de request de tip INSERT folosind localhost:3000//api/records?denumire=Paracetamol, 500 mg&firma=ZENTIVA&tip=PM: acesta întoarce ca și rezultat un JSON având următoarea structură:

## JSON Data

```json  
{
    "data": {
        "acknowledged": true,
        "insertedId": "6462808922449e5ecfe51ca5"
    }
}
Marcând astfel inserarea cu success a înregistrării în baza de date.
```
</p>
<p>
-exemplu de request de tip DELETE folosind localhost:3000/api/records?id=644ffd612dfc088521ac4b61: acesta întoarce ca și rezultat un JSON de următoarea structură:
<p>
## JSON Data

```json  
{
    "data": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```
</p>
Marcând astfel ștergerea cu success a înregistrării din baza de date.
</p>
<p>
MainPage.jsx:
Pagina inițială MainPage.jsx conține apelarea unui request de tip GET '/api/records' în funcția denumită MainPage(), întorcând ca și response un JSON response.json() populat cu datele culese din bd setRecords(json.data), ce se afișează în interfața aplicației prin intermediul records.map((record => (<div key={record.id}>... Se identifică înregistrarea după id-ul acesteia, fiind mai apoi afișate detalii din baza de date, precum: {record.denumire}, {record.firma}, {record.tip}.
</p>
<p>
Filter.jsx:
Pagina Filter.jsx conține apelarea unui request de tip GET '/api/records'  în funcția denumită MainPage(), întorcând ca și response un JSON response.json() populat cu datele culese din bd setRecords(json.data), dar pe care se aplică search menit să restrângă rezultatele afișate în funcție de criteriile utilizatorului. Astfel, acesta are posibilitatea de a căuta medicamente după denumirea acestora: setSearchText(event.target.value);
record.denumire.toLowerCase().includes(searchText.toLowerCase())
Se afișează în interfața aplicației prin intermediul filteredRecords.map((record)=> (<li key={record.id}>... Se identifică înregistrarea după denumirea acesteia, fiind mai apoi afișate detalii din baza de date, precum: {record.firma}, {record.tip}.
</p>
Search.jsx:
Pagina Search.jsx conține apelarea unui request de tip GET '/api/records' în funcția denumită MainPage(), întorcând ca și response un JSON response.json() populat cu datele culese din bd setRecords(json.data), dar pe care se aplică un filter menit să restrângă rezultatele afișate în funcție de criteriile utilizatorului. Astfel, acesta are posibilitatea de a căuta medicamente după tipul acestora selectat dintr-un dropdown: setFilterType(event.target.value);
setRecords(json.data.filter(record => record.tip === filterType));
Se afișează în interfața aplicației prin intermediul records.map((record => (<li key={record.id}>. Sunt afișate detalii din baza de date, precum: {record.denumire}-{record.firma}, {record.tip}.
