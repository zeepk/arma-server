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
			const date = new Date(item.created_at);
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
									margin: '5px 0 0 0',
								}}
							>
								<p style={{ fontStyle: 'italic' }}>
									{item.author
										? `${item.author} - ${date.toLocaleDateString()}`
										: date.toLocaleDateString()}
								</p>
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
								padding: '40px 0 0 0',
								position: 'absolute',
								width: '90%',
								overflow: 'hidden',
								height: '15vh',
								top: '44vh',
								background:
									'rgba(0, 0, 0, 0) linear-gradient(to top, rgb(0, 9, 19) 20%, rgba(0, 9, 19, 0) 100%) repeat scroll 0% 0%',
							}}
						>
							<div
								style={{
									textAlign: 'center',
									maxWidth: '90vw',
								}}
							>
								<p className="patch-title">{`${patch.name} ${patch.version}`}</p>
								<p style={{ fontStyle: 'italic' }}>
									{patch.author ? `- ${patch.author}` : ''}
								</p>
							</div>
						</div>
						<div
							className="p-col-12"
							style={{ margin: '10vh auto', textAlign: 'left' }}
						>
							{renderHTML(patch.content)}
						</div>
					</div>
				</div>
			);
		} else {
			component = (
				<div>
					<div
						className="update-title"
						style={{ width: '230px', height: '100px', margin: '0 0 0 7vw' }}
					>
						<div className="p-grid" style={{ margin: 0, height: '20px' }}>
							<div
								className="p-col-6 title-border"
								style={{
									borderTop: '3px solid white',
									borderLeft: '3px solid white',
								}}
							/>
							<div className="p-col-6 title-border" />
						</div>
						<div
							className="p-grid"
							style={{
								margin: 0,
								height: '60px',
								borderRight: '3px solid white',
								borderLeft: '3px solid white',
							}}
						>
							<div className="p-col-6 title-border">
								<h2 style={{ margin: '0 0 0 25px', fontSize: '40px' }}>
									UPDATES
								</h2>
							</div>
							<div className="p-col-6 title-border" />
						</div>
						<div className="p-grid" style={{ margin: 0, height: '20px' }}>
							<div className="p-col-6 title-border" />
							<div
								className="p-col-6 title-border"
								style={{
									borderBottom: '3px solid white',
									borderRight: '3px solid white',
								}}
							/>
						</div>
					</div>

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
