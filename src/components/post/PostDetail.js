import React from 'react';
import moment from 'moment'
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from "redux";
import { Redirect } from 'react-router-dom';


const PostDetail = (props) => {
    const { post, auth } = props;
    // if (!auth.uid) return <Redirect to = '/signin' />
    if (post) {
        return (
            <div className="container section post-details" >
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ post.title }</span>
                        <p>{ post.content }</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by {post.authorFirstName} { post.authorLastName}</div>
                    </div>
                </div>
            </div>
        ) 
    } else {
        return (
            <div className= " container center">
                <p>Loading posts...</p> 
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
        const id = ownProps.match.params.id;
        const posts = state.post.posts;
        const post = posts ? posts[id] : null
    return {
        post : post,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(PostDetail);