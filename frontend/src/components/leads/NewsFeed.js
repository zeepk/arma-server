import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export class NewsFeed extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<Card title="Twitter Feed" style={{ fontSize: '20px' }}>
						<TwitterTimelineEmbed
							sourceType="profile"
							screenName="Arma3official"
							options={{
								width: '100%',
								height: '45vh'
							}}
							theme="dark"
							noHeader={true}
							noBorders={true}
							noFooter={true}
						/>
					</Card>
				</Fragment>
			</div>
		);
	}
}

export default NewsFeed;
