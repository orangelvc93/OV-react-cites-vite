import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatient from "./components/ListPatient";

function App() {
	const [pacientes, setPacientes] = useState(
		JSON.parse(localStorage.getItem("pacientes")) ?? []
	);
	const [paciente, setPaciente] = useState({});

	useEffect(() => {
		localStorage.setItem("pacientes", JSON.stringify(pacientes));
	}, [pacientes]);

	const eliminaPaciente = (id) => {
		const pacientesActualizados = pacientes.filter(
			(paciente) => paciente.id !== id
		);
		setPacientes(pacientesActualizados);
	};

	return (
		<div className="container">
			<Header />
			<main>
				<Form
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListPatient
					pacientes={pacientes}
					paciente={paciente}
					setPaciente={setPaciente}
					eliminaPaciente={eliminaPaciente}
				/>
			</main>
			<Footer />
		</div>
	);
}

export default App;
