import React, { Fragment } from 'react';
import PatchNotesTeaserNEW from './PatchNotesTeaserNEW';
import PatchNotesTeaser from './PatchNotesTeaserOLD';
import NewsFeed from './NewsFeed';
import Spotlight from './Spotlight';
import Placeholder from './Placeholder';
import Tutorials from './Tutorials';

export default function Dashboard() {
	return (
		<Fragment>
			<div className="p-grid" style={{ width: '90%', margin: '0 5vw' }}>
				<div className="p-md-4" style={{ padding: '1.5em' }}>
					<NewsFeed />
				</div>
				<div className="p-md-8" style={{ padding: '1.5em' }}>
					<PatchNotesTeaserNEW />
				</div>
			</div>
			<div className="p-grid" style={{ width: '90%', margin: '5vh 5vw' }}>
				<div className="p-md-6">
					<Spotlight />
				</div>
				<div className="p-md-6">
					<Tutorials />
				</div>
			</div>
			<div
				className="p-grid"
				style={{ width: '90%', margin: '5vh 5vw 0 5vw', paddingBottom: '5vh' }}
			>
				<div className="p-md-4" style={{ padding: '1.5em 0 0 0' }}>
					<Placeholder image_title="Placeholder3" tag="Images" />
				</div>
				<div className="p-md-4" style={{ padding: '1.5em 0 0 0' }}>
					<Placeholder image_title="Placeholder4" tag="Videos" />
				</div>
				<div className="p-md-4" style={{ padding: '1.5em 0 0 0' }}>
					<Placeholder image_title="Placeholder5" tag="Press Assets" />
				</div>
			</div>
		</Fragment>
	);
}
