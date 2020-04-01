import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPatchNotes } from '../../actions/leads';

export class PatchNotesTeaser extends Component {
	static propTypes = {
		patchnotes: PropTypes.array,
		getPatchNotes: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.getPatchNotes();
	}
	render() {
		console.log(this.props.patchnotes);
		let patch_notes;
		if (this.props.patchnotes) {
			patch_notes = this.props.patchnotes.reverse().map(note => {
				return (
					<Card
						key={note.id}
						title={note.name + ' ' + note.version}
						style={{ width: '95%' }}
					>
						<p>{note.content}</p>
					</Card>
				);
			});
		}

		return (
			<div>
				<Fragment>
					<Card
						title="Patch Notes Teasers"
						style={{ fontSize: '20px', overflow: 'scroll', maxHeight: '50vh' }}
					>
						{patch_notes}
					</Card>
				</Fragment>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	patchnotes: state.leads.patchnotes
});

export default connect(mapStateToProps, { getPatchNotes })(PatchNotesTeaser);
