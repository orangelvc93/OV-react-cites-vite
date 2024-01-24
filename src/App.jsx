import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/patientList";

function App() {
	return (
		<div className="container">
			<Header />
			<main>
				<Form />
				<PatientList />
			</main>
			<Footer />
		</div>
	);
}

export default App;
