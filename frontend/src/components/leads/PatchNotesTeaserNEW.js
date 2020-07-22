import React, { Component, Fragment } from 'react'
import { Card } from 'primereact/card'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPatchNotes } from '../../actions/leads'
import renderHTML from 'react-render-html'
import { Panel } from 'primereact/panel'
import '../styles/patchnotesteaser.css'

export class PatchNotesTeaserNEW extends Component {
	static propTypes = {
		patchnotes: PropTypes.array,
		getPatchNotes: PropTypes.func.isRequired,
	}

	componentDidMount() {
		this.props.getPatchNotes()
	}
	render() {
		console.log(this.props.patchnotes)
		let patch_notes
		if (this.props.patchnotes) {
			patch_notes = this.props.patchnotes.reverse().map((note) => {
				return (
					<div>
						<Card
							key={note.id}
							title={note.name + ' ' + note.version}
							style={{
								width: '95%',
								marginBottom: '10px',
								backgroundColor: '#3e3e3e',
							}}
						>
							<p>{renderHTML(note.content)}</p>
						</Card>
						<hr style={{ backgroundColor: 'rgba(77, 77, 77, 0.699)' }} />
					</div>
				)
			})
		}

		return (
			<div>
				<Fragment>
					<Panel header="Patch Notes" style={{ fontSize: '17px' }}>
						{patch_notes}
					</Panel>
				</Fragment>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	patchnotes: state.leads.patchnotes,
})

export default connect(mapStateToProps, { getPatchNotes })(PatchNotesTeaserNEW)
