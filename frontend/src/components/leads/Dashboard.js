import React, { Fragment } from 'react';
import PatchNotesTeaser from './PatchNotesTeaser';
import NewsFeed from './NewsFeed';

export default function Dashboard() {
	return (
		<Fragment>
			<div class="p-grid" style={{ width: '100%' }}>
				<div class="p-md-4">
					<NewsFeed />
				</div>
				<div class="p-md-8">
					<PatchNotesTeaser />
				</div>
			</div>
		</Fragment>
	);
}
