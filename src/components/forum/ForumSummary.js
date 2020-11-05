import React from 'react';
import moment from 'moment';

const ForumSummary = ({forum, auth}) => {
    if(auth.uid !== forum.authorId){
        return (
            <div className="forum container">
                <div className="row">
                    <div className= "col s6 m6">
                    <p>tissss {forum.authorFirstName} {forum.authorLastName}</p>
                        <div className="card blue lighten-3 z-depth-0 forum">
                            <br/>
                            <span  className="black-text text-darken-3 forum-content">{forum.content}</span> 
                        </div> 
                        <p className="grey-text">{forum.createdAt }</p>                       
                    </div>
                    <div className= "col s6 m6">
                    </div>
                </div>
            </div>
        )
    } else 
        return (
            <div className="forum container">
                <div className="row">
                    <div className= "col s6 m6">
                       
                    </div>
                    <div className= "col s6 m6">
                        <p>thissss {forum.authorFirstName} {forum.authorLastName}</p>
                        <div className="card pink lighten-3 z-depth-0 forum">
                        <br/>
                        <span  className="black-text text-darken-3 forum-content">{forum.content}</span> 
                        </div>
                        <p className="grey-text">{forum.createdAt}</p>    
                    </div>
                </div>
            </div>

    )  
}

export default ForumSummary;