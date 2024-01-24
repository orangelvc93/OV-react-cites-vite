const Patient = ({ paciente, setPaciente, eliminaPaciente }) => {
	const { nombre, propietario, email, fecha, sintomas, id } = paciente;

	const handleEliminar = () => {
		const respuesta = confirm("Deseas eliminar este paciente?");
		if (respuesta) {
			eliminaPaciente(id);
		}
	};

	return (
		<div className="list_patient">
			{/* Nombre de la mascota =============== */}
			<p className="list_title">
				Nombre: {""}
				<span className="list_text">{nombre}</span>
			</p>
			{/* Nombre del propietario =============== */}
			<p className="list_title">
				Propietario: {""}
				<span className="list_text">{propietario}</span>
			</p>
			{/* Email del propietario =============== */}
			<p className="list_title">
				Email: {""}
				<span className="list_text">{email}</span>
			</p>
			{/* Fecha de alta ======================= */}
			<p className="list_title">
				Fecha alta: {""}
				<span className="list_text">{fecha}</span>
			</p>
			{/* Síntomas  ============================== */}
			<p className="list_title">
				Síntomas: {""}
				<span className="list_text">{sintomas}</span>
			</p>

			<div className="buttons">
				<button
					className="btn_1"
					onClick={() => setPaciente(paciente)}
				>
					Editar
				</button>
				<button
					onClick={handleEliminar}
					className="btn_1 btn_2"
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Patient;
