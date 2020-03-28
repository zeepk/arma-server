import React, { Fragment } from 'react';
import PatchNotesTeaser from './PatchNotesTeaser';
import NewsFeed from './NewsFeed';
import Spotlight from './Spotlight';
import Tutorials from './Tutorials';

export default function Dashboard() {
	return (
		<Fragment>
			<div className="p-grid" style={{ width: '100%' }}>
				<div className="p-md-4" style={{ padding: '1.5em' }}>
					<NewsFeed />
				</div>
				<div className="p-md-8" style={{ padding: '1.5em' }}>
					<PatchNotesTeaser />
				</div>
			</div>
			<div className="p-grid" style={{ width: '100%' }}>
				<div className="p-md-6" style={{ padding: '1.5em' }}>
					<Spotlight />
				</div>
				<div className="p-md-6" style={{ padding: '1.5em' }}>
					<Tutorials />
				</div>
			</div>
		</Fragment>
	);
}
