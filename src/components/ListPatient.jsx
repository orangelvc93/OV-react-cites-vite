import Patient from "./Patient";

const ListPatient = ({ pacientes, setPaciente, eliminaPaciente }) => {
	return (
		<div className="form_container">
			{pacientes.length ? (
				<>
					<h2 className="title">Listado de Pacientes</h2>
					<p className="sub_title">
						Administra tus <span className="span">Pacientes y Citas</span>
					</p>
					<div className="scroll">
						{pacientes.map((paciente) => (
							<Patient
								key={paciente.id}
								paciente={paciente}
								setPaciente={setPaciente}
								eliminaPaciente={eliminaPaciente}
							/>
						))}
					</div>
				</>
			) : (
				<>
					<h2 className="title">No hay Pacientes</h2>
					<p className="sub_title">
						Agregue pacientes y <span className="span">visualizarlos aquí</span>
					</p>
				</>
			)}
		</div>
	);
};

export default ListPatient;
