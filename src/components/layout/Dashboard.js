import React, { Component } from 'react'
import Notifications from './Notifications'
import CaseList from '../cases/CaseList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render () {
        const {cases} = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <CaseList cases={cases} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        cases: state.firestore.ordered.cases
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'cases'}
    ])
)(Dashboard) //connecting to firestore online