import React, { Component, Fragment } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import '../styles/newsfeed.css';

export class NewsFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0
		};
	}

	render() {
		const announcements = (
			<div>
				<h1>Hello and Welcome!</h1>
				<p>
					This is where future information for the server will be placed. Keep
					an eye out for useful tips and upcoming notices!
				</p>
				<p>
					This is where future information for the server will be placed. Keep
					an eye out for useful tips and upcoming notices!
				</p>
				<p>
					This is where future information for the server will be placed. Keep
					an eye out for useful tips and upcoming notices!
				</p>
			</div>
		);

		return (
			<div>
				<Fragment>
					<TabView
						activeIndex={this.state.activeIndex}
						onTabChange={e => this.setState({ activeIndex: e.index })}
						renderActiveOnly={false}
					>
						<TabPanel
							header="Announcements"
							contentStyle={{ height: '40vh', overflow: 'auto' }}
						>
							{announcements}
						</TabPanel>
						<TabPanel header="Twitter Feed">
							<TwitterTimelineEmbed
								sourceType="profile"
								screenName="Arma3official"
								options={{
									width: '100%',
									height: '39.5vh'
								}}
								theme="dark"
								noHeader={true}
								noBorders={true}
								noFooter={true}
							/>
						</TabPanel>
					</TabView>
					{/* <Card title="Twitter Feed" style={{ fontSize: '20px' }}>
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
					</Card> */}
				</Fragment>
			</div>
		);
	}
}

export default NewsFeed;
