import React from 'react';
import Button from '../Button';
import './styles.css';
// import flyer from '../../assets/img/simposio.jpg'
import flyer2 from '../../assets/img/congreso_viii.jpg';
// import logoSimposio from '../../assets/img/simposio2.png'
import sena from '../../assets/img/sena.png';
import sennova from '../../assets/img/sennova.png';
import qr from '../../assets/img/qr_formulario.jpg';
import agenda from '../../assets/img/agenda.png';
// import foto1 from '../../assets/img/foto1.jpg'
// import foto2 from '../../assets/img/foto2.jpg'
// import foto3 from '../../assets/img/foto3.jpg'
// import foto4 from '../../assets/img/foto4.jpg'
// import foto5 from '../../assets/img/foto5.jpg'
// import foto6 from '../../assets/img/foto6.jpg'

class Simposio extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="simposio">
				<section className="simposio-top">
					<h1>V Congreso Internacional de Investigación aplicada</h1>


				</section>
				<section className="sectionSimposio">
					<div className="simposio-top-info column">
						<h2>Ecosistema digital</h2>
						<h3>Sus aportes para la generación de conocimiento frente a los nuevos retos </h3>
						<p>
							El Servicio Nacional de Aprendizaje, como entidad pública de formación integral, se esfuerza
							por desarrollar habilidades en sus aprendices que les capaciten para proponer y ejecutar
							soluciones dirigidas a mejorar la productividad y competitividad tanto a nivel empresarial
							como nacional. Con el objetivo de contribuir activamente a este propósito y generar
							conocimiento que alimente de manera efectiva los programas curriculares, los proyectos en
							Tecnoparques y el sector productivo, el Grupo de Investigación Suomaya presenta el V
							Congreso Internacional de Investigación Aplicada 'Ecosistemas Digitales' y el VIII Simposio
							Internacional de Ciencia, Innovación y Tecnología.
						</p>
						<p>
							Este año, el tema central del evento serán los Ecosistemas Digitales, un concepto esencial
							que permitirá identificar los elementos fundamentales para la creación de entornos propicios
							que faciliten el desarrollo de actividades dinámicas de forma virtual, en el contexto de la
							creciente interconectividad digital que caracteriza la era actual.


							<br/> <br/> <strong>Agenda del evento: </strong>
							<br/>PROXIMAMENTE

							<br/>


							<br/>
						</p>
					</div>

					<div className="simposio-top-info column">
						<img
							className="flyer"
							alt="flyer"
							src={flyer2}
						/>
					</div>
				</section>

				<hr className="line container"/>

				<section className="sectionSimposio">
					<div className="simposio-top-support column">
						<h2>Con el apoyo de:</h2>
						<div className="support-logos row">
							<img src={sena}
							     alt="sena"
							     width="90"
							/>
							<img src={sennova}
							     alt="sennova"
							     width="210"
							/>
							{/* <img src={logoSimposio} alt="simposio" width="210" /> */}
						</div>

						<img src={qr}
						     alt="qr"
						     width="210"
						     className="qr_formulario"
						/>

						<Button link="https://forms.gle/P92Nf5MEd35JVsLF7">
							INSCRÍBETE AQUÍ
						</Button>
					</div>

					<div className="simposio-top-support column">
						<img src={agenda}
						     alt="qr"
						     width="150"
						     className="qr_formulario"
						/>

						<Button link="https://suomaya.co/build/static/media/agenda.pdf">
							DESCARGAR
						</Button>
					</div>
				</section>


			</div>
		);
	}
}


export default Simposio;