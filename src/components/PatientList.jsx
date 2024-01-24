import { Patient } from "./Patient";

const PatientList = () => {
	return (
		<div className="form_container">
			<h2 className="title">Listado de Pacientes</h2>
			<p className="sub_title">
				Administra tus <span className="span">Pacientes y Citas</span>
			</p>

			<div className="scroll">
				<Patient />
			</div>
		</div>
	);
};

export default PatientList;
