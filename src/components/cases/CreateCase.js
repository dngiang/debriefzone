import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCase } from '../../store/actions/caseActions'

class CreateCase extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createCase(this.state) //after dispatching state to props
    }

    render() {
        return (
            <div className="container">
            <form onSubmit= {this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">My New Case</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="story">Case Story</label>
                    <textarea id="story" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighen-1 z-depth-0">Create</button>
                </div>
            </form>
            </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCase: (file) => dispatch(createCase(file))
    }
} 
export default connect(null, mapDispatchToProps)(CreateCase)

