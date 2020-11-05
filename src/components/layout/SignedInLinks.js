import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to='/create'>New Project</NavLink></li>
                <li><a onClick={props.signOut} href='/'>Log out</a></li>
                <li><NavLink to='/' className= 'btn btn-floating pink lighten-1'>
                    {props.profile.initials}
                </NavLink></li>
            </ul>
            <ul className="sidenav" id="mobile-demo">
                <li><NavLink to='/' className= 'btn btn-floating pink lighten-1'>
                    {props.profile.initials}
                </NavLink></li>
                <li><NavLink to='/create'>New Project</NavLink></li>
                <hr style={{borderTop: '2px solid #ec407a' , width: '90%'}}/>
                <li><a href='/blog'>Blog</a></li>
                <hr style={{borderTop: '2px solid #ec407a' , width: '90%'}}/>
                <li><a href='/forum'>Forum</a></li>
                <hr style={{borderTop: '1px solid #ec407a' , width: '90%'}}/>
                <hr style={{borderTop: '1px solid #ec407a' , width: '90%'}}/>
                <li><a href='/signin' onClick={props.signOut} >Log out</a></li>
            </ul>
        </div>
    )  
}

const mapDispatchToProps = ( dispatch) => {
    return {
        signOut: () => dispatch(signOut())   
    }
}

export default connect( null, mapDispatchToProps)(SignedInLinks);