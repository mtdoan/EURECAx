import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";

export default function Dashboard({ children }) {
	let navigate = useNavigate();

	const user = JSON.parse(localStorage.getItem("User"));

	useEffect(() => {
		if (user === null) {
			localStorage.removeItem("User");
			navigate("/signIn");
		}
	}, []);

	const logout = async () => {
		try {
			const response = await fetch(global.route + `/api/users/logout`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			localStorage.removeItem("User");
			navigate("/signIn");
		} catch (err) {
			//console.log(err);
		}
	};

	return (
		<>
			<div className="App">
				<Header />
				<div className="w-20 -mb-10">
					{/** 
						TODO: We Should probably move this button component into the <Header /> file
						For the moment ive just added a negative margin and moved it to the left so its not in the way of stuff
						Feel free to remove the margins
						~ Paul
						*/}
					<button
						type="signout"
						onClick={() => logout()}
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Sign out
					</button>
				</div>
				<div className="flex flex-row h-[90vh] z-0">
					<HamburgerMenu />
					<div className="w-full h-full bg-gray-100">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}
