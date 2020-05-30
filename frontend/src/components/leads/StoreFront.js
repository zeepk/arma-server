import React, { Component } from 'react';
import { Card } from 'primereact/card';
import '../styles/storefront.css';

export default class StoreFront extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}
	createCards = (data_array) => {
		const card_array = data_array.map((item) => {
			return (
				<a
					className="p-col-12 p-md-6 p-lg-4 store-item"
					style={{ padding: '1.5em 0 0 0' }}
					href={item.link}
				>
					<img
						src={item.image}
						alt={item.header}
						className="store-item-image"
					/>
					<Card>
						<div
							className="p-grid"
							style={{
								width: '100%',
								margin: '0',
								paddingBottom: '0',
							}}
						>
							<div className="p-col-6">
								<div style={{ fontSize: '20px' }}>{item.header}</div>
								<div>{item.subheader}</div>
							</div>
							<div
								className="p-col-6"
								style={{
									textAlign: 'right',
									fontSize: '20px',
								}}
							>
								<div
									style={{
										backgroundColor: '#d4af37',
										padding: '5px 10px',
										// minWidth: '60px',
										float: 'right',
										color: 'black',
									}}
								>
									{item.price}
								</div>
							</div>
						</div>
					</Card>
				</a>
			);
		});
		return card_array;
	};
	componentDidMount() {
		fetch('/api/storeitems')
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				console.log(myJson);
				const cards = this.createCards(myJson);
				this.setState({
					data: cards,
				});
			});
	}
	render() {
		return (
			<div>
				<div className="gray-background"></div>
				<div className="store-container">
					<h2 className="store-title">In Stock</h2>

					<div
						className="p-grid"
						style={{
							width: '90%',
							margin: '5vh 5vw 0 5vw',
							paddingBottom: '5vh',
						}}
					>
						{this.state.data}
					</div>
				</div>
			</div>
		);
	}
}
