import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const CaseDetails = (props) => {
    const { file } = props;
    if (file) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="class-content">
                <span className="card-title">{ file.title }</span>
                <p>{ file.story }</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by {file.authorFirstName} {file.authorLastName}</div>
                <div>Today</div>
            </div>
          </div>
        </div>
      )
    } else {
  return (
    <div className="container center">
    <p>Loading case...</p>
    </div>
    )
    
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const cases = state.firestore.data.cases;
  const file = cases ? cases[id] : null;
  return {
    file: file
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'cases'}
  ])
)(CaseDetails)