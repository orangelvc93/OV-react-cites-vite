import { useEffect, useState } from "react";
import Error from "./Error";

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [nombre, setNombre] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");

	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			const { nombre, propietario, email, fecha, sintomas } = paciente;
			setNombre(nombre);
			setPropietario(propietario);
			setEmail(email);
			setFecha(fecha);
			setSintomas(sintomas);
		}
	}, [paciente]);

	const generaId = () => {
		const random = Math.random().toString(36).slice(2);
		const fecha = Date.now().toString(36);
		return random + fecha;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([nombre, propietario, email, fecha, sintomas].includes("")) {
			setError(true);
			return;
		}
		setError(false);

		const newPatient = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
		};

		if (paciente.id) {
			newPatient.id = paciente.id;
			const pacientesActualizados = pacientes.map((pacienteState) =>
				pacienteState.id === newPatient.id ? newPatient : pacienteState
			);
			setPacientes(pacientesActualizados);
			setPaciente({});
		} else {
			newPatient.id = generaId();
			setPacientes([...pacientes, newPatient]);
		}

		/* Limpiamos el formulario */
		setNombre("");
		setPropietario("");
		setEmail("");
		setFecha("");
		setSintomas("");
	};

	return (
		<div className="form_container">
			<h2 className="title">Seguimiento Pacientes</h2>
			<p className="sub_title">
				Añade pacientes y <span className="span">Administrarlos</span>
			</p>

			<form
				onSubmit={handleSubmit}
				className="form"
			>
				{/* Mensaje de error =======================0 */}
				{error && (
					<Error>
						<p>Todos los campos son obligatorios</p>
					</Error>
				)}

				{/* Nombre de la mascota ====================== */}
				<div>
					<label
						className="form_label"
						htmlFor="mascota"
					>
						Nombre Mascota
					</label>
					<input
						className="form_input"
						id="mascota"
						type="text"
						placeholder="Nombre de la Mascota"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				{/* Nombre del propietario ====================== */}
				<div>
					<label
						className="form_label"
						htmlFor="propietario"
					>
						Propietario
					</label>
					<input
						className="form_input"
						id="propietario"
						type="text"
						placeholder="Nombre del Propietario"
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>
				{/* EMAIL  ==================================== */}
				<div>
					<label
						className="form_label"
						htmlFor="email"
					>
						Nombre Mascota
					</label>
					<input
						className="form_input"
						id="email"
						type="email"
						placeholder="Email del Propietario"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				{/* ALTA ====================== */}
				<div>
					<label
						className="form_label"
						htmlFor="fecha"
					>
						Alta
					</label>
					<input
						className="form_input"
						id="fecha"
						type="date"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				{/* SÍNTOMAS ====================== */}
				<div>
					<label
						className="form_label"
						htmlFor="sintomas"
					>
						Síntomas
					</label>
					<textarea
						className="form_input"
						id="sintomas"
						placeholder="Describe los Síntomas"
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>
				<input
					className="btn_1"
					type="submit"
					value={paciente.id ? "Editar paciente" : "Agregar paciente"}
				/>
			</form>
		</div>
	);
};

export default Form;
