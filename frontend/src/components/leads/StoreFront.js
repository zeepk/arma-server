import React, { Fragment } from 'react';
import { Card } from 'primereact/card';
import '../styles/storefront.css';

export default function StoreFront() {
	return (
		<div className="store-container">
			<h1 className="store-title">In Stock</h1>

			<div
				className="p-grid"
				style={{ width: '90%', margin: '5vh 5vw 0 5vw', paddingBottom: '5vh' }}
			>
				<div
					className="p-col-12 p-md-6 p-lg-4"
					style={{ padding: '1.5em 0 0 0' }}
				>
					<Card title="Title" subTitle="SubTitle">
						Content
					</Card>
				</div>
				<div
					className="p-col-12 p-md-6 p-lg-4"
					style={{ padding: '1.5em 0 0 0' }}
				>
					<Card title="Title" subTitle="SubTitle">
						Content
					</Card>
				</div>
				<div
					className="p-col-12 p-md-6 p-lg-4"
					style={{ padding: '1.5em 0 0 0' }}
				>
					<Card title="Title" subTitle="SubTitle">
						Content
					</Card>
				</div>
			</div>
		</div>
	);
}
