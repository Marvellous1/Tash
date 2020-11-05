import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createForum } from '../../store/actions/forumActions';
import { Redirect } from 'react-router-dom';

 class CreateForum extends Component {
     state = {
        content: ''
     }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createForum(this.state);
    }
    render() {
        console.log('props', this.props)
                console.log(" sttg", this.state)
        // const { auth } = this.props
        // if (!auth.uid) return <Redirect to = '/signin' />
        return (
            <div className="container create-forum ">
                <div className="row">
                    <div className="col s8 m8">
                    <textarea id="content" placeholder="Enter Message" className="materialize-textarea forum-text" onChange={this.handleChange}/>
                    </div>
                    <div className="col s4 m4">
                    <button className="btn pink lighten-1 z-depth-0 forum-button" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>          
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth 
    }
}      

const mapDispatchToProps = (dispatch) => {
    return {
        createForum: (forum) => dispatch(createForum(forum))
    }
}     

export default connect(mapStateToProps, mapDispatchToProps)(CreateForum)