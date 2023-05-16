Vom analiza următoarele tipuri de request ce se apelează în aplicație:
-exemplu de request de tip GET folosind localhost:3000/api/records: acesta întoarce ca și rezultat un JSON ce conține toate elementele stocate în baza de date de tip MongoDB. Fiecare element al JSON-ului are următoarea structură: id-ul, denumirea, firma și tipul medicamentului.
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
-exemplu de request de tip INSERT folosind localhost:3000//api/records?denumire=Paracetamol, 500 mg&firma=ZENTIVA&tip=PM: acesta întoarce ca și rezultat un JSON având următoarea structură: {
    "data": {
        "acknowledged": true,
        "insertedId": "6462808922449e5ecfe51ca5"
    }
}
Marcând astfel inserarea cu success a înregistrării în baza de date.
-exemplu de request de tip DELETE folosind localhost:3000/api/records?id=644ffd612dfc088521ac4b61: acesta întoarce ca și rezultat un JSON de următoarea structură:
{
    "data": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
Marcând astfel ștergerea cu success a înregistrării din baza de date.
MainPage.jsx:
Pagina inițială MainPage.jsx conține apelarea unui request de tip GET '/api/records' în funcția denumită MainPage(), întorcând ca și response un JSON response.json() populat cu datele culese din bd setRecords(json.data), ce se afișează în interfața aplicației prin intermediul records.map((record => (<div key={record._id}>... Se identifică înregistrarea după id-ul acesteia, fiind mai apoi afișate detalii din baza de date, precum: {record.denumire}, {record.firma}, {record.tip}.
Filter.jsx:
Pagina Filter.jsx conține apelarea unui request de tip GET '/api/records'  în funcția denumită MainPage(), întorcând ca și response un JSON response.json() populat cu datele culese din bd setRecords(json.data), dar pe care se aplică search menit să restrângă rezultatele afișate în funcție de criteriile utilizatorului. Astfel, acesta are posibilitatea de a căuta medicamente după denumirea acestora: setSearchText(event.target.value);
record.denumire.toLowerCase().includes(searchText.toLowerCase())
Se afișează în interfața aplicației prin intermediul filteredRecords.map((record)=> (<li key={record.id}>... Se identifică înregistrarea după denumirea acesteia, fiind mai apoi afișate detalii din baza de date, precum: {record.firma}, {record.tip}.
Search.jsx:
Pagina Search.jsx conține apelarea unui request de tip GET '/api/records' în funcția denumită MainPage(), întorcând ca și response un JSON response.json() populat cu datele culese din bd setRecords(json.data), dar pe care se aplică un filter menit să restrângă rezultatele afișate în funcție de criteriile utilizatorului. Astfel, acesta are posibilitatea de a căuta medicamente după tipul acestora selectat dintr-un dropdown: setFilterType(event.target.value);
setRecords(json.data.filter(record => record.tip === filterType));
Se afișează în interfața aplicației prin intermediul records.map((record => (<li key={record.id}>. Sunt afișate detalii din baza de date, precum: {record.denumire}
-	{record.firma}, {record.tip}.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
