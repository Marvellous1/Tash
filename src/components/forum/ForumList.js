import React from 'react';
import ForumSummary from './ForumSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from "redux";
import CreateForum from './CreateForum';

const ForumList = (props) => {
    const { forums, auth} = props
    console.log('satef', props)
    return (
        <div className="forum-list section">
            <h3 className=" center "><u>Forum</u></h3>
            {forums && forums.map(forum => {
                return (
                    <ForumSummary auth={auth} forum={forum} key={forum.id} />
                )
            })} 
            <div className='section'>
                <CreateForum />
            </div>
                     
        </div>
    )   
}

const mapStateToProps = (state) => {
    return {
        forums: state.forum.forums,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'forums', orderBy: ['createdAt', 'desc']},
    ])
) (ForumList);
