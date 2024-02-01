import React from 'react';
import './styles.css';
import Button from '../../Button';


import MapContainer from '../Interoperabilidad/map.js';


import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import Chart from './chart';
import ReactPlayer from 'react-player';
import video from '../../../assets/video/visionArtificial.mp4';

class ProyectoVisionArtificial extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lineChartData: {
				type: 'line',
				data: {
					labels: [],
					datasets: [
						{
							label: 'Temperatura',
							fill: false,
							data: [],
							backgroundColor: '#168ede',
							borderColor: '#168ede'
						},
						{
							label: 'intensidad',
							fill: false,
							data: [],
							backgroundColor: '#ff4017',
							borderColor: '#ff4017'
						}
					]
				}
			},
			lineChartOptions: {
				responsive: true,
				maintainAspectRatio: false,
				tooltips: {
					enabled: true
				},
				scales: {
					xAxes: [
						{
							ticks: {
								autoSkip: true,
								maxTicksLimit: 10
							}
						}
					]
				}
			}
			, stompClient: null
		};


	}


	render() {
		var x = this.state.width;


		return (
			<div className="info column">
				<h1>Visión Artificial</h1>
				<center>
					<section className="column">
						<ReactPlayer

							url= {video}

							controls = {true}

						/>
						<div>
							<p>
								Sumérgete en el fascinante campo de la visión artificial, una rama de la inteligencia
								artificial que capacita a las computadoras para interpretar y comprender imágenes y
								videos. Descubre este emocionante mundo a través de nuestro video y juego educativo 2D
								interactivo.
							</p>
							<p>
								Explora el funcionamiento de la cámara y aprende cómo los algoritmos de visión
								artificial pueden analizar y entender imágenes. Suma conocimientos sobre el proceso de
								entrenamiento de estos algoritmos, desentrañando sus características clave.
							</p>
							<p>
								¡Atrévete a adentrarte en la vanguardia de la tecnología con nuestra experiencia única
								de aprendizaje! Juega, aprende y comprende la magia detrás de la visión artificial.
								¡Inicia tu aventura ahora!
							</p>

							{//<iframe src="https://sebasapk.github.io/Paneles-Solares/" height="700" width="1000" frameborder="0"></iframe>
							}
							<iframe src="https://smileeart.github.io/vision-artificial-juego-/"
							        height="700"
							        width="1000"
							        frameborder="0"
							></iframe>
						</div>


						<nav>
							<ul>
								<li><a href="https://dashboard.suomaya.co/">

									{/* <Button link="https://dashboard.suomaya.co/">
                    Aplicación
                </Button>*/}


								</a></li>


							</ul>
						</nav>


					</section>
				</center>
			</div>

		);
	}


}


export default ProyectoVisionArtificial;