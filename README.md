<h2>
    1.	Introducere
</h2>
<p>
    Medicamentele contribuie enorm la îmbunătățirea sănătății unui popor, la reducerea necesității executării unor operații cât și a timpului petrecut în spitale. Observăm cum datorită tututor tratamentelor dezvoltate, speranța de viață a crescut cu până la 30 de ani față de secolul trecut. Este de precizat scăderea semnificativă a deceselor în rândul bolnavilor de HIV și cancer.
Așadar, dorești să vizualizezi medicamentele disponibile? Ei bine, această aplicație web aduce farmacia mai aproape de tine la doar câteva click-uri distanță din confortul tău propriu!
</p>
<h2>
2.	Descriere problemă
</h2>
<p>
    Această aplicație a fost concepută în ideea în care la ora actuală este necesară deplasarea fizică la sediul farmaciilor pentru a verifica stocul acestora pentru anumite medicamente, cauzând astfel disconfort oamenilor care doresc să intre în posesia medicamentelor în mod cât mai facil.
Astfel, această aplicație care rulează pe link-ul: https://cc-next-2-f0w4dt54h-florentina-ramona.vercel.app/ oferă utilizatorilor ei o experiență iî ton cu noul val informatic.
</p>
<h2>
3.	Descriere API
</h2>
<p>
    În cadrul aplicației apelăm două API-uri, și anume în cazul conectării la baza de date din Cloud MongoDB, cât și în cazul utilizării Vercel pentru a publica aplicația.
Astfel, API-ul MongoDB Atlas este un set de servicii care permite utilizatorilor să creeze, configureze și utilize cu ușurință instanțe de baze de date în cadrul clusterelor MongoDB Atlas in cloud. Permite, de asemenea, crearea, modificarea, interogarea și șteargerea bazelor de date și a colecțiilor în cadrul clusterului. API-ul MongoDB Atlas utilizează autentificarea bazată pe chei pentru a permite accesul securizat la resursele bazei de date.
API-ul Vercel este o interfață programatică care permite utilizatorilor să interacționeze cu această platformă pentru gestionarea și automatizarea diferitelor aspecte ale aplicațiilor web și a infrastructurii de hosting. Oferă control și flexibilitate pentru a construi și gestiona aplicații web și servicii. Aceasta include crearea și ștergerea de proiecte, configurarea setărilor proiectului, gestionarea ramurilor (branches), verificarea și modificarea stării proiectelor. Utilizatorii pot adăuga sau șterge colaboratori, pot atribui permisiuni specifice pentru fiecare colaborator și pot gestiona accesul la proiecte.
</p>
<h2>
4.  Flux de Date
</h2>
<p>Vom analiza următoarele tipuri de request ce se apelează în aplicație:
</p>
<p>
-exemplu de request de tip GET folosind localhost:3000/api/records: acesta întoarce ca și rezultat un JSON ce conține toate elementele stocate în baza de date de tip MongoDB. Fiecare element al JSON-ului are următoarea structură: id-ul, denumirea, firma și tipul medicamentului.</p>
</p>
    
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
<p>
-exemplu de request de tip INSERT folosind localhost:3000//api/records?denumire=Paracetamol, 500 mg&firma=ZENTIVA&tip=PM: acesta întoarce ca și rezultat un JSON având următoarea structură:
</p>
    
## JSON Data

```json  
{
    "data": {
        "acknowledged": true,
        "insertedId": "6462808922449e5ecfe51ca5"
    }
}
```
Marcând astfel inserarea cu success a înregistrării în baza de date.
<p>
-exemplu de request de tip DELETE folosind localhost:3000/api/records?id=644ffd612dfc088521ac4b61: acesta întoarce ca și rezultat un JSON de următoarea structură:
</p>
    
## JSON Data

```json  
{
    "data": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```
Marcând astfel ștergerea cu success a înregistrării din baza de date.
<p>
MainPage.jsx:
Pagina inițială MainPage.jsx conține apelarea unui request de tip GET '/api/records' în funcția denumită MainPage(), întorcând ca și response un JSON response.json() populat cu datele culese din bd setRecords(json.data), ce se afișează în interfața aplicației prin intermediul records.map((record =>(key={record.id}... Se identifică înregistrarea după id-ul acesteia, fiind mai apoi afișate detalii din baza de date, precum: {record.denumire}, {record.firma}, {record.tip}.
</p>
<p>
Filter.jsx:
Pagina Filter.jsx conține apelarea unui request de tip GET '/api/records'  în funcția denumită MainPage(), întorcând ca și response un JSON response.json() populat cu datele culese din bd setRecords(json.data), dar pe care se aplică search menit să restrângă rezultatele afișate în funcție de criteriile utilizatorului. Astfel, acesta are posibilitatea de a căuta medicamente după denumirea acestora: setSearchText(event.target.value);
record.denumire.toLowerCase().includes(searchText.toLowerCase())
Se afișează în interfața aplicației prin intermediul filteredRecords.map((record)=>(key={record.id}... Se identifică înregistrarea după denumirea acesteia, fiind mai apoi afișate detalii din baza de date, precum: {record.firma}, {record.tip}.
</p>
<p>
Search.jsx:
Pagina Search.jsx conține apelarea unui request de tip GET '/api/records' în funcția denumită MainPage(), întorcând ca și response un JSON response.json() populat cu datele culese din bd setRecords(json.data), dar pe care se aplică un filter menit să restrângă rezultatele afișate în funcție de criteriile utilizatorului. Astfel, acesta are posibilitatea de a căuta medicamente după tipul acestora selectat dintr-un dropdown: setFilterType(event.target.value);
setRecords(json.data.filter(record => record.tip === filterType));
Se afișează în interfața aplicației prin intermediul records.map((record =>(key={record.id}. Sunt afișate detalii din baza de date, precum: {record.denumire}-{record.firma}, {record.tip}.
</p>
