// js/components/MainPage.jsx
import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try {
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (e) {
			console.log(e);
		}
	}, []);

	const router=useRouter();

	function handleClickSearch(){
		router.push('/search');
	}

	function handleClickFilter(){
		router.push('/filter');
	}

	function handleClickInsert(){
		router.push('/insert');
	}


	const deleteRecord = async (e) => {
		e.preventDefault();

		console.log(e.target.id);
		const id = e.target.id;

		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (e) {
			console.log(e);
		}
	}

	console.log(records);

	return (
		<section style={{ width: '100vw', height: '200vh', backgroundColor: 'white', color: 'white' }}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-3xl font-bold text-blue-400"}>Lista tuturor medicamentelor disponibile</h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-2xl text-blue-300"}>Gaseste aici medicamentul pe care il cauti!</p>

				<div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"}>
					{
						records.map(record => (
							<div key={record._id}
								className={"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow "}
							>
								<h3 className={"mb-2 text-2xl font-bold text-red-500"}>{record.denumire}</h3>
								<p className={"font-normal text-black"}>{record.firma}</p>
								<p className={"font-normal text-black"}>{record.tip}</p>
								<div style={{ width: '10vw', height: '10vh', display: 'flex' }}>
									<img src="/Medicines_share.jpg" alt="Medicines" style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
								</div>
								<button type="button"
									onClick={deleteRecord}
									id={record._id}
									className="mt-4 text-gray-900 bg-gradient-to-r from-blue-200 via-green-300 to-grey-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
									Stergere
								</button>

							</div>

						))
					}
				</div>
				<div>
				<button type="button" 
				onClick={handleClickSearch}
				 className="mt-4 text-gray-900 bg-gradient-to-r from-blue-200 via-green-300 to-grey-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					Go to Search Page</button>
				</div>
				<div>
				<button type="button" 
				onClick={handleClickFilter}
				 className="mt-4 text-gray-900 bg-gradient-to-r from-blue-200 via-green-300 to-grey-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					Go to Filter Page</button>
				</div>
				<div>
				<button type="button" 
				onClick={handleClickInsert}
				 className="mt-4 text-gray-900 bg-gradient-to-r from-blue-200 via-green-300 to-grey-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					Go to Insert Page</button>
				</div>
				<div>
				</div>
			</div>
		</section>
	)
}
