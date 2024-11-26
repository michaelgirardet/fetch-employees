import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";
import React from "react";

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thomson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/38.jpg",
	},
};

function App() {
	const [employee, setEmployee] = useState(sampleEmployee);

	const getEmployee = () => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};

	return (
		<div className="App">
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}

export default App;
