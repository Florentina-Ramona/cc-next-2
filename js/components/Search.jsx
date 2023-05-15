// js/components/MainPage.jsx
import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MainPage() {
    const [records, setRecords] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const filteredRecords = records.filter((record) =>
        record.denumire.toLowerCase().includes(searchText.toLowerCase())
    );



    useEffect(() => {
        try {
            fetch('/api/records', {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((json) => setRecords(json.data));
        } catch (e) {
            console.log(e);
        }
    }, []);

    const router = useRouter();

    function handleClickMain() {
        router.push('/');
    }


    return (
        <section style={{ width: '100vw', height: '100vh', backgroundColor: 'white', color: 'white' }}>
            <div className={"container px-6 py-15 mx-auto"}>
                <h1 className={"w-[500px] mx-auto text-center text-3xl font-bold text-violet-300"} >Lista tuturor medicamentelor disponibile</h1>
                <p className={"w-[1000px] mx-auto text-center mt-4 text-2xl text-violet-200"} >Posibilitatea vizionarii medicamentelor</p>
                <div className={"text-black"} style={{ fontSize: '20px', fontWeight: 'bold' }}>Denumirea medicamentului<br />
                </div>
            </div>
            <div className={"container px-3 py-1 mx-auto"}>
                <div className={"grid grid-cols-1 text-black"}>
                    <input type="text" value={searchText} onChange={handleSearchTextChange} style={{ margin: '10px', padding: '5px', fontSize: '16px', border: "1px solid black" }} />
                    <ul>
                        <div className={"text-red"} style={{ fontSize: '20px', fontWeight: 'bold' }}>Toate medicamentele disponibile: <br />
                        </div>
                        {filteredRecords.map((record) => (
                            <li key={record.id}>
                                <strong>{record.denumire}</strong> - {record.firma} - {record.tip}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button type="button"
                        onClick={handleClickMain}
                        className="mt-4 text-gray-900 bg-gradient-to-r from-blue-200 via-green-300 to-grey-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Go to Main Page</button>
                </div>
            </div>
            <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
                <img src="/medicines-supply-forms.jpg" alt="Medicines" style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            </div>
        </section>
    )
}