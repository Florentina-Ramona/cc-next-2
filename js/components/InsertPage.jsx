// js/components/MainPage.jsx
import { useRouter } from "next/router";

export default function InsertPage() {
	const insertRecord = async (e) => {
		e.preventDefault();

		const denumire = document.getElementById('denumire').value;
		const firma = document.getElementById('firma').value;
		const tip = document.getElementById('tip').value;
		const data = {
			denumire: denumire,
			firma: firma,
			tip: tip
		};

		console.log(data);

		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then( () => {
				console.log("A records has been uploaded")
				document.getElementById('denumire').value = '';
				document.getElementById('firma').value = '';
				document.getElementById('tip').value = '';
			})
			
	}

	const router=useRouter();

	function handleClickMain(){
		router.push('/');
	}

	return (
		<section style={{ width: '100vw', height: '100vh', backgroundColor: 'white', color: 'white' }}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-4xl font-bold text-red-400"}>Inserati aici medicamentele dorite</h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-red-300"}>Locul in care toate medicamentele se gasesc</p>

				<form>
					<div className="mb-6">
						<label htmlFor="denumire" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Denumirea este:</label>
						<input type="text" id="denumire"
						       className="bg-green-50 border border-black-300 text-green-900 text-sm rounded-lg focus:ring-back-500 focus:border-black-500 block w-full p-2.5 dark:bg-black-700 dark:border-green-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500"
						       placeholder="Denumirea medicamentului..." required/>
					</div>
					<div className="mb-6">
						<label htmlFor="firma"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firma este: </label>
						<textarea id="firma"
						       className="bg-green-50 border border-black-300 text-green-900 text-sm rounded-lg focus:ring-back-500 focus:border-black-500 block w-full p-2.5 dark:bg-black-700 dark:border-green-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500"
							   placeholder="Firma producatoare..." required/>
					</div>
					<div className="mb-6">
						<label htmlFor="tip"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipul este: </label>
						<textarea id="tip"
						       className="bg-green-50 border border-black-300 text-green-900 text-sm rounded-lg focus:ring-back-500 focus:border-black-500 block w-full p-2.5 dark:bg-black-700 dark:border-green-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500"
							   placeholder="Tipul medicamentului..." required/>
					</div>
					<button type="Salveaza"
					        onClick={ insertRecord }
					        className="text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit
					</button>
				</form>
                <div>
				<button type="button" 
				onClick={handleClickMain}
				 className="mt-4 text-gray-900 bg-gradient-to-r from-blue-200 via-green-300 to-grey-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					Go to Main Page</button>
				</div>
			</div>
		</section>
	)
}