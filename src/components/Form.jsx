const Form = () => {
	return (
		<div className="form_container">
			<h2 className="title">Seguimiento Pacientes</h2>
			<p className="sub_title">
				Añade pacientes y <span className="span">Administrarlos</span>
			</p>

			<form className="form">
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
					/>
				</div>
				<input
					className="btn_1"
					type="submit"
					value={"Agregar paciente"}
				/>
			</form>
		</div>
	);
};

export default Form;
