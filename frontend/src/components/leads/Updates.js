import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Card } from 'primereact/card';
import '../styles/updates.css';

export default class Updates extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}
	createCards = (data_array) => {
		const card_array = data_array.map((item) => {
			return (
				<a
					className="p-col-12 p-sm-6 p-lg-4 store-item"
					style={{ padding: '1.5em 0 0 0' }}
					href={`/updates?patch=${item.slug}`}
					key={item.slug}
				>
					<img src={item.image} alt={item.name} className="update-item-image" />
					<Card className="update-card">
						<div
							style={{
								width: '100%',
								margin: '0',
								paddingBottom: '0',
								maxHeight: '200px',
								overflow: 'auto',
							}}
						>
							<div>
								<div
									style={{ fontSize: '20px' }}
								>{`${item.name} ${item.version}`}</div>
							</div>
							<div
								style={{
									textAlign: 'left',
									fontSize: '16px',
								}}
							>
								{renderHTML(item.content)}
							</div>
						</div>
					</Card>
				</a>
			);
		});
		return card_array;
	};
	componentDidMount() {
		fetch('/api/patchnotes')
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				const cards = this.createCards(myJson);
				this.setState({
					data: myJson,
					cards,
				});
			});
	}
	render() {
		var component = <div />;
		if (window.location.href.includes('patch') && this.state.data.length > 0) {
			console.log(window.location.href.split('=')[1]);
			console.log(this.state.data);
			const patch = this.state.data.find(
				(note) => note.slug === window.location.href.split('=')[1]
			);
			component = (
				<div>
					<a style={{ color: 'white', padding: '5vh 0 0 5vw' }} href="/updates">
						⬅ Back to Overview
					</a>

					<div
						className="p-grid"
						style={{
							width: '90%',
							margin: '5vh 5vw 0 5vw',
							paddingBottom: '5vh',
							zIndex: 100,
						}}
					>
						<div className="p-col-12" style={{ display: 'flex' }}>
							<img
								src={patch.image}
								alt={patch.name}
								className="update-patch-image"
								style={{
									margin: '0 auto',
									width: '95vw',
									height: '50vh',
									objectFit: 'cover',
								}}
							/>
						</div>
						<div
							className="p-col-12"
							style={{
								textAlign: 'center',
								position: 'absolute',
								width: '100%',
								height: '15vh',
								top: '44vh',
								background:
									'rgba(0, 0, 0, 0) linear-gradient(to top, rgb(0, 9, 19) 20%, rgba(0, 9, 19, 0) 100%) repeat scroll 0% 0%',
							}}
						>
							<p className="patch-title">{`${patch.name} ${patch.version}`}</p>
							<p style={{ fontStyle: 'italic' }}>
								{patch.author ? `- ${patch.author}` : ''}
							</p>
						</div>
						<div
							className="p-col-12"
							style={{ margin: '0 auto', textAlign: 'left' }}
						>
							{renderHTML(patch.content)}
						</div>
					</div>
				</div>
			);
		} else {
			component = (
				<div>
					<h2 className="update-title">Updates</h2>

					<div
						className="p-grid"
						style={{
							width: '90%',
							margin: '5vh 5vw 0 5vw',
							paddingBottom: '5vh',
							zIndex: 100,
						}}
					>
						{this.state.cards}
					</div>
				</div>
			);
		}
		return (
			<div>
				<div className="gray-background"></div>
				<div className="update-container">{component}</div>
			</div>
		);
	}
}
