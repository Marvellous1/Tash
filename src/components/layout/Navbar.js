import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (
        <nav className="transparent z-depth-0">
        <div class="nav-wrapper">
          <Link to="/" className="">
            <img src="/assets/Logo.svg" alt="Logo" />
          </Link>
          <a
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger right text-black"
          >
            <i className="material-icons">menu</i>
          </a>
         { links }
        </div>
      </nav>
    )  
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);